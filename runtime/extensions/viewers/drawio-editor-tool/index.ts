import { extname } from "node:path";

import { registerToolStatusHintProvider } from "../../../src/tool-status-hints.js";

const ROUTE_PREFIX = "/drawio";
const DRAWIO_EXTENSIONS = [".drawio", ".drawio.xml", ".drawio.svg", ".drawio.png"];
const DRAWIO_STATUS_ICON_SVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="2" width="13" height="13" rx="1.5"></rect><circle cx="16" cy="16" r="6.5"></circle></svg>`;

function readTrimmedString(...values: unknown[]): string | null {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return null;
}

registerToolStatusHintProvider({
  id: "drawio_editor_tool",
  buildHints: ({ toolName, args }) => {
    if (toolName !== "open_drawio_editor") return null;
    const record = args && typeof args === "object" ? args as Record<string, unknown> : null;
    const path = readTrimmedString(record?.path);
    if (!path) return null;
    return {
      key: "open_drawio_editor",
      icon_svg: DRAWIO_STATUS_ICON_SVG,
      label: path,
      title: `Draw.io editor • ${path}`,
      kind: "file",
    };
  },
});

export default function drawioEditorTool(pi: any) {
  pi.registerTool({
    name: "open_drawio_editor",
    label: "Open Draw.io Editor",
    description:
      "Open a .drawio diagram file in the self-hosted draw.io editor. " +
      "Returns a URL the user can open to edit the diagram in their browser.",
    promptSnippet: "open_drawio_editor: open/create a draw.io file in the hosted editor tab.",
    parameters: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "Workspace path to the .drawio file (created if it doesn't exist).",
        },
      },
      required: ["path"],
    },
    async execute(_toolCallId: string, params: { path: string }) {
      const filePath = params.path.replace(/^@/, "");
      const lowerPath = filePath.toLowerCase();
      const hasValidExt = DRAWIO_EXTENSIONS.some((ext) => lowerPath.endsWith(ext));
      if (!hasValidExt && extname(lowerPath) !== ".xml") {
        throw new Error(`Unsupported file type. Expected: ${DRAWIO_EXTENSIONS.join(", ")} or .xml`);
      }

      const editorUrl = `${ROUTE_PREFIX}/edit?path=${encodeURIComponent(filePath)}`;

      return {
        content: [
          {
            type: "text" as const,
            text: `Draw.io editor URL: ${editorUrl}\n\nOpen this URL in the browser to edit the diagram. Changes are auto-saved to the workspace.`,
          },
        ],
        details: { editorUrl, path: filePath },
      };
    },
  });
}
