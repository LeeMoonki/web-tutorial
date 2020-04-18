const { zeroBaseNumber, zeroBaseNumberWithLength } = require('../handleString');

describe('handleString 과제를 테스트합니다.', () => {
  test('zeroBaseNumber를 테스트합니다.', () => {
    // return case of null
    expect(zeroBaseNumber()).toBe(null);
    expect(zeroBaseNumber({})).toBe(null);

    expect(zeroBaseNumber(2)).toBe('02');
    expect(zeroBaseNumber('2')).toBe('02');
    expect(zeroBaseNumber('2')).toBe('02');
    expect(zeroBaseNumber(12)).toBe('12');
    expect(zeroBaseNumber(12)).toBe('12');
    expect(zeroBaseNumber(123)).toBe('99');
  });

  test('zeroBaseNumberWithLength를 테스트합니다.', () => {
    expect(zeroBaseNumberWithLength()).toBe(null);
    expect(zeroBaseNumberWithLength({})).toBe(null);

    expect(zeroBaseNumberWithLength(2)).toBe('02');
    expect(zeroBaseNumberWithLength('2')).toBe('02');
    expect(zeroBaseNumberWithLength('2')).toBe('02');
    expect(zeroBaseNumberWithLength(12)).toBe('12');

    expect(zeroBaseNumberWithLength(2, 1)).toBe('2');
    expect(zeroBaseNumberWithLength(2, 4)).toBe('0002');
    expect(zeroBaseNumberWithLength(12, 4)).toBe('0012');

    expect(zeroBaseNumberWithLength(12, 1)).toBe('9');
    expect(zeroBaseNumberWithLength(12, 1)).toBe('9');
    expect(zeroBaseNumberWithLength(12345, 4)).toBe('9999');

    expect(() => { zeroBaseNumberWithLength(12345, 0) }).toThrow();
    expect(() => { zeroBaseNumberWithLength(12345, '') }).toThrow();
  });
});