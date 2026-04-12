import { expect, test } from "bun:test";

import { collectAssemblyScriptGarbageBestEffort } from "../../web/src/panes/remote-display-gc.js";

test("collectAssemblyScriptGarbageBestEffort tolerates missing and throwing hooks", () => {
  expect(collectAssemblyScriptGarbageBestEffort(null)).toBe(true);
  expect(collectAssemblyScriptGarbageBestEffort({})).toBe(true);
  expect(collectAssemblyScriptGarbageBestEffort({ __collect: () => undefined })).toBe(true);
  expect(collectAssemblyScriptGarbageBestEffort({ __collect: () => { throw new Error("unsupported"); } })).toBe(false);
});
