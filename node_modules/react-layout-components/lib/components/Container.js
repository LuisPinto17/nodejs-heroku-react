'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _omit = require('../utils/omit');

var _omit2 = _interopRequireDefault(_omit);

var _props = require('../utils/props');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var containerLayoutProps = [].concat(_toConsumableArray(_props.containerProps), _toConsumableArray(_props.borderShortcutProps));

/**
 * Container Component
 */

var Container = function (_React$PureComponent) {
  _inherits(Container, _React$PureComponent);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var styles = {};

      if (props.fixed) {
        styles.position = 'fixed';
      }
      if (props.absolute) {
        styles.position = 'absolute';
      }

      // resolving all container properties
      _props.containerProps.forEach(function (prop) {
        if (props.hasOwnProperty(prop)) {
          styles[prop] = props[prop];
        }
      });

      // resolving the border shortcuts
      _props.borderShortcutProps.forEach(function (prop) {
        if (props[prop] === true) {
          styles[prop + 'Width'] = props.borderWidth || 1;
        }
      });

      var childProps = (0, _omit2.default)(props, containerLayoutProps);
      return _react2.default.createElement(_Box2.default, _extends({}, childProps, { style: _extends({}, styles, props.style) }));
    }
  }]);

  return Container;
}(_react2.default.PureComponent);

exports.default = Container;
module.exports = exports['default'];