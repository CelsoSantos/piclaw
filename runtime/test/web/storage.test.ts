import { afterEach, expect, test } from 'bun:test';

import {
  getLocalStorageBoolean,
  getLocalStorageItem,
  getLocalStorageNumber,
  setLocalStorageItem,
} from '../../web/src/utils/storage.js';

const originalWindow = (globalThis as any).window;

afterEach(() => {
  (globalThis as any).window = originalWindow;
});

test('storage helpers read values and tolerate restricted localStorage writes', () => {
  const storage = new Map<string, string>();
  (globalThis as any).window = {
    localStorage: {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => { storage.set(key, value); },
    },
  } as any;

  setLocalStorageItem('flag', 'true');
  setLocalStorageItem('count', '42');
  expect(getLocalStorageItem('flag')).toBe('true');
  expect(getLocalStorageBoolean('flag', false)).toBe(true);
  expect(getLocalStorageNumber('count', 0)).toBe(42);

  (globalThis as any).window = {
    localStorage: {
      getItem: () => { throw new Error('blocked'); },
      setItem: () => { throw new Error('blocked'); },
    },
  } as any;

  expect(() => setLocalStorageItem('flag', 'false')).not.toThrow();
  expect(getLocalStorageItem('flag')).toBeNull();
  expect(getLocalStorageBoolean('flag', true)).toBe(true);
  expect(getLocalStorageNumber('count', 7)).toBe(7);
});
