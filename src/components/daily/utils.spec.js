import { setDailyInMonth } from './utils';

const emptyArray = [];

const daily = {
  day: 1,
  format: 'jpg',
  description: 'A rainy cabin NOT in the woods.',
};

const outOfRangeDaily = {
  day: 32,
  format: 'jpg',
  description: 'A rainy cabin NOT in the woods.',
};

const month = {
  name: 'January',
  days: 31,
  start: 0,
  show: true,
};

describe('setDailyInMonth', () => {
  describe('parameters undefined', () => {
    it('returns []', () => {
      const result = setDailyInMonth(undefined, undefined);
      expect(result).toStrictEqual(emptyArray);
    });
  });

  describe('dailies undefined', () => {
    it('returns []', () => {
      const result = setDailyInMonth(undefined, month);
      expect(result).toStrictEqual(emptyArray);
    });
  });

  describe('month undefined', () => {
    const dailies = [daily];
    it('returns []', () => {
      const result = setDailyInMonth(dailies, undefined);
      expect(result).toStrictEqual(emptyArray);
    });
  });

  describe('daily is in range', () => {
    const dailies = [daily];

    it('returns daily', () => {
      const result = setDailyInMonth(dailies, month);
      expect(result).toStrictEqual(dailies);
    });

    it('has 1 daily', () => {
      const result = setDailyInMonth(dailies, month);
      expect(result.length).toBe(1);
    });
  });

  describe('daily is out of range', () => {
    const dailies = [outOfRangeDaily];

    it('returns []', () => {
      const result = setDailyInMonth(dailies, month);
      expect(result).toStrictEqual(emptyArray);
    });
  });
});
