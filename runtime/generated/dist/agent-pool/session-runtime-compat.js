const runtimeBySession = new WeakMap();
function patchRuntimeSession(runtime, session, onReplace) {
    runtimeBySession.set(session, runtime);
    const applyReplacement = async () => {
        const nextSession = runtime.session;
        patchRuntimeSession(runtime, nextSession, onReplace);
        await onReplace?.(nextSession);
    };
    const legacySession = session;
    legacySession.newSession = async (options) => {
        const result = await runtime.newSession(options);
        await applyReplacement();
        return !result.cancelled;
    };
    legacySession.switchSession = async (sessionPath) => {
        const result = await runtime.switchSession(sessionPath);
        await applyReplacement();
        return !result.cancelled;
    };
    legacySession.fork = async (entryId) => {
        const result = await runtime.fork(entryId);
        await applyReplacement();
        return result;
    };
    return legacySession;
}
export function attachLegacySessionRuntimeCompatibility(runtime, onReplace) {
    return patchRuntimeSession(runtime, runtime.session, onReplace);
}
export function getLegacyRuntimeSession(session) {
    return session;
}
export function getAgentSessionRuntime(session) {
    return runtimeBySession.get(session);
}
export function resolveActiveRuntimeSession(session) {
    return runtimeBySession.get(session)?.session ?? session;
}
