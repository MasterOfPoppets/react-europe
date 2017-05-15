'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/garethhughes/Workspace/PWG/react-europe/components/Layout.js';


var LayoutWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Layout__LayoutWrapper',
  componentId: 's1t6ya17-0'
})(['margin: auto;width: 750px;']);

var Footer = _styledComponents2.default.div.withConfig({
  displayName: 'Layout__Footer',
  componentId: 's1t6ya17-1'
})(['bottom: 0;margin: 20px;position: fixed;right: 0;']);

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.handleNext = function () {
      _index2.default.push({ pathname: _this.props.next });
    }, _this.handlePrev = function () {
      _index2.default.push({ pathname: _this.props.prev });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(LayoutWrapper, { onClick: this.handlePage, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, this.props.title)), this.props.children, _react2.default.createElement(Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, this.props.prev && _react2.default.createElement('button', { onClick: this.handlePrev, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Prev'), this.props.next && _react2.default.createElement('button', { onClick: this.handleNext, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Next')));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;