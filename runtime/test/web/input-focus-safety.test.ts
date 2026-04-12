import { expect, test } from "bun:test";

import { focusAndSelectBestEffort } from "../../web/src/components/input-focus-safety.js";

test("focusAndSelectBestEffort tolerates detached inputs", () => {
  const calls: string[] = [];
  expect(focusAndSelectBestEffort({
    focus: () => calls.push('focus'),
    select: () => calls.push('select'),
  })).toBe(true);
  expect(calls).toEqual(['focus', 'select']);
  expect(focusAndSelectBestEffort({
    focus: () => {
      throw new Error('detached');
    },
  } as any)).toBe(false);
});
