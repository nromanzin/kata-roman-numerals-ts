import { toRoman } from './kata';

describe('Kata', () => {
  test.each([
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX'],
    [10, 'X'],
    [14, 'XIV'],
    [18, 'XVIII'],
    [24, 'XXIV'],
    [44, 'XLIV'],
    [128, 'CXXVIII'],
    [999, 'CMXCIX'],
  ])('when given %p should return %p', (input, expected) => {
    expect(toRoman(input)).toBe(expected);
  });
});
