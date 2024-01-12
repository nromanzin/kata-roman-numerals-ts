import { toRoman } from './kata';

describe('Kata', () => {
  test.each([
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
  ])('when given %p should return %p', (input, expected) => {
    expect(toRoman(input)).toBe(expected);
  });
});
