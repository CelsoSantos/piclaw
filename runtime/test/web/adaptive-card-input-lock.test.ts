import { expect, test } from "bun:test";

import { lockAdaptiveCardInputs } from "../../web/src/ui/adaptive-card-input-lock.js";

test("lockAdaptiveCardInputs marks inputs readonly and tolerates bridged elements that throw on mutation", () => {
  const safeInput = {
    attrs: new Map<string, string>(),
    disabled: false,
    readOnly: false,
    setAttribute(name: string, value: string) {
      this.attrs.set(name, value);
    },
  } as any;
  const brokenInput = {
    setAttribute() {
      throw new Error("blocked");
    },
  } as any;
  Object.defineProperty(brokenInput, "disabled", {
    set() {
      throw new Error("blocked");
    },
    configurable: true,
  });
  Object.defineProperty(brokenInput, "readOnly", {
    set() {
      throw new Error("blocked");
    },
    configurable: true,
  });

  const root = {
    classes: [] as string[],
    classList: {
      add(name: string) {
        root.classes.push(name);
      },
    },
    querySelectorAll() {
      return [safeInput, brokenInput];
    },
  } as any;

  expect(() => lockAdaptiveCardInputs(root)).not.toThrow();
  expect(root.classes).toEqual(["adaptive-card-readonly"]);
  expect(safeInput.attrs.get("aria-disabled")).toBe("true");
  expect(safeInput.attrs.get("tabindex")).toBe("-1");
  expect(safeInput.disabled).toBe(true);
  expect(safeInput.readOnly).toBe(true);
});
