/**
 * web/sse-hub.ts – SSE client connection manager.
 *
 * Manages the set of connected SSE clients and provides broadcast()
 * to push events to all of them simultaneously.
 *
 * Consumers: channels/web.ts creates a single SseHub and uses it
 *            throughout the web channel for real-time event delivery.
 */
import { createLogger, debugSuppressedError } from "../../../utils/logger.js";
import { broadcastEvent, handleSse } from "./sse.js";
const log = createLogger("web.sse-hub");
/** Manages SSE client connections and provides broadcast(). */
export class SseHub {
    clients = new Set();
    handleRequest(req) {
        return handleSse(this, req);
    }
    broadcast(eventType, data) {
        broadcastEvent(this, eventType, data);
    }
    closeAll() {
        for (const client of this.clients) {
            clearInterval(client.heartbeat);
            try {
                client.controller.close();
            }
            catch (error) {
                debugSuppressedError(log, "Failed to close an SSE client controller during shutdown.", error);
            }
        }
        this.clients.clear();
    }
}
