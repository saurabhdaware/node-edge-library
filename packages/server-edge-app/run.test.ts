import { describe, test, expect } from 'vitest';
import { getData } from "server-edge-library";

describe('run', () => {
  test('should return edge true and server false', () => {
    // You can also try running `VITEST_CONDITIONS=server vitest run` command to see this test fail
    const { isServer, isEdge } = getData();
    expect(isServer).toBe(false);
    expect(isEdge).toBe(true);
  })
})
