import { createLogger, debugSuppressedError } from "../src/utils/logger.js";

const log = createLogger("vnc-harness");

export interface HarnessSocketLike {
  send(payload: unknown): unknown;
  close?(code?: number, reason?: string): unknown;
}

export interface HarnessUpstreamLike {
  destroy?(): unknown;
}

export function sendHarnessPayload(
  ws: HarnessSocketLike,
  payload: unknown,
  context: Record<string, unknown> = {},
): boolean {
  try {
    ws.send(payload);
    return true;
  } catch (error) {
    debugSuppressedError(log, "Failed to send a VNC harness websocket payload.", error, context);
    return false;
  }
}

export function closeHarnessWebSocket(
  ws: HarnessSocketLike,
  code: number,
  reason: string,
  context: Record<string, unknown> = {},
): boolean {
  if (typeof ws.close !== "function") return false;
  try {
    ws.close(code, reason);
    return true;
  } catch (error) {
    debugSuppressedError(log, "Failed to close a VNC harness websocket.", error, {
      ...context,
      code,
      reason,
    });
    return false;
  }
}

export function destroyHarnessUpstream(
  upstream: HarnessUpstreamLike | null | undefined,
  context: Record<string, unknown> = {},
): boolean {
  if (typeof upstream?.destroy !== "function") return false;
  try {
    upstream.destroy();
    return true;
  } catch (error) {
    debugSuppressedError(log, "Failed to destroy a VNC harness upstream socket.", error, context);
    return false;
  }
}

export function parseHarnessControlMessage(message: string): Record<string, unknown> | null {
  const trimmed = message.trim();
  if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) return null;
  try {
    const parsed = JSON.parse(message);
    return parsed && typeof parsed === "object" ? parsed as Record<string, unknown> : null;
  } catch (error) {
    debugSuppressedError(log, "Failed to parse a VNC harness control payload; forwarding raw text upstream.", error, {
      preview: trimmed.slice(0, 120),
    });
    return null;
  }
}
