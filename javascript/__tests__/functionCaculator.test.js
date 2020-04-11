const { calculator, calculatorWithCallback } = require('../functionCalculator');

describe('functionCalculator 과제를 테스트합니다.', () => {
  describe('calculator 함수를 테스트합니다.', () => {
    it("calculator(x, y, '+')", () => {
      expect(calculator(2, 3, '+')).toBe(2 + 3);
      expect(calculator(2, -3, '+')).toBe(2 - 3);
    });
    it("calculator(x, y, '-')", () => {
      expect(calculator(10, 3, '-')).toBe(10 - 3);
      expect(calculator(10, -3, '-')).toBe(10 + 3);
    });
    it("calculator(x, y, '*')", () => {
      expect(calculator(20, 3, '*')).toBe(20 * 3);
      expect(calculator(20, -3, '*')).toBe(20 * (-3));
    });
    it("calculator(x, y, '/')", () => {
      expect(calculator(12, 4, '/')).toBe(12 / 4);
      expect(calculator(21, -3, '/')).toBe(21 / (-3));
    });
  });

  describe('calculatorWithCallback 함수를 테스트합니다.', () => {
    it('calculatorWithCallback(x, y, (x, y) => x + y)', () => {
      function add(x, y) {
        return x + y;
      }
      expect(calculatorWithCallback(2, 3, (x, y) => x + y)).toBe(2 + 3);
      expect(calculatorWithCallback(2, 3, add)).toBe(2 + 3);
    });

    it('calculatorWithCallback(x, y, (x, y) => x - y)', () => {
      function subtract(x, y) {
        return x - y;
      }
      expect(calculatorWithCallback(2, 3, (x, y) => x - y)).toBe(2 - 3);
      expect(calculatorWithCallback(2, 3, subtract)).toBe(2 - 3);
    });
  });
});
