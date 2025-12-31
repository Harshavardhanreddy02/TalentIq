import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

export function createYjsProvider(sessionId) {
  const ydoc = new Y.Doc();

  // Detect if we are on localhost or production
  const host = window.location.hostname === "localhost" 
    ? "localhost:5000" 
    : window.location.host;
    
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";

  const provider = new WebsocketProvider(
    `${protocol}//${host}`, 
    `session-${sessionId}`,
    ydoc,
    { connect: true }
  );

  const yText = ydoc.getText("monaco");

  return { ydoc, provider, yText };
}