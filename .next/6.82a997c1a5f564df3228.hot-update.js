webpackHotUpdate(6,{

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

var _index = __webpack_require__(81);

var _index2 = _interopRequireDefault(_index);

var _styledComponents = __webpack_require__(546);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/garethhughes/Workspace/PWG/react-europe/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/garethhughes/Workspace/PWG/react-europe/components/Layout.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9iMjIyKiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQjs7OztBQUNUOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7O0FBRVAsSUFBTSwyQ0FBdUI7ZUFBdkI7ZUFBQTtBQUFBLENBQWdCLEdBQXRCOztBQUtBLElBQU0sb0NBQWdCO2VBQWhCO2VBQUE7QUFBQSxDQUFTLEdBQWY7O0lBT007Ozs7Ozs7Ozs7Ozs7OzRNQUNKLGFBQWEsWUFDWDtzQkFBTyxLQUFLLEVBQUUsVUFBVSxNQUFLLE1BQzlCO2FBRUQsYUFBYSxZQUNYO3NCQUFPLEtBQUssRUFBRSxVQUFVLE1BQUssTUFDOUI7Ozs7Ozs2QkFHQzs2QkFDRyxjQUFELGlCQUFlLFNBQVMsS0FBSztvQkFBN0I7c0JBQ0U7QUFERjtPQUFBLGtCQUNHOztvQkFBRDtzQkFDRTtBQURGO0FBQUEseUJBQ0U7O29CQUFBO3NCQUFRO0FBQVI7QUFBQSxjQUFhLE1BRWQsY0FBSyxNQUNOLDBCQUFDLGNBQUQ7O29CQUFBO3NCQUNHO0FBREg7QUFBQSxjQUNRLE1BQU0sd0JBQVEsMEJBQVEsU0FBUyxLQUFLO29CQUF0QjtzQkFBQTtBQUFBO09BQUEsRUFDbkIsY0FBSyxNQUFNLHdCQUFRLDBCQUFRLFNBQVMsS0FBSztvQkFBdEI7c0JBQUE7QUFBQTtPQUFBLEVBSTNCOzs7OztBQUdIOztrQkFBZSxPIiwiZmlsZSI6IjYuODJhOTk3YzFhNWY1NjRkZjMyMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBMYXlvdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzUwcHg7XG5gXG5cbmNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuYFxuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKHsgcGF0aG5hbWU6IHRoaXMucHJvcHMubmV4dCB9KVxuICB9XG5cbiAgaGFuZGxlUHJldiA9ICgpID0+IHtcbiAgICBSb3V0ZXIucHVzaCh7IHBhdGhuYW1lOiB0aGlzLnByb3BzLnByZXYgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dFdyYXBwZXIgb25DbGljaz17dGhpcy5oYW5kbGVQYWdlfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPnt0aGlzLnByb3BzLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxGb290ZXI+XG4gICAgICAgICAge3RoaXMucHJvcHMucHJldiAmJiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUHJldn0+UHJldjwvYnV0dG9uPn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5uZXh0ICYmIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVOZXh0fT5OZXh0PC9idXR0b24+fVxuICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgIDwvTGF5b3V0V3JhcHBlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJzb3VyY2VSb290IjoiIn0=