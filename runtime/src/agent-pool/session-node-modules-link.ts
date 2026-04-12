import { existsSync, symlinkSync } from "fs";
import { join } from "path";

import { createLogger, debugSuppressedError } from "../utils/logger.js";

const log = createLogger("agent-pool.session");

export function ensureExtensionNodeModulesLink(extensionsDir: string, nodeModulesDir: string | null): void {
  if (!nodeModulesDir) return;

  const link = join(extensionsDir, "node_modules");
  if (existsSync(link)) return;

  try {
    symlinkSync(nodeModulesDir, link);
  } catch (error) {
    if (existsSync(link)) return;
    debugSuppressedError(log, "Failed to create bundled extension node_modules symlink.", error, {
      extensionsDir,
      link,
      nodeModulesDir,
    });
  }
}
