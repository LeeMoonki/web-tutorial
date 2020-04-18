const { rememberPrevNumber } = require('../handleFunction');

describe('handleFunction 과제를 테스트합니다.', () => {
  test('rememberPrevNumber를 테스트합니다.', () => {
    const remember = rememberPrevNumber();

    expect(remember()).toEqual({ prev: undefined, current: undefined });
    expect(remember(1)).toEqual({ prev: undefined, current: 1 });
    expect(remember(100)).toEqual({ prev: 1, current: 100 });
  });
});