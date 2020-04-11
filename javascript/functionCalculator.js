/**
 * 1. calculator 함수를 구현합니다.
 * 
 * calculator(x, y, operator) 의 형태로 생긴 이 함수는 다음과 같이 사용합니다.
 * 
 * calculator(1, 2, '+');
 * 
 * 이 함수는 3을 반환합니다.
 */

/**
 * 
 * @param {number} x 피연산자 
 * @param {number} y 피연산자
 * @param {string} operator 연산자. '+', '-', '*', '/'
 * @return {number} x operator y
 */
function calculator(x, y, operator) {
  
}


/**
 * 2. calculator 함수를 발전시킵니다.
 * 
 * calculatorWithCallback(x, y, operator) 의 형태로 생긴 이 함수는 다음과 같이 사용합니다.
 * 
 * calculatorWithCallback(1, 2, function(x, y) {
 *   return x + y;
 * });
 * 
 * 이렇게 사용할 수도 있습니다.
 * 
 * function add(x, y) { return x + y; }
 * 
 * calculatorWithCallback(1, 2, add);
 * 
 * 이 함수는 3을 반환합니다.
 */

/**
 * 
 * @param {number} x 피연산자 
 * @param {number} y 피연산자
 * @param {string} operator x와 y를 인자로 받는 함수.
 * @return {number} operator 함수의 반환값.
 */
function calculatorWithCallback(x, y, operator) {

}

module.exports = {
  calculator,
  calculatorWithCallback
};
