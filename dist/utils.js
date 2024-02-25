"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
exports.endsWith = endsWith;
exports.isWeAPP = () => typeof wx !== 'undefined';
