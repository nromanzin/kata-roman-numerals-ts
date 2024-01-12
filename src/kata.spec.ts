import { toRoman } from './kata';

describe('Kata', () => {
  test('should return I when given 1', () => {
    expect(toRoman(1)).toBe('I');
  });
});
