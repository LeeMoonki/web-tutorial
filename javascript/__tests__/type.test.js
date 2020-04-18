const { stringToNumber, valueToBoolean } = require('../type');

describe('type 과제를 테스트합니다.', () => {
  test('stringToNumber를 테스트합니다.', () => {
    expect(stringToNumber()).toBe(null);
    expect(stringToNumber({})).toBe(null);

    expect(stringToNumber('2')).toBe(2);
    expect(stringToNumber(3)).toBe(3);
  });

  test('valueToBoolean를 테스트합니다.', () => {
    expect(valueToBoolean()).toBe(false);
    expect(valueToBoolean(null)).toBe(false);
    expect(valueToBoolean(0)).toBe(false);
    expect(valueToBoolean('')).toBe(false);

    expect(valueToBoolean(' ')).toBe(true);
    expect(valueToBoolean([])).toBe(true);
    expect(valueToBoolean({})).toBe(true);
    expect(valueToBoolean(1)).toBe(true);
  });
});