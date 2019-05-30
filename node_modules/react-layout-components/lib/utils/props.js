'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var alignProps = exports.alignProps = ['order', 'justifyContent', 'alignItems', 'alignSelf', 'alignContent'];
var sizeProps = exports.sizeProps = ['width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight'];
var flexProps = exports.flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis'];
var boxProps = exports.boxProps = [].concat(alignProps, sizeProps);
var layoutProps = exports.layoutProps = [].concat(_toConsumableArray(boxProps), flexProps, ['column', 'row', 'wrap', 'inline', 'center', 'fit']);

var paddingProps = exports.paddingProps = ['padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'];
var marginProps = exports.marginProps = ['margin', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom'];
var borderProps = exports.borderProps = ['border', 'borderWidth', 'borderColor', 'borderStyle', 'borderLeft', 'borderRight', 'borderTop', 'borderBottom'];
var positionProps = exports.positionProps = ['top', 'left', 'bottom', 'right'];
var overflowProps = exports.overflowProps = ['overflow', 'overflowX', 'overflowY', 'textOverflow', 'whiteSpace'];

var containerProps = exports.containerProps = ['boxSizing'].concat(paddingProps, marginProps, borderProps, positionProps, overflowProps);
var borderShortcutProps = exports.borderShortcutProps = ['borderTop', 'borderWidth', 'borderRight', 'borderLeft'];