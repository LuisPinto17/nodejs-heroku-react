'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _static = require('inline-style-prefixer/static');

var _static2 = _interopRequireDefault(_static);

var _omit = require('../utils/omit');

var _omit2 = _interopRequireDefault(_omit);

var _props = require('../utils/props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Flexbox Component
 */
var Box = function (_React$PureComponent) {
  _inherits(Box, _React$PureComponent);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
  }

  _createClass(Box, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var styles = {};

      // shortcut props
      if (props.fit) {
        styles.width = '100%';
        styles.height = '100%';
      }

      if (props.center) {
        styles.justifyContent = 'center';
        styles.alignItems = 'center';
      }

      // resolving inline-flex display style
      if (props.inline) {
        styles.display = 'inline-' + styles.display;
      }

      // resolving the flow properties flex-wrap and flex-direction
      if (props.wrap) {
        styles.flexWrap = 'wrap';
        if (props.wrap === 'reverse') {
          styles.flexWrap += '-reverse';
        }
      }

      if (props.column) {
        styles.flexDirection = 'column';
        if (props.reverse) {
          styles.flexDirection += '-reverse';
        }
      } else {
        if (props.reverse) {
          styles.flexDirection = 'row-reverse';
        }
      }

      // resolving all box properties
      _props.boxProps.forEach(function (prop) {
        if (props.hasOwnProperty(prop)) {
          styles[prop] = props[prop];
        }
      });

      // resolving flex properties and its shortcut
      _props.flexProps.forEach(function (prop) {
        if (props.hasOwnProperty(prop)) {
          styles[prop] = props[prop];
        }
      });

      // processing styles and normalizing flexbox specifications
      var prefixedStyles = (0, _static2.default)(styles);
      var className = (props.className || '') + ' react-layout-components--box';
      var childProps = (0, _omit2.default)(props, _props.layoutProps);

      return _react2.default.createElement(
        'div',
        _extends({}, childProps, { className: className, style: _extends({}, prefixedStyles, props.style) }),
        props.children
      );
    }
  }]);

  return Box;
}(_react2.default.PureComponent);

exports.default = Box;
module.exports = exports['default'];