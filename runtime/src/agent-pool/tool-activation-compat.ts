import { AgentSession } from "@mariozechner/pi-coding-agent";

const liveToolSnapshotAgents = new WeakSet<object>();

function replaceArrayContents<T>(target: T[], next: T[]): void {
  target.splice(0, target.length, ...next);
}

function ensureLiveToolSnapshot(agent: {
  state?: { tools?: unknown[] };
  createContextSnapshot?: () => { tools?: unknown[] } & Record<string, unknown>;
}): void {
  if (!agent || typeof agent !== "object") return;
  if (liveToolSnapshotAgents.has(agent as object)) return;
  if (typeof agent.createContextSnapshot !== "function") return;

  const original = agent.createContextSnapshot.bind(agent);
  agent.createContextSnapshot = () => {
    const snapshot = original();
    const liveTools = Array.isArray(agent.state?.tools) ? agent.state.tools : snapshot.tools;
    return {
      ...snapshot,
      tools: liveTools,
    };
  };
  liveToolSnapshotAgents.add(agent as object);
}

export function applyActiveToolsImmediately(session: {
  agent: { state?: { tools?: unknown[] }; setTools?: (tools: unknown[]) => void; setSystemPrompt?: (prompt: string) => void; createContextSnapshot?: () => { tools?: unknown[] } & Record<string, unknown> };
  _toolRegistry: Map<string, unknown>;
  _baseSystemPrompt: string;
  _rebuildSystemPrompt: (toolNames: string[]) => string;
}, toolNames: string[]): void {
  const tools: unknown[] = [];
  const validToolNames: string[] = [];

  for (const name of toolNames) {
    const tool = session._toolRegistry.get(name);
    if (tool) {
      tools.push(tool);
      validToolNames.push(name);
    }
  }

  ensureLiveToolSnapshot(session.agent);

  const currentTools = Array.isArray(session.agent?.state?.tools)
    ? session.agent.state.tools as unknown[]
    : undefined;

  if (currentTools) {
    replaceArrayContents(currentTools, tools);
  } else if (typeof session.agent?.setTools === "function") {
    session.agent.setTools(tools);
  }

  session._baseSystemPrompt = session._rebuildSystemPrompt(validToolNames);
  if (typeof session.agent?.setSystemPrompt === "function") {
    session.agent.setSystemPrompt(session._baseSystemPrompt);
  }
}

let installed = false;

export function installSameTurnToolActivationPatch(): void {
  if (installed) return;
  installed = true;

  const proto = AgentSession.prototype as any;

  proto.setActiveToolsByName = function setActiveToolsByNamePatched(this: any, toolNames: string[]) {
    applyActiveToolsImmediately(this, toolNames);
  };
}
