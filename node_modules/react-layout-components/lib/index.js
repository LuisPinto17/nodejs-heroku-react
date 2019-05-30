'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.VBox = exports.Center = exports.Flex = exports.ScrollView = exports.Container = exports.Page = exports.Box = undefined;

var _Box = require('./components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Page = require('./components/Page');

var _Page2 = _interopRequireDefault(_Page);

var _Container = require('./components/Container');

var _Container2 = _interopRequireDefault(_Container);

var _ScrollView = require('./components/ScrollView');

var _ScrollView2 = _interopRequireDefault(_ScrollView);

var _Flex = require('./components/shortcut/Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _Center = require('./components/shortcut/Center');

var _Center2 = _interopRequireDefault(_Center);

var _VBox = require('./components/shortcut/VBox');

var _VBox2 = _interopRequireDefault(_VBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Box2.default;
// shortcuts

exports.Box = _Box2.default;
exports.Page = _Page2.default;
exports.Container = _Container2.default;
exports.ScrollView = _ScrollView2.default;
exports.Flex = _Flex2.default;
exports.Center = _Center2.default;
exports.VBox = _VBox2.default;