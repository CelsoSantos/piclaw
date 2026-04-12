import { expect, test } from "bun:test";
import { existsSync, lstatSync, mkdirSync, mkdtempSync, rmSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { ensureExtensionNodeModulesLink } from "../../src/agent-pool/session-node-modules-link.js";

test("ensureExtensionNodeModulesLink creates the bundled extension node_modules symlink", () => {
  const root = mkdtempSync(join(tmpdir(), "piclaw-session-link-"));
  const extensionsDir = join(root, "extensions");
  const nodeModulesDir = join(root, "node_modules");
  mkdirSync(extensionsDir, { recursive: true });
  mkdirSync(nodeModulesDir, { recursive: true });

  try {
    ensureExtensionNodeModulesLink(extensionsDir, nodeModulesDir);

    const linkPath = join(extensionsDir, "node_modules");
    expect(existsSync(linkPath)).toBe(true);
    expect(lstatSync(linkPath).isSymbolicLink()).toBe(true);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("ensureExtensionNodeModulesLink leaves an existing node_modules link untouched", () => {
  const root = mkdtempSync(join(tmpdir(), "piclaw-session-link-existing-"));
  const extensionsDir = join(root, "extensions");
  const nodeModulesDir = join(root, "node_modules");
  mkdirSync(extensionsDir, { recursive: true });
  mkdirSync(nodeModulesDir, { recursive: true });

  const linkPath = join(extensionsDir, "node_modules");
  symlinkSync(nodeModulesDir, linkPath);

  try {
    expect(() => ensureExtensionNodeModulesLink(extensionsDir, nodeModulesDir)).not.toThrow();
    expect(lstatSync(linkPath).isSymbolicLink()).toBe(true);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
