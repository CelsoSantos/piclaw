import { expect, test } from "bun:test";

import {
  getLocalBoolWithFallback,
  restoreEditorViewStateBestEffort,
  setLocalBoolBestEffort,
} from "../../extensions/viewers/editor/editor-safety.ts";

test("getLocalBoolWithFallback reads boolean values and falls back when storage throws", () => {
  expect(getLocalBoolWithFallback(() => ({ getItem: () => "true" }), "key", false)).toBe(true);
  expect(getLocalBoolWithFallback(() => ({ getItem: () => "false" }), "key", true)).toBe(false);
  expect(getLocalBoolWithFallback(() => ({ getItem: () => { throw new Error("blocked"); } }), "key", true)).toBe(true);
});

test("setLocalBoolBestEffort writes values and suppresses storage failures", () => {
  const writes: Array<{ key: string; value: string }> = [];
  expect(setLocalBoolBestEffort(() => ({ setItem: (key, value) => { writes.push({ key, value }); } }), "flag", true)).toBe(true);
  expect(writes).toEqual([{ key: "flag", value: "true" }]);
  expect(setLocalBoolBestEffort(() => ({ setItem: () => { throw new Error("blocked"); } }), "flag", false)).toBe(false);
});

test("restoreEditorViewStateBestEffort restores selection and scroll, and suppresses races", () => {
  const dispatchCalls: Array<number> = [];
  const view = {
    state: {
      doc: {
        lines: 10,
        line: (lineNumber: number) => ({ from: lineNumber * 10, length: 5 }),
      },
    },
    dispatch: ({ selection }: { selection: { anchor: number } }) => {
      dispatchCalls.push(selection.anchor);
    },
    scrollDOM: { scrollTop: 0 },
  };
  const frames: Array<() => void> = [];

  expect(restoreEditorViewStateBestEffort(view, { cursorLine: 2, cursorCol: 3, scrollTop: 25 }, (cb) => frames.push(cb))).toBe(true);
  expect(dispatchCalls).toEqual([22]);
  expect(view.scrollDOM.scrollTop).toBe(0);
  frames[0]?.();
  expect(view.scrollDOM.scrollTop).toBe(25);

  expect(restoreEditorViewStateBestEffort({
    ...view,
    state: { doc: { lines: 10, line: () => { throw new Error("disposed"); } } },
  }, { cursorLine: 1 }, () => {})).toBe(false);
});
