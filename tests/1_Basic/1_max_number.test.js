import { describe, expect, it } from 'vitest';
import { max_number } from '../../src/1_Basic/1_max_number';

describe('max_number', () => {
  it('should return the first argument if it is greater', () =>
    expect(max_number(6, 2)).toBe(6));

  it('should return the second argument if it is greater', () =>
    expect(max_number(2, 6)).toBe(6));

  it('should return the first argument both arguments are equal', () =>
    expect(max_number(6, 6)).toBe(6));
});
