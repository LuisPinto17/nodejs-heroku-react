'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Throws warnings only in devmode
 * Allows multiple warnings at the same time
 * @param {string|array} message - warnings that get thrown
 */
exports.default = function () {
  for (var _len = arguments.length, warning = Array(_len), _key = 0; _key < _len; _key++) {
    warning[_key] = arguments[_key];
  }

  if (process.env.NODE_ENV !== 'production') {
    var _console;

    (_console = console).warn.apply(_console, ['Layout Components: '].concat(warning));
  }
};

module.exports = exports['default'];