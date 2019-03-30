"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_is_valid_1 = require("@writetome51/index-is-valid");
// index can be negative or positive.
function errorIfIndexNotValid(index, arrayLength) {
    if (!(index_is_valid_1.indexIsValid(index, arrayLength))) {
        throw new Error("The entered index is not valid.  Whether positive or negative,\n\t\tit exceeds the index range of the array.");
    }
}
exports.errorIfIndexNotValid = errorIfIndexNotValid;
