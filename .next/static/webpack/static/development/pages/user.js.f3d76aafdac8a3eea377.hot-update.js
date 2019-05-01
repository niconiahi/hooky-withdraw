webpackHotUpdate("static/development/pages/user.js",{

/***/ "./pages/user.jsx":
/*!************************!*\
  !*** ./pages/user.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.jsx");
/* harmony import */ var _components_user_UserInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/user/UserInformation */ "./components/user/UserInformation.jsx");
/* harmony import */ var _state_user_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/user/context */ "./state/user/context.js");


var _jsxFileName = "/home/niconiahi/Documents/hooky-withdraw/pages/user.jsx";

 // API

 // Components


 // State



var UserPage = function UserPage(_ref) {
  var userData = _ref.userData;
  var userContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_state_user_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    userContext.updateUserData(userData);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_user_UserInformation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userData: userContext.userState.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })));
};

UserPage.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var userData, res;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userData = {};
          _context.prev = 1;
          _context.next = 4;
          return _api__WEBPACK_IMPORTED_MODULE_3__["default"].user.getData();

        case 4:
          res = _context.sent;
          userData = res.data;
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);

        case 11:
          return _context.abrupt("return", {
            userData: userData
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[1, 8]]);
}));
/* harmony default export */ __webpack_exports__["default"] = (UserPage);

/***/ })

})
//# sourceMappingURL=user.js.f3d76aafdac8a3eea377.hot-update.js.map