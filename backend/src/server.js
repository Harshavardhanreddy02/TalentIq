import express from "express";
import path from "path";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";
import { WebSocketServer } from "ws";
import { setupWSConnection } from "./lib/yjs-server.js";
import { createServer } from "http";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";
import { rateLimit } from 'express-rate-limit';
import { ipKeyGenerator } from 'express-rate-limit';

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ noServer: true });

const __dirname = path.resolve();

// middleware
app.use(express.json());
// Configure CORS to allow both production and development origins
const allowedOrigins = [
  ENV.CLIENT_URL, // production
  'http://localhost:5173', // Vite dev server
  'http://localhost:3000', // Common React dev server
  'https://codedrill-d18m.vercel.app' // Deployed frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});

// Yjs connection handler
wss.on("connection", (conn, req) => {
  // setupWSConnection handles all the Yjs syncing logic automatically
  setupWSConnection(conn, req, { gc: true });
});

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  keyGenerator: (req) => {
    // Use the ipKeyGenerator helper to properly handle both IPv4 and IPv6
    return ipKeyGenerator(req);
  }
});

app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()

app.use("/api", apiLimiter);
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    server.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
  } catch (error) {
    console.error(" Error starting the server", error);
  }
};

startServer();
