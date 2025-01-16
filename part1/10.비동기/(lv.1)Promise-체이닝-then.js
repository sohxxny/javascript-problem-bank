/**
 * [(lv.1)Promise-체이닝-then.js]
 *
 * getValueThenDouble 함수:
 * returnFive 함수가 resolve하는 값을 then 체이닝으로 받아,
 * 그 값을 2배로 만든 결과를 resolve하는 Promise를 반환하세요.
 *
 * @returns {Promise<number>}
 */

// returnFive를 수정하지 마세요.
function returnFive() {
    return Promise.resolve(5);
}

async function getValueThenDouble() {
    return new Promise((resolve) => {
        returnFive().then((res) => {
            resolve(res * 2);
        });
    });
}

// export를 수정하지 마세요.
export { getValueThenDouble };
