webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./state/index.js":
/*!************************!*\
  !*** ./state/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/context */ "./state/product/context.js");
/* harmony import */ var _product_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/reducers */ "./state/product/reducers.js");
/* harmony import */ var _user_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/context */ "./state/user/context.js");
/* harmony import */ var _user_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/reducers */ "./state/user/reducers.js");

var _jsxFileName = "/home/niconiahi/Documents/hooky-withdraw/state/index.js";







var GlobalState = function GlobalState(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_product_reducers__WEBPACK_IMPORTED_MODULE_3__["ProductReducers"], {
    products: []
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      productState = _useReducer2[0],
      productDispatch = _useReducer2[1];

  var _useReducer3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_user_reducers__WEBPACK_IMPORTED_MODULE_5__["UserReducers"], {
    data: {}
  }),
      _useReducer4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer3, 2),
      userState = _useReducer4[0],
      userDispatch = _useReducer4[1]; // getProductsPaginated(16, 2)


  var getProductsPaginated = function getProductsPaginated(pageSize) {
    var productsPaginated = [];

    while (pageNumber <= productState.products.length / pageSize) {
      var _pageNumber = 0;

      productsPaginated[_pageNumber].push(productState.products.slice(_pageNumber * pageSize, (_pageNumber + 1) * pageSize));

      _pageNumber++;
    } // return productState.products.reduce((acc, x) => {
    //   const pages = productState.products.length / pageSize
    // }, [])
    // const pageone = pageNumber++
    // const pagetwo = productState.products.slice(
    //   pageNumber * pageSize,
    //   (pageNumber + 1) * pageSize
    // )
    // return [pageone, pagetwo]

  };

  var updateProductList = function updateProductList(products) {
    productDispatch({
      type: _product_reducers__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS_UPDATE"],
      products: products
    });
  };

  var updateUserData = function updateUserData(userData) {
    userDispatch({
      type: _user_reducers__WEBPACK_IMPORTED_MODULE_5__["USER_UPDATE"],
      userData: userData
    });
  }; // Las pretendia usar pero tuve un problema con useReducer
  // y el hecho de que no se por que razon no se puede ejecutar async-await
  // en el body de su ejecucion. Si hay dudas de lo que intente hacer, por favor
  // comunicarse conmigo. Encantado de explicar como lo encare
  // const redeemProduct = productId => {
  //   userDispatch({ type: PRODUCT_REDEEM, productId });
  // };
  // const addPoints = quantity => {
  //   userDispatch({ type: POINTS_ADD, quantity });
  // };


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_product_context__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      productState: productState,
      updateProductList: updateProductList,
      getProductsPaginated: getProductsPaginated
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_user_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      userState: userState,
      updateUserData: updateUserData
      /* redeemProduct, addPoints */

    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (GlobalState); // const productContext = useContext(ProductContext);
// const userContext = useContext(UserContext);

/***/ })

})
//# sourceMappingURL=_app.js.71ab6802662e153e3d6c.hot-update.js.map