import { describe, test, expect } from 'vitest';
import { getData } from '.';

describe('getData.server', () => {
  test('should return server true and edge false', () => {
    const { isServer, isEdge } = getData();
    expect(isServer).toBe(true);
    expect(isEdge).toBe(false);
  })
})