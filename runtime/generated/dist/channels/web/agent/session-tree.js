/**
 * web/agent/session-tree.ts – Session tree endpoint for the web UI tree viewer.
 */
function resolveChatJid(req, defaultChatJid) {
    const url = new URL(req.url);
    return (url.searchParams.get("chat_jid") || defaultChatJid).trim() || defaultChatJid;
}
export function handleSessionTreeRequest(req, ctx) {
    const chatJid = resolveChatJid(req, ctx.defaultChatJid);
    const tree = ctx.getSessionTreeForChat(chatJid);
    if (!tree) {
        return ctx.json({ leafId: null, nodes: [], error: "No active session for this chat." }, 200);
    }
    return ctx.json(tree, 200);
}
