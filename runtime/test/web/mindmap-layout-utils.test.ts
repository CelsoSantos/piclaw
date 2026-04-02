import { expect, test } from 'bun:test';

import { clearStoredNodePositions } from '../../web/src/vendor/mindmap-layout-utils.js';

test('clearStoredNodePositions removes saved manual positions recursively', () => {
  const root = {
    position: { x: 0, y: 0 },
    children: [
      {
        position: { x: 10, y: 20 },
        children: [
          { children: [] },
          { position: { x: 30, y: 40 } },
        ],
      },
      {
        children: [
          { position: { x: 50, y: 60 } },
        ],
      },
    ],
  };

  expect(clearStoredNodePositions(root)).toBe(4);
  expect(root).toEqual({
    children: [
      {
        children: [
          { children: [] },
          {},
        ],
      },
      {
        children: [
          {},
        ],
      },
    ],
  });
});
