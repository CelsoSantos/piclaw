import { expect, test } from "bun:test";

import {
  postIframeMessageBestEffort,
  setIframeNameBestEffort,
} from "../../web/src/components/generated-widget-host-bridge.js";

test("generated widget host bridge tolerates detaching iframe state", () => {
  const posted: unknown[] = [];
  const workingFrame = {
    name: "",
    contentWindow: {
      postMessage(message: unknown) {
        posted.push(message);
      },
    },
  };
  const brokenFrame = {
    set name(_value: string) {
      throw new Error("detached");
    },
    contentWindow: {
      postMessage() {
        throw new Error("unloading");
      },
    },
  };

  expect(setIframeNameBestEffort(workingFrame, "widget-host")).toBe(true);
  expect(workingFrame.name).toBe("widget-host");
  expect(postIframeMessageBestEffort(workingFrame, { ok: true })).toBe(true);
  expect(posted).toEqual([{ ok: true }]);
  expect(setIframeNameBestEffort(brokenFrame as any, "widget-host")).toBe(false);
  expect(postIframeMessageBestEffort(brokenFrame as any, { ok: true })).toBe(false);
});
