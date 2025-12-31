import * as Y from 'yjs';
import * as syncProtocol from 'y-protocols/dist/sync.cjs';
import * as awarenessProtocol from 'y-protocols/dist/awareness.cjs';
import * as encoding from 'lib0/dist/encoding.cjs';
import * as decoding from 'lib0/dist/decoding.cjs';

// 1. GLOBAL STATE: These must be outside the function to persist across connections
const docs = new Map();
const rooms = new Map(); // THIS WAS MISSING IN YOUR SNIPPET

const messageSync = 0;
const messageAwareness = 1;

export const setupWSConnection = (conn, req) => {
  conn.binaryType = 'arraybuffer';
  
  // Extract room name (session ID)
  const url = new URL(req.url, `http://${req.headers.host}`);
  const roomName = url.pathname.slice(1) || 'default';

  // 2. Room Management: Track this connection
  if (!rooms.has(roomName)) {
    rooms.set(roomName, new Set());
  }
  rooms.get(roomName).add(conn);

  // 3. Document Management
  let doc = docs.get(roomName);
  if (!doc) {
    doc = new Y.Doc();
    docs.set(roomName, doc);
  }

  const awareness = new awarenessProtocol.Awareness(doc);

  const send = (message) => {
    if (conn.readyState === 1) conn.send(message);
  };

  // Initial Sync Step 1
  const encoder = encoding.createEncoder();
  encoding.writeVarUint(encoder, messageSync);
  syncProtocol.writeSyncStep1(encoder, doc);
  send(encoding.toUint8Array(encoder));

  // 4. THE LIVE RELAY (The part that fixed the "refresh" issue)
  conn.on('message', (message) => {
    try {
      // BROADCAST to everyone else in the same room
      const roomConns = rooms.get(roomName);
      roomConns.forEach(c => {
        if (c !== conn && c.readyState === 1) {
          c.send(message);
        }
      });

      // Update the server's version of the document
      const decoder = decoding.createDecoder(new Uint8Array(message));
      const encoder = encoding.createEncoder();
      const messageType = decoding.readVarUint(decoder);

      switch (messageType) {
        case messageSync:
          encoding.writeVarUint(encoder, messageSync);
          syncProtocol.readSyncMessage(decoder, encoder, doc, conn);
          if (encoding.length(encoder) > 1) {
            send(encoding.toUint8Array(encoder));
          }
          break;
        case messageAwareness:
          awarenessProtocol.applyAwarenessUpdate(
            awareness,
            decoding.readVarUint8Array(decoder),
            conn
          );
          break;
      }
    } catch (err) {
      console.error('Yjs Relay Error:', err);
    }
  });

  conn.on('close', () => {
    rooms.get(roomName)?.delete(conn);
    // If room is empty, clean up memory
    if (rooms.get(roomName)?.size === 0) {
      rooms.delete(roomName);
      // Optional: docs.delete(roomName); // Only if you don't want to persist data in memory
    }
  });
};