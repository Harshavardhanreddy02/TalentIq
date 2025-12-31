import * as Y from 'yjs';
import * as syncProtocol from 'y-protocols/dist/sync.cjs';
import * as awarenessProtocol from 'y-protocols/dist/awareness.cjs';
import * as encoding from 'lib0/dist/encoding.cjs';
import * as decoding from 'lib0/dist/decoding.cjs';

const docs = new Map();

export const setupWSConnection = (conn, req) => {
  conn.binaryType = 'arraybuffer';
  // Extract room name from URL (e.g., /session-123)
  const roomName = req.url.slice(1) || 'default';
  
  let doc = docs.get(roomName);
  if (!doc) {
    doc = new Y.Doc();
    docs.set(roomName, doc);
  }

  conn.on('message', (message) => {
    const encoder = encoding.createEncoder();
    const decoder = decoding.createDecoder(new Uint8Array(message));
    const messageType = decoding.readVarUint(decoder);
    
    // Sync logic
    if (messageType === 0) {
      encoding.writeVarUint(encoder, 0);
      syncProtocol.readSyncMessage(decoder, encoder, doc, null);
      if (encoding.length(encoder) > 1) {
        conn.send(encoding.toUint8Array(encoder));
      }
    }
  });
};