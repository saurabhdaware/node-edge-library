import { describe, test, expect } from 'vitest';
import { getData } from "node-edge-library";

describe('run', () => {
  test('should return edge true and node false', () => {
    const { isNode, isEdge } = getData();
    expect(isNode).toBe(false);
    expect(isEdge).toBe(true);
  })
})
