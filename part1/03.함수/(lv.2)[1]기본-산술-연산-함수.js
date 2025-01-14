/**
 * [(lv.2)[1]기본-산술-연산-함수.js]
 *
 * - 함수 이름: add, subtract, multiply, divide
 * - 각 함수는 x와 y라는 숫자 파라미터를 받아서, 해당 연산의 결과를 반환해야 합니다.
 *   예) add(2,3) -> 5, subtract(5,2) -> 3 등
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// export 를 수정하지 마세요.
export { add, subtract, multiply, divide };
