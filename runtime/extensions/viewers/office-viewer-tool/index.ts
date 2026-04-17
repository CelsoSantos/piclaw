import { existsSync } from "node:fs";
import { extname, resolve } from "node:path";

import { registerToolStatusHintProvider } from "../../../src/tool-status-hints.js";

const ROUTE_PREFIX = "/office-viewer";
const OFFICE_EXTENSIONS = [
  ".docx", ".doc", ".odt", ".rtf",
  ".xlsx", ".xls", ".ods", ".csv",
  ".pptx", ".ppt", ".odp",
];

const OFFICE_VIEWER_STATUS_ICON_SVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 3h10l4 4v14H4z"></path><path d="M14 3v5h4"></path><circle cx="16" cy="18" r="3.5"></circle><path d="M18.5 20.5l2.5 2.5"></path></svg>`;

function readTrimmedString(...values: unknown[]): string | null {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return null;
}

registerToolStatusHintProvider({
  id: "office_viewer_tool",
  buildHints: ({ toolName, args }) => {
    if (toolName !== "open_office_viewer") return null;
    const record = args && typeof args === "object" ? args as Record<string, unknown> : null;
    const path = readTrimmedString(record?.path);
    if (!path) return null;
    return {
      key: "open_office_viewer",
      icon_svg: OFFICE_VIEWER_STATUS_ICON_SVG,
      label: path,
      title: `Office viewer • ${path}`,
      kind: "file",
    };
  },
});

export default function officeViewerTool(pi: any) {
  pi.registerTool({
    name: "open_office_viewer",
    label: "Open Office Viewer",
    description:
      "Open an Office document (.docx, .xlsx, .pptx, .odt, .ods, .odp) in the built-in Office viewer. " +
      "Returns a URL the user can open in their browser.",
    promptSnippet: "open_office_viewer: open Office documents in the built-in browser viewer.",
    parameters: {
      type: "object",
      properties: {
        path: { type: "string", description: "Workspace path to the Office document." },
      },
      required: ["path"],
    },
    async execute(_toolCallId: string, params: { path: string }) {
      const filePath = params.path.replace(/^@/, "");
      const ext = extname(filePath).toLowerCase();

      if (!OFFICE_EXTENSIONS.includes(ext)) {
        throw new Error(`Unsupported file type: ${ext}. Supported: ${OFFICE_EXTENSIONS.join(", ")}`);
      }

      const fullPath = resolve(process.cwd(), filePath);
      if (!existsSync(fullPath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      const rawUrl = `/workspace/raw?path=${encodeURIComponent(filePath)}`;
      const nameStr = filePath.split("/").pop() || "document";
      const viewerUrl = `${ROUTE_PREFIX}/?url=${encodeURIComponent(rawUrl)}&name=${encodeURIComponent(nameStr)}`;

      return {
        content: [
          {
            type: "text" as const,
            text: `Office viewer URL: ${viewerUrl}\n\nThe user can open this in their browser to view the document.`,
          },
        ],
        details: { viewerUrl, path: filePath, format: ext },
      };
    },
  });
}
