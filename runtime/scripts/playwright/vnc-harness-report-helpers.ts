import { createLogger, debugSuppressedError } from "../../src/utils/logger.js";

const log = createLogger("vnc-harness-report");

export async function probeHarnessHealth(baseUrl: string): Promise<boolean> {
  try {
    const response = await fetch(`${baseUrl}/healthz`);
    return response.ok;
  } catch (error) {
    debugSuppressedError(log, "Failed to probe VNC harness health; retrying.", error, { baseUrl });
    return false;
  }
}

export async function cleanupVncHarnessReport(options: {
  browser?: { close?: () => Promise<unknown> } | null;
  harnessProc?: { kill?: () => unknown; exited?: Promise<unknown> } | null;
}): Promise<void> {
  if (options.browser?.close) {
    try {
      await options.browser.close();
    } catch (error) {
      debugSuppressedError(log, "Failed to close Playwright browser during VNC harness report teardown.", error);
    }
  }

  if (options.harnessProc?.kill) {
    try {
      options.harnessProc.kill();
    } catch (error) {
      debugSuppressedError(log, "Failed to kill VNC harness process during report teardown.", error);
    }
  }

  if (options.harnessProc?.exited) {
    try {
      await options.harnessProc.exited;
    } catch (error) {
      debugSuppressedError(log, "VNC harness process exit wait failed during report teardown.", error);
    }
  }
}
