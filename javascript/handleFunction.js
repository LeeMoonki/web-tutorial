// 다음 함수의 사용 예
// let f = rememberPrevNumberClosure();
// f(1); // { prev: undefined, current: 1 } 를 반환
// f(3); // { prev: 1, current: 3 } 를 반환
/**
 * 이 함수는 이전에 전달했던 수를 기억해서 현재 전달하는 인자와 함께 반환합니다.
 */
function rememberPrevNumber() {
  let prev;

  return function(n) {
    let resultPrev = prev;

    prev = n;

    return {
      prev: resultPrev,
      current: n,
    }
  };
}

module.exports = {
  rememberPrevNumber
};
