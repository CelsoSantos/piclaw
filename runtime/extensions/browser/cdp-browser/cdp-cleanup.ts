import { createLogger, debugSuppressedError } from "../../../src/utils/logger.js";

const log = createLogger("cdp-browser");

export function closeWebSocketQuietly(ws: { close: () => void } | null | undefined): void {
  if (!ws) return;
  try {
    ws.close();
  } catch (error) {
    debugSuppressedError(log, "Failed to close a stale CDP websocket during cleanup.", error);
  }
}

export async function runCdpCleanup(
  cleanup: () => Promise<void>,
  context: Record<string, unknown> = {},
): Promise<void> {
  try {
    await cleanup();
  } catch (error) {
    debugSuppressedError(log, "Best-effort CDP cleanup failed.", error, context);
  }
}
