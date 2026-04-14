/**
 * router.ts – Message routing and formatting for the agent pipeline.
 *
 * Responsible for:
 *   - Detecting the channel type (web, whatsapp) from a chat JID.
 *   - Formatting arrays of NewMessage objects into a compact transcript for the agent prompt.
 *   - Stripping `<internal>…</internal>` tags from agent output before delivery.
 *   - Applying channel-specific output escaping (HTML entities for web).
 *
 * Consumers:
 *   - runtime/message-loop.ts calls formatMessages() to build the user-turn
 *     content for the agent.
 *   - agent-pool.ts calls formatOutbound() / stripInternalTags() when
 *     delivering the agent's response to channels.
 *   - channels/web.ts and channels/whatsapp.ts use detectChannel() to
 *     determine formatting rules.
 *   - agent-control uses detectChannel() to scope command execution.
 */
/** Infer the channel from a chat JID string (web: prefix → web, else whatsapp). */
export function detectChannel(chatJid) {
    if (!chatJid)
        return "unknown";
    if (chatJid.startsWith("web:"))
        return "web";
    if (chatJid.includes("@s.whatsapp.net") || chatJid.endsWith("@g.us"))
        return "whatsapp";
    return "unknown";
}
/** Escape special XML characters in a string for safe embedding in XML tags. */
export function escapeXml(s) {
    if (!s)
        return "";
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function normalizePromptHeaderValue(value) {
    if (typeof value !== "string")
        return "";
    return value.replace(/[\r\n\t]+/g, " ").replace(/\s+/g, " ").trim();
}
function normalizePromptSenderName(message) {
    const senderName = normalizePromptHeaderValue(message.sender_name);
    if (senderName)
        return senderName;
    const sender = normalizePromptHeaderValue(message.sender);
    return sender || "User";
}
function formatPromptMessage(message) {
    const sender = normalizePromptSenderName(message);
    const timestamp = normalizePromptHeaderValue(message.timestamp);
    const content = typeof message.content === "string" ? message.content.replace(/\r\n/g, "\n").replace(/\r/g, "\n") : "";
    const header = timestamp ? `${sender} @ ${timestamp}:` : `${sender}:`;
    if (!content)
        return header;
    const indented = content.split("\n").map((line) => `  ${line}`).join("\n");
    return `${header}\n${indented}`;
}
/**
 * Serialise an array of NewMessage objects into a compact transcript block
 * for the agent prompt. Includes channel metadata when the channel is known,
 * but keeps stable formatting instructions in persistent session context.
 */
export function formatMessages(messages, channel) {
    const knownChannel = channel && channel !== "unknown" ? channel : undefined;
    const sections = [];
    if (knownChannel)
        sections.push(`Channel: ${knownChannel}`);
    if (messages.length > 0) {
        const body = messages.map((message) => formatPromptMessage(message)).join("\n\n");
        sections.push(messages.length > 1 ? `Messages:\n${body}` : body);
    }
    return sections.join("\n\n");
}
const INTERNAL_OPEN_PLACEHOLDER = "\u0000PICLAW_INTERNAL_OPEN\u0000";
const INTERNAL_CLOSE_PLACEHOLDER = "\u0000PICLAW_INTERNAL_CLOSE\u0000";
function protectInternalTagsInsideMarkdownCode(text) {
    let result = "";
    let i = 0;
    while (i < text.length) {
        if (text[i] !== "`") {
            result += text[i];
            i += 1;
            continue;
        }
        let tickCount = 1;
        while (i + tickCount < text.length && text[i + tickCount] === "`")
            tickCount += 1;
        const delimiter = "`".repeat(tickCount);
        const closeIndex = text.indexOf(delimiter, i + tickCount);
        if (closeIndex < 0) {
            result += text.slice(i);
            break;
        }
        const segment = text.slice(i, closeIndex + tickCount)
            .replaceAll("<internal>", INTERNAL_OPEN_PLACEHOLDER)
            .replaceAll("</internal>", INTERNAL_CLOSE_PLACEHOLDER);
        result += segment;
        i = closeIndex + tickCount;
    }
    return result;
}
function restoreProtectedInternalTagPlaceholders(text) {
    return text
        .replaceAll(INTERNAL_OPEN_PLACEHOLDER, "<internal>")
        .replaceAll(INTERNAL_CLOSE_PLACEHOLDER, "</internal>");
}
/**
 * Remove `<internal>…</internal>` blocks from agent output.
 * Content inside these tags is logged but not sent to the user.
 *
 * Handles nested tags and malformed blocks by treating <internal> as a
 * depth counter and discarding anything inside. Unclosed tags discard the
 * remainder of the string (safer than leaking hidden content).
 *
 * Literal tag examples inside Markdown code spans/fences are preserved so the
 * agent can explain the control markup without the explanation disappearing.
 */
export function stripInternalTags(text) {
    if (!text)
        return "";
    const protectedText = protectInternalTagsInsideMarkdownCode(text);
    let result = "";
    let depth = 0;
    let i = 0;
    while (i < protectedText.length) {
        if (protectedText.startsWith("<internal>", i)) {
            depth += 1;
            i += "<internal>".length;
            continue;
        }
        if (protectedText.startsWith("</internal>", i)) {
            if (depth > 0)
                depth -= 1;
            i += "</internal>".length;
            continue;
        }
        if (depth === 0) {
            result += protectedText[i];
        }
        i += 1;
    }
    return restoreProtectedInternalTagPlaceholders(result).trim();
}
/**
 * Prepare agent output text for delivery on the given channel.
 * Strips internal tags and applies HTML-entity escaping for the web channel.
 */
export function formatOutbound(rawText, channel) {
    const text = stripInternalTags(rawText);
    if (!text)
        return "";
    if (channel === "web") {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    return text;
}
