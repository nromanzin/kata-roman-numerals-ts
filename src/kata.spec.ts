import { add } from './kata';

describe('Kata', () => {
  test('should get 4 when adding 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });
});
