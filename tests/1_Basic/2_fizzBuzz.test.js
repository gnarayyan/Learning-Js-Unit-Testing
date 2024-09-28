import { describe, expect, it } from 'vitest';
import { fizzBuzz } from '../../src/1_Basic/2_fizzBuzz';

describe('fizzBuzz', () => {
  it('should return "FizzBuzz" if the argument is divisible by both 3 and 5', () =>
    expect(fizzBuzz(15)).toBe('FizzBuzz'));

  it('should return "Fizz" if the argument is divisible by 3 only', () =>
    expect(fizzBuzz(6)).toBe('Fizz'));

  it('should return "Buzz" if the argument is divisible by 5 only', () =>
    expect(fizzBuzz(10)).toBe('Buzz'));

  it('should return argument itself as an string if the argument is not divisible by both 3 and 5', () =>
    expect(fizzBuzz(7)).toBe('7'));
});
