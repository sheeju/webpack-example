webpackJsonp([2],{

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () {\n\tfunction defineProperties(target, props) {\n\t\tfor (var i = 0; i < props.length; i++) {\n\t\t\tvar descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n\t\t}\n\t}return function (Constructor, protoProps, staticProps) {\n\t\tif (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n\t};\n}();\n\nvar _jquery = __webpack_require__(3);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _mustache = __webpack_require__(5);\n\nvar _mustache2 = _interopRequireDefault(_mustache);\n\nvar _Header = __webpack_require__(8);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\n__webpack_require__(9);\n\nfunction _interopRequireDefault(obj) {\n\treturn obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n\tif (!(instance instanceof Constructor)) {\n\t\tthrow new TypeError(\"Cannot call a class as a function\");\n\t}\n}\n\nvar Header = function () {\n\tfunction Header() {\n\t\t_classCallCheck(this, Header);\n\t}\n\n\t_createClass(Header, [{\n\t\tkey: 'render',\n\t\tvalue: function render(node) {\n\t\t\tvar text = (0, _jquery2.default)(node).text();\n\n\t\t\t(0, _jquery2.default)(node).html(_mustache2.default.render(_Header2.default, { text: text }));\n\t\t}\n\t}]);\n\n\treturn Header;\n}();\n\nexports.default = Header;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-loader!./src/Components/Header.js\n ** module id = 7\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/Components/Header.js?./~/babel-loader");

/***/ },

/***/ 8:
/***/ function(module, exports) {

	eval("module.exports = \"<header class=\\\"header\\\">{{text}}</header>\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/Components/Header.html\n ** module id = 8\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/Components/Header.html?");

/***/ },

/***/ 9:
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/Components/Header.scss\n ** module id = 9\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/Components/Header.scss?");

/***/ }

});