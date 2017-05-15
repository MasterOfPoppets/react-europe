webpackHotUpdate(5,{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9iMjIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdCOzs7O0FBQ1Q7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7QUFFUCxJQUFNLDJDQUF1QjtlQUF2QjtlQUFBO0FBQUEsQ0FBZ0IsR0FBdEI7O0FBS0EsSUFBTSxvQ0FBZ0I7ZUFBaEI7ZUFBQTtBQUFBLENBQVMsR0FBZjs7SUFPTTs7Ozs7Ozs7Ozs7Ozs7NE1BQ0osYUFBYSxZQUNYO3NCQUFPLEtBQUssRUFBRSxVQUFVLE1BQUssTUFDOUI7YUFFRCxhQUFhLFlBQ1g7c0JBQU8sS0FBSyxFQUFFLFVBQVUsTUFBSyxNQUM5Qjs7Ozs7OzZCQUdDOzZCQUNHLGNBQUQsaUJBQWUsU0FBUyxLQUFLO29CQUE3QjtzQkFDRTtBQURGO09BQUEsa0JBQ0c7O29CQUFEO3NCQUNFO0FBREY7QUFBQSx5QkFDRTs7b0JBQUE7c0JBQVE7QUFBUjtBQUFBLGNBQWEsTUFFZCxjQUFLLE1BQ04sMEJBQUMsY0FBRDs7b0JBQUE7c0JBQ0c7QUFESDtBQUFBLGNBQ1EsTUFBTSx3QkFBUSwwQkFBUSxTQUFTLEtBQUs7b0JBQXRCO3NCQUFBO0FBQUE7T0FBQSxFQUNuQixjQUFLLE1BQU0sd0JBQVEsMEJBQVEsU0FBUyxLQUFLO29CQUF0QjtzQkFBQTtBQUFBO09BQUEsRUFJM0I7Ozs7O0FBR0g7O2tCQUFlLE8iLCJmaWxlIjoiNS44MmE5OTdjMWE1ZjU2NGRmMzIyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IExheW91dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA3NTBweDtcbmBcblxuY29uc3QgRm9vdGVyID0gc3R5bGVkLmRpdmBcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG5gXG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgUm91dGVyLnB1c2goeyBwYXRobmFtZTogdGhpcy5wcm9wcy5uZXh0IH0pXG4gIH1cblxuICBoYW5kbGVQcmV2ID0gKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKHsgcGF0aG5hbWU6IHRoaXMucHJvcHMucHJldiB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0V3JhcHBlciBvbkNsaWNrPXt0aGlzLmhhbmRsZVBhZ2V9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3RoaXMucHJvcHMudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5wcmV2ICYmIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVQcmV2fT5QcmV2PC9idXR0b24+fVxuICAgICAgICAgIHt0aGlzLnByb3BzLm5leHQgJiYgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHR9Pk5leHQ8L2J1dHRvbj59XG4gICAgICAgIDwvRm9vdGVyPlxuICAgICAgPC9MYXlvdXRXcmFwcGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==