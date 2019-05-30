"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = omit;
/**
 * creates new object sans specified keys
 * @param {object} obj
 * @param {array|undefined} omitions
 * @return {object}
 */
function omit(obj) {
  var omitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return Object.keys(obj).reduce(function (memo, key) {
    if (-1 === omitions.indexOf(key)) {
      memo[key] = obj[key];
    }

    return memo;
  }, {});
}
module.exports = exports['default'];