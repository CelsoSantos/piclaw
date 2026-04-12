import { inflateRawSync } from "node:zlib";

import { createLogger, debugSuppressedError } from "../../../src/utils/logger.js";

const log = createLogger("office-tools");

export function decodeZipEntryText(name: string, method: number, data: Buffer): string | null {
  try {
    if (method === 0) return data.toString("utf-8");
    if (method === 8) return inflateRawSync(data).toString("utf-8");
  } catch (error) {
    debugSuppressedError(log, "Failed to decode an Office zip entry; skipping it.", error, {
      name,
      method,
      byteLength: data.length,
    });
  }
  return null;
}
