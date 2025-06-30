"use strict";
function generateError(msg) {
    throw new Error(msg);
}
generateError();
let input = '';
const didProvideInput = input !== null && input !== void 0 ? input : false;
