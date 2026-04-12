import { expect, test } from "bun:test";

import {
  clearContainerContentBestEffort,
  detachTerminalHostListenersBestEffort,
  disposeTerminalRuntimeBestEffort,
  resizeTerminalRuntimeBestEffort,
} from "../../web/src/panes/terminal-lifecycle-runtime.js";

test("clearContainerContentBestEffort tolerates detached hosts", () => {
  const host = { innerHTML: "busy" };
  const brokenHost = {
    set innerHTML(_value: string) {
      throw new Error("detached");
    },
  };

  expect(clearContainerContentBestEffort(host as any)).toBe(true);
  expect(host.innerHTML).toBe("");
  expect(clearContainerContentBestEffort(brokenHost as any)).toBe(false);
});

test("detachTerminalHostListenersBestEffort tolerates teardown races", () => {
  const removed: string[] = [];
  const ownerWindow = {
    removeEventListener: (type: string) => removed.push(type),
  };
  const mediaQuery = {
    removeEventListener: (type: string) => removed.push(`media:${type}`),
  };
  const brokenOwnerWindow = {
    removeEventListener: () => {
      throw new Error("gone");
    },
  };

  expect(() => detachTerminalHostListenersBestEffort({
    ownerWindow,
    themeChangeListener: (() => undefined) as any,
    mediaQuery,
    mediaQueryListener: (() => undefined) as any,
    dockResizeListener: (() => undefined) as any,
    windowResizeListener: (() => undefined) as any,
    themeObserver: { disconnect: () => removed.push('themeObserver') },
    resizeObserver: { disconnect: () => removed.push('resizeObserver') },
  })).not.toThrow();
  expect(removed).toEqual([
    'piclaw-theme-change',
    'media:change',
    'dock-resize',
    'resize',
    'themeObserver',
    'resizeObserver',
  ]);
  expect(() => detachTerminalHostListenersBestEffort({
    ownerWindow: brokenOwnerWindow as any,
    themeChangeListener: (() => undefined) as any,
    mediaQuery: { removeEventListener: () => { throw new Error('gone'); } } as any,
    mediaQueryListener: (() => undefined) as any,
    dockResizeListener: (() => undefined) as any,
    windowResizeListener: (() => undefined) as any,
    themeObserver: { disconnect: () => { throw new Error('gone'); } },
    resizeObserver: { disconnect: () => { throw new Error('gone'); } },
  })).not.toThrow();
});

test("resizeTerminalRuntimeBestEffort tolerates renderer and fit races", () => {
  const calls: string[] = [];
  resizeTerminalRuntimeBestEffort({
    syncHostLayout: () => calls.push('sync'),
    terminal: {
      renderer: { remeasureFont: () => calls.push('remeasure') },
      refresh: () => calls.push('refresh'),
    },
    fitAddon: { fit: () => calls.push('fit') },
    sendResize: () => calls.push('sendResize'),
  });
  expect(calls).toEqual(['sync', 'remeasure', 'fit', 'refresh', 'sync', 'sendResize']);

  expect(() => resizeTerminalRuntimeBestEffort({
    syncHostLayout: () => {},
    terminal: {
      renderer: { remeasureFont: () => { throw new Error('blocked'); } },
      refresh: () => { throw new Error('blocked'); },
    },
    fitAddon: { fit: () => { throw new Error('blocked'); } },
    sendResize: () => {},
  })).not.toThrow();
});

test("disposeTerminalRuntimeBestEffort tolerates teardown races", () => {
  const calls: string[] = [];
  const nextResizeFrame = disposeTerminalRuntimeBestEffort({
    resizeFrame: 7,
    cancelAnimationFrameFn: (handle: number) => calls.push(`cancel:${handle}`),
    socket: { close: () => calls.push('socket.close') },
    fitAddon: { dispose: () => calls.push('fitAddon.dispose') },
    terminal: { dispose: () => calls.push('terminal.dispose') },
    termEl: { remove: () => calls.push('termEl.remove') },
  });
  expect(nextResizeFrame).toBe(0);
  expect(calls).toEqual(['cancel:7', 'socket.close', 'fitAddon.dispose', 'terminal.dispose', 'termEl.remove']);

  expect(() => disposeTerminalRuntimeBestEffort({
    resizeFrame: 7,
    cancelAnimationFrameFn: () => { throw new Error('blocked'); },
    socket: { close: () => { throw new Error('blocked'); } },
    fitAddon: { dispose: () => { throw new Error('blocked'); } },
    terminal: { dispose: () => { throw new Error('blocked'); } },
    termEl: { remove: () => calls.push('termEl.remove.2') },
  })).not.toThrow();
});
