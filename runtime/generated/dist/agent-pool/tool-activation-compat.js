import { AgentSession } from "@mariozechner/pi-coding-agent";
const liveToolSnapshotAgents = new WeakSet();
function replaceArrayContents(target, next) {
    target.splice(0, target.length, ...next);
}
function ensureLiveToolSnapshot(agent) {
    if (!agent || typeof agent !== "object")
        return;
    if (liveToolSnapshotAgents.has(agent))
        return;
    if (typeof agent.createContextSnapshot !== "function")
        return;
    const original = agent.createContextSnapshot.bind(agent);
    agent.createContextSnapshot = () => {
        const snapshot = original();
        const liveTools = Array.isArray(agent.state?.tools) ? agent.state.tools : snapshot.tools;
        return {
            ...snapshot,
            tools: liveTools,
        };
    };
    liveToolSnapshotAgents.add(agent);
}
export function applyActiveToolsImmediately(session, toolNames) {
    const tools = [];
    const validToolNames = [];
    for (const name of toolNames) {
        const tool = session._toolRegistry.get(name);
        if (tool) {
            tools.push(tool);
            validToolNames.push(name);
        }
    }
    ensureLiveToolSnapshot(session.agent);
    const currentTools = Array.isArray(session.agent?.state?.tools)
        ? session.agent.state.tools
        : undefined;
    if (currentTools) {
        replaceArrayContents(currentTools, tools);
    }
    else if (typeof session.agent?.setTools === "function") {
        session.agent.setTools(tools);
    }
    session._baseSystemPrompt = session._rebuildSystemPrompt(validToolNames);
    if (typeof session.agent?.setSystemPrompt === "function") {
        session.agent.setSystemPrompt(session._baseSystemPrompt);
    }
}
let installed = false;
export function installSameTurnToolActivationPatch() {
    if (installed)
        return;
    installed = true;
    const proto = AgentSession.prototype;
    proto.setActiveToolsByName = function setActiveToolsByNamePatched(toolNames) {
        applyActiveToolsImmediately(this, toolNames);
    };
}
