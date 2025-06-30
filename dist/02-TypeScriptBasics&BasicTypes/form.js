"use strict";
const inputEl = document.getElementById('user-name');
// if (!inputEl) {
//   throw new Error('Element not found!');
// }
console.log(inputEl === null || inputEl === void 0 ? void 0 : inputEl.value);
console.log(inputEl.value); //if there is no #user-name element, this will throw "Cannot read 'value' of null" runtime error
/**
 * const inputEl = document.getElementById('user-name')!;
 * Non-null Assertion Operator (널 아님 단언 연산자)
 */
