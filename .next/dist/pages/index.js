'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/garethhughes/Workspace/PWG/react-europe/pages/index.js?entry';


var Title = _styledComponents2.default.h1.withConfig({
  displayName: 'pages__Title',
  componentId: 's1gaamc0-0'
})(['color: palevioletred;font-size: 50px;text-align: center;']);

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, { title: 'PWG @ ReactEurope', next: '/predictions', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'PWG @ ReactEurope'));
};