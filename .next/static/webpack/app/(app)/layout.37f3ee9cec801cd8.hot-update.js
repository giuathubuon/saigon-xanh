"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/layout",{

/***/ "(app-pages-browser)/./lib/sidebar.js":
/*!************************!*\
  !*** ./lib/sidebar.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sidebarRoutes: function() { return /* binding */ sidebarRoutes; }\n/* harmony export */ });\nconst sidebarRoutes = (user)=>[\n        {\n            name: \"Trang chủ\",\n            icon: \"eva:home-fill\",\n            route: \"/\"\n        },\n        {\n            name: \"Hồ sơ c\\xe1 nh\\xe2n\",\n            icon: \"bi:person-fill\",\n            route: \"/profile/\".concat(user === null || user === void 0 ? void 0 : user.id)\n        },\n        {\n            name: \"Tra cứu thời tiết\",\n            icon: \"bi:cloud\",\n            route: \"/weather\"\n        },\n        {\n            name: \"Chất lượng kh\\xf4ng kh\\xed\",\n            icon: \"material-symbols:air\",\n            route: \"/air-quality\"\n        },\n        {\n            name: \"T\\xecm kiếm\",\n            icon: \"bi:search\",\n            route: \"/facebook-group-search\"\n        },\n        {\n            name: \"Carbon Game\",\n            icon: \"bi-controller\",\n            route: \"/facebook-group-search\"\n        },\n        {\n            name: \"Nhắn tin\",\n            icon: \"eva:message-circle-fill\",\n            route: \"/messages\"\n        }\n    ];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9zaWRlYmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxnQkFBZ0IsQ0FBQ0MsT0FBUztRQUNyQztZQUNFQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsT0FBTztRQUNUO1FBQ0E7WUFDRUYsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE9BQU8sWUFBcUIsT0FBVEgsaUJBQUFBLDJCQUFBQSxLQUFNSSxFQUFFO1FBQzdCO1FBQ0E7WUFDRUgsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE9BQVE7UUFDVjtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxPQUFRO1FBQ1Y7UUFDQTtZQUNFRixNQUFNO1lBQ05DLE1BQU07WUFDTkMsT0FBUTtRQUNWO1FBQ0E7WUFDRUYsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE9BQVE7UUFDVjtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7S0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9zaWRlYmFyLmpzP2EzMDAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNpZGViYXJSb3V0ZXMgPSAodXNlcikgPT4gW1xuICB7XG4gICAgbmFtZTogXCJUcmFuZyBjaOG7p1wiLFxuICAgIGljb246IFwiZXZhOmhvbWUtZmlsbFwiLFxuICAgIHJvdXRlOiBcIi9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSOG7kyBzxqEgY8OhIG5ow6JuXCIsXG4gICAgaWNvbjogXCJiaTpwZXJzb24tZmlsbFwiLFxuICAgIHJvdXRlOiBgL3Byb2ZpbGUvJHt1c2VyPy5pZH1gLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUcmEgY+G7qXUgdGjhu51pIHRp4bq/dFwiLFxuICAgIGljb246IFwiYmk6Y2xvdWRcIixcbiAgICByb3V0ZTogYC93ZWF0aGVyYCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ2jhuqV0IGzGsOG7o25nIGtow7RuZyBraMOtXCIsXG4gICAgaWNvbjogXCJtYXRlcmlhbC1zeW1ib2xzOmFpclwiLFxuICAgIHJvdXRlOiBgL2Fpci1xdWFsaXR5YCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVMOsbSBraeG6v21cIixcbiAgICBpY29uOiBcImJpOnNlYXJjaFwiLFxuICAgIHJvdXRlOiBgL2ZhY2Vib29rLWdyb3VwLXNlYXJjaGAsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNhcmJvbiBHYW1lXCIsXG4gICAgaWNvbjogXCJiaS1jb250cm9sbGVyXCIsXG4gICAgcm91dGU6IGAvZmFjZWJvb2stZ3JvdXAtc2VhcmNoYCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTmjhuq9uIHRpblwiLFxuICAgIGljb246IFwiZXZhOm1lc3NhZ2UtY2lyY2xlLWZpbGxcIixcbiAgICByb3V0ZTogXCIvbWVzc2FnZXNcIixcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsic2lkZWJhclJvdXRlcyIsInVzZXIiLCJuYW1lIiwiaWNvbiIsInJvdXRlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/sidebar.js\n"));

/***/ })

});