import type { AgentSession, AgentSessionRuntime, SessionManager } from "@mariozechner/pi-coding-agent";

const runtimeBySession = new WeakMap<AgentSession, AgentSessionRuntime>();

type LegacyNewSessionOptions = {
  parentSession?: string;
  setup?: (sessionManager: SessionManager) => Promise<void>;
};

type LegacyForkResult = {
  cancelled: boolean;
  selectedText?: string;
};

type LegacyRuntimeSession = AgentSession & {
  newSession: (options?: LegacyNewSessionOptions) => Promise<boolean>;
  switchSession: (sessionPath: string) => Promise<boolean>;
  fork: (entryId: string) => Promise<LegacyForkResult>;
};

function patchRuntimeSession(
  runtime: AgentSessionRuntime,
  session: AgentSession,
  onReplace?: (session: AgentSession) => Promise<void> | void,
): LegacyRuntimeSession {
  runtimeBySession.set(session, runtime);

  const applyReplacement = async (): Promise<void> => {
    const nextSession = runtime.session;
    patchRuntimeSession(runtime, nextSession, onReplace);
    await onReplace?.(nextSession);
  };

  const legacySession = session as LegacyRuntimeSession;
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

export function attachLegacySessionRuntimeCompatibility(
  runtime: AgentSessionRuntime,
  onReplace?: (session: AgentSession) => Promise<void> | void,
): AgentSession {
  return patchRuntimeSession(runtime, runtime.session, onReplace);
}

export function getLegacyRuntimeSession(session: AgentSession): LegacyRuntimeSession {
  return session as LegacyRuntimeSession;
}

export function getAgentSessionRuntime(session: AgentSession): AgentSessionRuntime | undefined {
  return runtimeBySession.get(session);
}

export function resolveActiveRuntimeSession(session: AgentSession): AgentSession {
  return runtimeBySession.get(session)?.session ?? session;
}
