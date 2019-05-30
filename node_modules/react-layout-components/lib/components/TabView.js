'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Scrollable Container
 */
var TabView = function (_PureComponent) {
  _inherits(TabView, _PureComponent);

  function TabView(props) {
    _classCallCheck(this, TabView);

    var _this = _possibleConstructorReturn(this, (TabView.__proto__ || Object.getPrototypeOf(TabView)).apply(this, arguments));

    _this.selectTab = function (tabIndex) {
      _this.setState({ selectedTab: tabIndex });
    };

    _this.getSelectedTabIndex = function () {
      return _this.state.selectedTab;
    };

    _this.getSelectedTabView = function () {
      return _this.props.tabs[_this.state.selectedTab].view;
    };

    _this.getSelectedTab = function () {
      return _this.props.tabs[_this.state.selectedTab];
    };

    _this.getTab = function (tabIndex) {
      return _this.props.tabs[tabIndex];
    };

    _this.getTabView = function (tabIndex) {
      return _this.props.tabs[tabIndex].view;
    };

    _this.state = { selectedTab: props.selectedTab };
    return _this;
  }

  _createClass(TabView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;

      var selectedView = props.tabs.map(function (tab, index) {
        if (index === _this2.state.selectedTab) {
          return _react2.default.createElement(
            _Box2.default,
            { width: '100%' },
            tab.view
          );
        }
      });

      var items = props.tabs.map(function (tab, index) {
        return _react2.default.createElement(
          _Box2.default,
          { center: true, flex: 1, onClick: function onClick() {
              _this2.selectTab(index);
            } },
          tab.tab
        );
      });

      return _react2.default.createElement(
        _Box2.default,
        _extends({}, props, { flex: 1, fit: true, column: true }),
        _react2.default.createElement(
          _Box2.default,
          { fit: true },
          selectedView
        ),
        _react2.default.createElement(
          _Box2.default,
          { flex: '0 0 auto' },
          items
        )
      );
    }
  }]);

  return TabView;
}(_react.PureComponent);

TabView.defaultProps = { selectedTab: 0 };
TabView.propTypes = {
  selectedTab: _propTypes2.default.number,
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    view: _propTypes2.default.any,
    tab: _propTypes2.default.any
  }))
};
exports.default = TabView;
module.exports = exports['default'];