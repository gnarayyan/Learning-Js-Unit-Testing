import { describe, expect, it } from 'vitest';
import { factorial } from '../../src/1_Basic/3_factorial';

describe('factorial', () => {
  it('should return 1 if the argument is 0', () =>
    expect(factorial(0)).toBe(1));

  it('should return 1 if the argument is 1', () =>
    expect(factorial(1)).toBe(1));

  it('should return 120 if the argument is 5', () =>
    expect(factorial(5)).toBe(120));

  it('should return 3628800 if the argument is 10', () =>
    expect(factorial(10)).toBe(3628800));
});
