import { createLogger, debugSuppressedError } from "../utils/logger.js";
const log = createLogger("whatsapp");
export async function sendWhatsAppTypingUpdate(sock, jid, isTyping) {
    try {
        await sock.sendPresenceUpdate(isTyping ? "composing" : "paused", jid);
    }
    catch (error) {
        debugSuppressedError(log, "Transient WhatsApp typing update failed; message delivery will continue.", error, {
            jid,
            isTyping,
        });
    }
}
