import { describe, test, expect } from 'vitest';
import { getData } from '.';

describe('getData.edge', () => {
  test('should return server false and edge true', () => {
    const { isServer, isEdge } = getData();
    expect(isServer).toBe(false);
    expect(isEdge).toBe(true);
  })
})