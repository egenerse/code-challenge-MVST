import { describe, expect, test } from 'vitest';
import { isNumber } from './typeCheck';

describe('isNumber tests', () => {
  test('should return true for a number', () => {
    expect(isNumber(0)).toBeTruthy();
  });
  test('should return false for null', () => {
    expect(isNumber(null)).toBeFalsy();
  });
  test('should return true for undefined', () => {
    expect(isNumber(undefined)).toBeFalsy();
  });
});
