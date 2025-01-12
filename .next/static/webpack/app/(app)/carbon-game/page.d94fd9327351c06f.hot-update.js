"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/carbon-game/page",{

/***/ "(app-pages-browser)/./sections/carbon-game/View/CarbonGameView.jsx":
/*!******************************************************!*\
  !*** ./sections/carbon-game/View/CarbonGameView.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/input */ \"(app-pages-browser)/./node_modules/antd/es/input/index.js\");\n/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/button */ \"(app-pages-browser)/./node_modules/antd/es/button/index.js\");\n/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/form */ \"(app-pages-browser)/./node_modules/antd/es/form/index.js\");\n/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/card */ \"(app-pages-browser)/./node_modules/antd/es/card/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst CarbonGameView = ()=>{\n    _s();\n    const [carbonOutput, setCarbonOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [treesNeeded, setTreesNeeded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const calculateCarbon = (values)=>{\n        const { electricity, water, transport, waste } = values;\n        // Đơn vị tính carbon cho từng hoạt động\n        const carbonFromElectricity = electricity * 0.67; // kWh * hệ số phát thải \n        //http://www.dcc.gov.vn/van-ban-phap-luat/1110/He-so-phat-thai-luoi-dien-Viet-Nam-2022.html\n        const carbonFromWater = water * 0.3; // m³ * hệ số phát thải\n        const carbonFromTransport = transport * 0.2; // km * hệ số phát thải\n        //https://vnce.vn/he-so-phat-thai-co2-khi-nha-kinh\n        const carbonFromWaste = waste * 0.4; // kg rác * hệ số phát thải\n        // Tổng lượng carbon thải ra\n        const totalCarbon = (carbonFromElectricity + carbonFromWater + carbonFromTransport + carbonFromWaste).toFixed(2);\n        // Quy đổi lượng cây xanh cần trồng (1 cây hấp thụ 21kg CO2/năm)\n        const totalTrees = Math.ceil(totalCarbon / 21);\n        setCarbonOutput(totalCarbon);\n        setTreesNeeded(totalTrees);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\",\n            maxWidth: \"600px\",\n            margin: \"auto\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            title: \"Carbon Calculator\",\n            style: {\n                textAlign: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    layout: \"vertical\",\n                    onFinish: calculateCarbon,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                            label: \"Điện ti\\xeau thụ trong th\\xe1ng (kWh)\",\n                            name: \"electricity\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: \"H\\xe3y nhập số kWh điện ti\\xeau thụ!\"\n                                }\n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"number\",\n                                placeholder: \"Nhập số kWh\"\n                            }, void 0, false, {\n                                fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                            label: \"Lượng nước sử dụng (m\\xb3)\",\n                            name: \"water\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: \"H\\xe3y nhập lượng nước đ\\xe3 sử dụng!\"\n                                }\n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"number\",\n                                placeholder: \"Nhập số m\\xb3\"\n                            }, void 0, false, {\n                                fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                            label: \"Khoảng c\\xe1ch đi lại (km)\",\n                            name: \"transport\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: \"H\\xe3y nhập khoảng c\\xe1ch di chuyển!\"\n                                }\n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"number\",\n                                placeholder: \"Nhập số km\"\n                            }, void 0, false, {\n                                fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                            label: \"Lượng r\\xe1c thải (kg)\",\n                            name: \"waste\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: \"H\\xe3y nhập lượng r\\xe1c thải!\"\n                                }\n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"number\",\n                                placeholder: \"Nhập số kg\"\n                            }, void 0, false, {\n                                fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            type: \"primary\",\n                            htmlType: \"submit\",\n                            block: true,\n                            children: \"T\\xednh lượng carbon\"\n                        }, void 0, false, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                carbonOutput > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        marginTop: \"20px\",\n                        textAlign: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Lượng carbon thải ra:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined),\n                                \" \",\n                                carbonOutput,\n                                \" kg CO2\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Số c\\xe2y xanh cần trồng:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, undefined),\n                                \" \",\n                                treesNeeded,\n                                \" c\\xe2y\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CarbonGameView, \"boRQ3Zhjt3bdSnNFX36NFPZmOHQ=\");\n_c = CarbonGameView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarbonGameView);\nvar _c;\n$RefreshReg$(_c, \"CarbonGameView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NlY3Rpb25zL2NhcmJvbi1nYW1lL1ZpZXcvQ2FyYm9uR2FtZVZpZXcuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFd0M7QUFDbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRTNELE1BQU1RLGlCQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDVSxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1ZLGtCQUFrQixDQUFDQztRQUN2QixNQUFNLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRSxHQUFHSjtRQUVqRCx3Q0FBd0M7UUFDeEMsTUFBTUssd0JBQXdCSixjQUFjLE1BQU0seUJBQXlCO1FBQzNFLDJGQUEyRjtRQUUzRixNQUFNSyxrQkFBa0JKLFFBQVEsS0FBSyx1QkFBdUI7UUFDNUQsTUFBTUssc0JBQXNCSixZQUFZLEtBQUssdUJBQXVCO1FBQ3BFLGtEQUFrRDtRQUNsRCxNQUFNSyxrQkFBa0JKLFFBQVEsS0FBSywyQkFBMkI7UUFFaEUsNEJBQTRCO1FBQzVCLE1BQU1LLGNBQWMsQ0FDbEJKLHdCQUNBQyxrQkFDQUMsc0JBQ0FDLGVBQWMsRUFDZEUsT0FBTyxDQUFDO1FBRVYsZ0VBQWdFO1FBQ2hFLE1BQU1DLGFBQWFDLEtBQUtDLElBQUksQ0FBQ0osY0FBYztRQUUzQ2IsZ0JBQWdCYTtRQUNoQlgsZUFBZWE7SUFDakI7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsT0FBTztZQUFFQyxTQUFTO1lBQVFDLFVBQVU7WUFBU0MsUUFBUTtRQUFPO2tCQUMvRCw0RUFBQzNCLG9EQUFJQTtZQUFDNEIsT0FBTTtZQUFvQkosT0FBTztnQkFBRUssV0FBVztZQUFTOzs4QkFDM0QsOERBQUM5QixvREFBSUE7b0JBQUMrQixRQUFPO29CQUFXQyxVQUFVdkI7O3NDQUNoQyw4REFBQ1Qsb0RBQUlBLENBQUNpQyxJQUFJOzRCQUNSQyxPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxPQUFPO2dDQUNMO29DQUFFQyxVQUFVO29DQUFNQyxTQUFTO2dDQUFpQzs2QkFDN0Q7c0NBRUQsNEVBQUN4QyxxREFBS0E7Z0NBQUN5QyxNQUFLO2dDQUFTQyxhQUFZOzs7Ozs7Ozs7OztzQ0FFbkMsOERBQUN4QyxvREFBSUEsQ0FBQ2lDLElBQUk7NEJBQ1JDLE9BQU07NEJBQ05DLE1BQUs7NEJBQ0xDLE9BQU87Z0NBQ0w7b0NBQUVDLFVBQVU7b0NBQU1DLFNBQVM7Z0NBQWtDOzZCQUM5RDtzQ0FFRCw0RUFBQ3hDLHFEQUFLQTtnQ0FBQ3lDLE1BQUs7Z0NBQVNDLGFBQVk7Ozs7Ozs7Ozs7O3NDQUVuQyw4REFBQ3hDLG9EQUFJQSxDQUFDaUMsSUFBSTs0QkFDUkMsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsT0FBTztnQ0FDTDtvQ0FBRUMsVUFBVTtvQ0FBTUMsU0FBUztnQ0FBa0M7NkJBQzlEO3NDQUVELDRFQUFDeEMscURBQUtBO2dDQUFDeUMsTUFBSztnQ0FBU0MsYUFBWTs7Ozs7Ozs7Ozs7c0NBRW5DLDhEQUFDeEMsb0RBQUlBLENBQUNpQyxJQUFJOzRCQUNSQyxPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxPQUFPO2dDQUFDO29DQUFFQyxVQUFVO29DQUFNQyxTQUFTO2dDQUEyQjs2QkFBRTtzQ0FFaEUsNEVBQUN4QyxxREFBS0E7Z0NBQUN5QyxNQUFLO2dDQUFTQyxhQUFZOzs7Ozs7Ozs7OztzQ0FFbkMsOERBQUN6QyxzREFBTUE7NEJBQUN3QyxNQUFLOzRCQUFVRSxVQUFTOzRCQUFTQyxLQUFLO3NDQUFDOzs7Ozs7Ozs7Ozs7Z0JBS2hEckMsZUFBZSxtQkFDZCw4REFBQ21CO29CQUFJQyxPQUFPO3dCQUFFa0IsV0FBVzt3QkFBUWIsV0FBVztvQkFBUzs7c0NBQ25ELDhEQUFDYzs7OENBQ0MsOERBQUNDOzhDQUFFOzs7Ozs7Z0NBQXlCO2dDQUFFeEM7Z0NBQWE7Ozs7Ozs7c0NBRTdDLDhEQUFDdUM7OzhDQUNDLDhEQUFDQzs4Q0FBRTs7Ozs7O2dDQUEwQjtnQ0FBRXRDO2dDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekQ7R0F2Rk1IO0tBQUFBO0FBeUZOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL2NhcmJvbi1nYW1lL1ZpZXcvQ2FyYm9uR2FtZVZpZXcuanN4PzRmZmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiwgRm9ybSwgQ2FyZCwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuXG5jb25zdCBDYXJib25HYW1lVmlldyA9ICgpID0+IHtcbiAgY29uc3QgW2NhcmJvbk91dHB1dCwgc2V0Q2FyYm9uT3V0cHV0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdHJlZXNOZWVkZWQsIHNldFRyZWVzTmVlZGVkXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNhbGN1bGF0ZUNhcmJvbiA9ICh2YWx1ZXMpID0+IHtcbiAgICBjb25zdCB7IGVsZWN0cmljaXR5LCB3YXRlciwgdHJhbnNwb3J0LCB3YXN0ZSB9ID0gdmFsdWVzO1xuXG4gICAgLy8gxJDGoW4gduG7iyB0w61uaCBjYXJib24gY2hvIHThu6tuZyBob+G6oXQgxJHhu5luZ1xuICAgIGNvbnN0IGNhcmJvbkZyb21FbGVjdHJpY2l0eSA9IGVsZWN0cmljaXR5ICogMC42NzsgLy8ga1doICogaOG7hyBz4buRIHBow6F0IHRo4bqjaSBcbiAgICAvL2h0dHA6Ly93d3cuZGNjLmdvdi52bi92YW4tYmFuLXBoYXAtbHVhdC8xMTEwL0hlLXNvLXBoYXQtdGhhaS1sdW9pLWRpZW4tVmlldC1OYW0tMjAyMi5odG1sXG5cbiAgICBjb25zdCBjYXJib25Gcm9tV2F0ZXIgPSB3YXRlciAqIDAuMzsgLy8gbcKzICogaOG7hyBz4buRIHBow6F0IHRo4bqjaVxuICAgIGNvbnN0IGNhcmJvbkZyb21UcmFuc3BvcnQgPSB0cmFuc3BvcnQgKiAwLjI7IC8vIGttICogaOG7hyBz4buRIHBow6F0IHRo4bqjaVxuICAgIC8vaHR0cHM6Ly92bmNlLnZuL2hlLXNvLXBoYXQtdGhhaS1jbzIta2hpLW5oYS1raW5oXG4gICAgY29uc3QgY2FyYm9uRnJvbVdhc3RlID0gd2FzdGUgKiAwLjQ7IC8vIGtnIHLDoWMgKiBo4buHIHPhu5EgcGjDoXQgdGjhuqNpXG5cbiAgICAvLyBU4buVbmcgbMaw4bujbmcgY2FyYm9uIHRo4bqjaSByYVxuICAgIGNvbnN0IHRvdGFsQ2FyYm9uID0gKFxuICAgICAgY2FyYm9uRnJvbUVsZWN0cmljaXR5ICtcbiAgICAgIGNhcmJvbkZyb21XYXRlciArXG4gICAgICBjYXJib25Gcm9tVHJhbnNwb3J0ICtcbiAgICAgIGNhcmJvbkZyb21XYXN0ZVxuICAgICkudG9GaXhlZCgyKTtcblxuICAgIC8vIFF1eSDEkeG7lWkgbMaw4bujbmcgY8OieSB4YW5oIGPhuqduIHRy4buTbmcgKDEgY8OieSBo4bqlcCB0aOG7pSAyMWtnIENPMi9uxINtKVxuICAgIGNvbnN0IHRvdGFsVHJlZXMgPSBNYXRoLmNlaWwodG90YWxDYXJib24gLyAyMSk7XG5cbiAgICBzZXRDYXJib25PdXRwdXQodG90YWxDYXJib24pO1xuICAgIHNldFRyZWVzTmVlZGVkKHRvdGFsVHJlZXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiwgbWF4V2lkdGg6IFwiNjAwcHhcIiwgbWFyZ2luOiBcImF1dG9cIiB9fT5cbiAgICAgIDxDYXJkIHRpdGxlPVwiQ2FyYm9uIENhbGN1bGF0b3JcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgIDxGb3JtIGxheW91dD1cInZlcnRpY2FsXCIgb25GaW5pc2g9e2NhbGN1bGF0ZUNhcmJvbn0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbGFiZWw9XCLEkGnhu4duIHRpw6p1IHRo4bulIHRyb25nIHRow6FuZyAoa1doKVwiXG4gICAgICAgICAgICBuYW1lPVwiZWxlY3RyaWNpdHlcIlxuICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJIw6N5IG5o4bqtcCBz4buRIGtXaCDEkWnhu4duIHRpw6p1IHRo4bulIVwiIH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJOaOG6rXAgc+G7kSBrV2hcIiAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgIGxhYmVsPVwiTMaw4bujbmcgbsaw4bubYyBz4butIGThu6VuZyAobcKzKVwiXG4gICAgICAgICAgICBuYW1lPVwid2F0ZXJcIlxuICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJIw6N5IG5o4bqtcCBsxrDhu6NuZyBuxrDhu5tjIMSRw6Mgc+G7rSBk4bulbmchXCIgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIk5o4bqtcCBz4buRIG3Cs1wiIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbGFiZWw9XCJLaG/huqNuZyBjw6FjaCDEkWkgbOG6oWkgKGttKVwiXG4gICAgICAgICAgICBuYW1lPVwidHJhbnNwb3J0XCJcbiAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiSMOjeSBuaOG6rXAga2hv4bqjbmcgY8OhY2ggZGkgY2h1eeG7g24hXCIgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIk5o4bqtcCBz4buRIGttXCIgLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBsYWJlbD1cIkzGsOG7o25nIHLDoWMgdGjhuqNpIChrZylcIlxuICAgICAgICAgICAgbmFtZT1cIndhc3RlXCJcbiAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJIw6N5IG5o4bqtcCBsxrDhu6NuZyByw6FjIHRo4bqjaSFcIiB9XX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiTmjhuq1wIHPhu5Ega2dcIiAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGJsb2NrPlxuICAgICAgICAgICAgVMOtbmggbMaw4bujbmcgY2FyYm9uXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cblxuICAgICAgICB7Y2FyYm9uT3V0cHV0ID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGI+TMaw4bujbmcgY2FyYm9uIHRo4bqjaSByYTo8L2I+IHtjYXJib25PdXRwdXR9IGtnIENPMlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxiPlPhu5EgY8OieSB4YW5oIGPhuqduIHRy4buTbmc6PC9iPiB7dHJlZXNOZWVkZWR9IGPDonlcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvQ2FyZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmJvbkdhbWVWaWV3O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbnB1dCIsIkJ1dHRvbiIsIkZvcm0iLCJDYXJkIiwiUm93IiwiQ29sIiwiQ2FyYm9uR2FtZVZpZXciLCJjYXJib25PdXRwdXQiLCJzZXRDYXJib25PdXRwdXQiLCJ0cmVlc05lZWRlZCIsInNldFRyZWVzTmVlZGVkIiwiY2FsY3VsYXRlQ2FyYm9uIiwidmFsdWVzIiwiZWxlY3RyaWNpdHkiLCJ3YXRlciIsInRyYW5zcG9ydCIsIndhc3RlIiwiY2FyYm9uRnJvbUVsZWN0cmljaXR5IiwiY2FyYm9uRnJvbVdhdGVyIiwiY2FyYm9uRnJvbVRyYW5zcG9ydCIsImNhcmJvbkZyb21XYXN0ZSIsInRvdGFsQ2FyYm9uIiwidG9GaXhlZCIsInRvdGFsVHJlZXMiLCJNYXRoIiwiY2VpbCIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsIm1heFdpZHRoIiwibWFyZ2luIiwidGl0bGUiLCJ0ZXh0QWxpZ24iLCJsYXlvdXQiLCJvbkZpbmlzaCIsIkl0ZW0iLCJsYWJlbCIsIm5hbWUiLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImh0bWxUeXBlIiwiYmxvY2siLCJtYXJnaW5Ub3AiLCJwIiwiYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./sections/carbon-game/View/CarbonGameView.jsx\n"));

/***/ })

});