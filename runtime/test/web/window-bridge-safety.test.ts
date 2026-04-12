import { expect, test } from "bun:test";

import {
  closeWindowBestEffort,
  postMessageToWindowBestEffort,
} from "../../web/src/ui/window-bridge-safety.js";

test("window bridge safety helpers tolerate closing and postMessage races", () => {
  const posted: Array<{ message: unknown; origin: string }> = [];
  const workingWindow = {
    close: () => undefined,
    postMessage: (message: unknown, origin: string) => {
      posted.push({ message, origin });
    },
  };
  const brokenWindow = {
    close: () => {
      throw new Error("already closed");
    },
    postMessage: () => {
      throw new Error("detached");
    },
  };

  expect(closeWindowBestEffort(workingWindow)).toBe(true);
  expect(closeWindowBestEffort(brokenWindow)).toBe(false);
  expect(closeWindowBestEffort(null)).toBe(true);

  expect(postMessageToWindowBestEffort(workingWindow, { ok: true }, "https://example.test")).toBe(true);
  expect(posted).toEqual([{ message: { ok: true }, origin: "https://example.test" }]);
  expect(postMessageToWindowBestEffort(brokenWindow, { ok: true }, "https://example.test")).toBe(false);
  expect(postMessageToWindowBestEffort(null, { ok: true }, "https://example.test")).toBe(true);
});
