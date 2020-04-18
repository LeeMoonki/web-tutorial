/**
 * 숫자를 0이 베이스인 두 자리 문자열로 변환하여 반환합니다. 예를 들어 2를 받으면 '02'를 반환하고 12를 받으면 '12'를 반환합니다. 인자가 적절하지 않다면 null을 반환합니다.
 * 만약 자리수가 넘어가면 9로 전부 채웁니다. 예를 들어 123을 입력받으면 '99'를 반환합니다.
 * @param {any} num 숫자
 */
function zeroBaseNumber(num) {

}

/**
 * 동작은 zeroBaseNumber와 동일합니다. 단, 문자열의 길이를 정할 수 있습니다.
 * 예를 들어 length가 3이라면, 2를 받았을 때 '002'를 반환하고 12를 받는다면 '012', 마지막으로 123을 받으면 '123'을 반환합니다.
 * length가 0 이하거나 숫자가 아니면 에러를 생성합니다.
 * @param {any} num 숫자
 * @param {number} length 길이
 */
function zeroBaseNumberWithLength(num, length = 2) {

}

module.exports = {
  zeroBaseNumber,
  zeroBaseNumberWithLength
};
