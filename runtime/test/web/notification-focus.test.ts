import { expect, test } from "bun:test";

import { focusWindowBestEffort } from "../../web/src/ui/notification-focus.js";

test("focusWindowBestEffort tolerates blocked focus calls", () => {
  let focused = false;
  expect(focusWindowBestEffort({ focus: () => { focused = true; } })).toBe(true);
  expect(focused).toBe(true);
  expect(focusWindowBestEffort({ focus: () => { throw new Error("blocked"); } })).toBe(false);
  expect(focusWindowBestEffort(null)).toBe(true);
});
