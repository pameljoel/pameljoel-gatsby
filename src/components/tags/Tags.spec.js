import { isObject } from './Tags.js';

describe('isObject', () => {

  describe('input is object', () => {
    it('returns true', () => {
      const input = {};
      expect(isObject(input)).toBe(true);
    });
  });

  describe('input is string', () => {
    it('returns false', () => {
      const input = 'lorem';
      expect(isObject(input)).toBe(false);
    });
  });

  describe('input is array', () => {
    it('returns true', () => {
      const input = [];
      expect(isObject(input)).toBe(true);
    });
  });
});
