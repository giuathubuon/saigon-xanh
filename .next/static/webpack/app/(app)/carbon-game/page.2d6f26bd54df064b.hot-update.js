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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/input */ \"(app-pages-browser)/./node_modules/antd/es/input/index.js\");\n/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/button */ \"(app-pages-browser)/./node_modules/antd/es/button/index.js\");\n/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/form */ \"(app-pages-browser)/./node_modules/antd/es/form/index.js\");\n/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/card */ \"(app-pages-browser)/./node_modules/antd/es/card/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst CarbonGameView = ()=>{\n    _s();\n    const [carbonOutput, setCarbonOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [treesNeeded, setTreesNeeded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const calculateCarbon = (values)=>{\n        const { electricity, water, transport, waste } = values;\n        // Đơn vị tính carbon cho từng hoạt động\n        const carbonFromElectricity = electricity * 0.67; // kWh * hệ số phát thải \n        //http://www.dcc.gov.vn/van-ban-phap-luat/1110/He-so-phat-thai-luoi-dien-Viet-Nam-2022.html\n        const carbonFromWater = water * 0.3; // m³ * hệ số phát thải\n        const carbonFromTransport = transport * 0.2; // km * hệ số phát thải\n        //https://vnce.vn/he-so-phat-thai-co2-khi-nha-kinh\n        //1000 \n        const carbonFromWaste = waste * 0.4; // kg rác * hệ số phát thải\n        // Tổng lượng carbon thải ra\n        const totalCarbon = (carbonFromElectricity + carbonFromWater + carbonFromTransport + carbonFromWaste).toFixed(2);\n        // Quy đổi lượng cây xanh cần trồng (1 cây hấp thụ 21kg CO2/năm)\n        const totalTrees = Math.ceil(totalCarbon / 21);\n        setCarbonOutput(totalCarbon);\n        setTreesNeeded(totalTrees);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\",\n            maxWidth: \"600px\",\n            margin: \"auto\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            title: \"Carbon Calculator\",\n            style: {\n                textAlign: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    layout: \"vertical\",\n                    onFinish: calculateCarbon,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                            label: \"Điện ti\\xeau thụ trong th\\xe1ng (kWh)\",\n                            name: \"electricity\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: \"H\\xe3y nhập số kWh điện ti\\xeau thụ!\"\n                                }\n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"number\",\n                                placeholder: \"Nhập số kWh\"\n                            }, void 0, false, {\n                                fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                            label: \"Lượng nước sử dụng (m\\xb3)\",\n                            name: \"water\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: \"H\\xe3y nhập lượng nước đ\\xe3 sử dụng!\"\n                                }\n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"number\",\n                                placeholder: \"Nhập số m\\xb3\"\n                            }, void 0, false, {\n                                fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                            label: \"Khoảng c\\xe1ch đi lại (km)\",\n                            name: \"transport\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: \"H\\xe3y nhập khoảng c\\xe1ch di chuyển!\"\n                                }\n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"number\",\n                                placeholder: \"Nhập số km\"\n                            }, void 0, false, {\n                                fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                            label: \"Lượng r\\xe1c thải (kg)\",\n                            name: \"waste\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: \"H\\xe3y nhập lượng r\\xe1c thải!\"\n                                }\n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: \"number\",\n                                placeholder: \"Nhập số kg\"\n                            }, void 0, false, {\n                                fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_es_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            type: \"primary\",\n                            htmlType: \"submit\",\n                            block: true,\n                            children: \"T\\xednh lượng carbon\"\n                        }, void 0, false, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                carbonOutput > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        marginTop: \"20px\",\n                        textAlign: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Lượng carbon thải ra:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, undefined),\n                                \" \",\n                                carbonOutput,\n                                \" kg CO2\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Số c\\xe2y xanh cần trồng:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, undefined),\n                                \" \",\n                                treesNeeded,\n                                \" c\\xe2y\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/iamnguyen/Desktop/net4/sections/carbon-game/View/CarbonGameView.jsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CarbonGameView, \"boRQ3Zhjt3bdSnNFX36NFPZmOHQ=\");\n_c = CarbonGameView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarbonGameView);\nvar _c;\n$RefreshReg$(_c, \"CarbonGameView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NlY3Rpb25zL2NhcmJvbi1nYW1lL1ZpZXcvQ2FyYm9uR2FtZVZpZXcuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFd0M7QUFDbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRTNELE1BQU1RLGlCQUFpQjs7SUFDckIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDVSxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1ZLGtCQUFrQixDQUFDQztRQUN2QixNQUFNLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRSxHQUFHSjtRQUVqRCx3Q0FBd0M7UUFDeEMsTUFBTUssd0JBQXdCSixjQUFjLE1BQU0seUJBQXlCO1FBQzNFLDJGQUEyRjtRQUUzRixNQUFNSyxrQkFBa0JKLFFBQVEsS0FBSyx1QkFBdUI7UUFDNUQsTUFBTUssc0JBQXNCSixZQUFZLEtBQUssdUJBQXVCO1FBQ3BFLGtEQUFrRDtRQUNsRCxPQUFPO1FBQ1AsTUFBTUssa0JBQWtCSixRQUFRLEtBQUssMkJBQTJCO1FBRWhFLDRCQUE0QjtRQUM1QixNQUFNSyxjQUFjLENBQ2xCSix3QkFDQUMsa0JBQ0FDLHNCQUNBQyxlQUFjLEVBQ2RFLE9BQU8sQ0FBQztRQUVWLGdFQUFnRTtRQUNoRSxNQUFNQyxhQUFhQyxLQUFLQyxJQUFJLENBQUNKLGNBQWM7UUFFM0NiLGdCQUFnQmE7UUFDaEJYLGVBQWVhO0lBQ2pCO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLE9BQU87WUFBRUMsU0FBUztZQUFRQyxVQUFVO1lBQVNDLFFBQVE7UUFBTztrQkFDL0QsNEVBQUMzQixvREFBSUE7WUFBQzRCLE9BQU07WUFBb0JKLE9BQU87Z0JBQUVLLFdBQVc7WUFBUzs7OEJBQzNELDhEQUFDOUIsb0RBQUlBO29CQUFDK0IsUUFBTztvQkFBV0MsVUFBVXZCOztzQ0FDaEMsOERBQUNULG9EQUFJQSxDQUFDaUMsSUFBSTs0QkFDUkMsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsT0FBTztnQ0FDTDtvQ0FBRUMsVUFBVTtvQ0FBTUMsU0FBUztnQ0FBaUM7NkJBQzdEO3NDQUVELDRFQUFDeEMscURBQUtBO2dDQUFDeUMsTUFBSztnQ0FBU0MsYUFBWTs7Ozs7Ozs7Ozs7c0NBRW5DLDhEQUFDeEMsb0RBQUlBLENBQUNpQyxJQUFJOzRCQUNSQyxPQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxPQUFPO2dDQUNMO29DQUFFQyxVQUFVO29DQUFNQyxTQUFTO2dDQUFrQzs2QkFDOUQ7c0NBRUQsNEVBQUN4QyxxREFBS0E7Z0NBQUN5QyxNQUFLO2dDQUFTQyxhQUFZOzs7Ozs7Ozs7OztzQ0FFbkMsOERBQUN4QyxvREFBSUEsQ0FBQ2lDLElBQUk7NEJBQ1JDLE9BQU07NEJBQ05DLE1BQUs7NEJBQ0xDLE9BQU87Z0NBQ0w7b0NBQUVDLFVBQVU7b0NBQU1DLFNBQVM7Z0NBQWtDOzZCQUM5RDtzQ0FFRCw0RUFBQ3hDLHFEQUFLQTtnQ0FBQ3lDLE1BQUs7Z0NBQVNDLGFBQVk7Ozs7Ozs7Ozs7O3NDQUVuQyw4REFBQ3hDLG9EQUFJQSxDQUFDaUMsSUFBSTs0QkFDUkMsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsT0FBTztnQ0FBQztvQ0FBRUMsVUFBVTtvQ0FBTUMsU0FBUztnQ0FBMkI7NkJBQUU7c0NBRWhFLDRFQUFDeEMscURBQUtBO2dDQUFDeUMsTUFBSztnQ0FBU0MsYUFBWTs7Ozs7Ozs7Ozs7c0NBRW5DLDhEQUFDekMsc0RBQU1BOzRCQUFDd0MsTUFBSzs0QkFBVUUsVUFBUzs0QkFBU0MsS0FBSztzQ0FBQzs7Ozs7Ozs7Ozs7O2dCQUtoRHJDLGVBQWUsbUJBQ2QsOERBQUNtQjtvQkFBSUMsT0FBTzt3QkFBRWtCLFdBQVc7d0JBQVFiLFdBQVc7b0JBQVM7O3NDQUNuRCw4REFBQ2M7OzhDQUNDLDhEQUFDQzs4Q0FBRTs7Ozs7O2dDQUF5QjtnQ0FBRXhDO2dDQUFhOzs7Ozs7O3NDQUU3Qyw4REFBQ3VDOzs4Q0FDQyw4REFBQ0M7OENBQUU7Ozs7OztnQ0FBMEI7Z0NBQUV0QztnQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pEO0dBeEZNSDtLQUFBQTtBQTBGTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9jYXJib24tZ2FtZS9WaWV3L0NhcmJvbkdhbWVWaWV3LmpzeD80ZmZhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0LCBCdXR0b24sIEZvcm0sIENhcmQsIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuY29uc3QgQ2FyYm9uR2FtZVZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYXJib25PdXRwdXQsIHNldENhcmJvbk91dHB1dF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RyZWVzTmVlZGVkLCBzZXRUcmVlc05lZWRlZF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBjYWxjdWxhdGVDYXJib24gPSAodmFsdWVzKSA9PiB7XG4gICAgY29uc3QgeyBlbGVjdHJpY2l0eSwgd2F0ZXIsIHRyYW5zcG9ydCwgd2FzdGUgfSA9IHZhbHVlcztcblxuICAgIC8vIMSQxqFuIHbhu4sgdMOtbmggY2FyYm9uIGNobyB04burbmcgaG/huqF0IMSR4buZbmdcbiAgICBjb25zdCBjYXJib25Gcm9tRWxlY3RyaWNpdHkgPSBlbGVjdHJpY2l0eSAqIDAuNjc7IC8vIGtXaCAqIGjhu4cgc+G7kSBwaMOhdCB0aOG6o2kgXG4gICAgLy9odHRwOi8vd3d3LmRjYy5nb3Yudm4vdmFuLWJhbi1waGFwLWx1YXQvMTExMC9IZS1zby1waGF0LXRoYWktbHVvaS1kaWVuLVZpZXQtTmFtLTIwMjIuaHRtbFxuXG4gICAgY29uc3QgY2FyYm9uRnJvbVdhdGVyID0gd2F0ZXIgKiAwLjM7IC8vIG3CsyAqIGjhu4cgc+G7kSBwaMOhdCB0aOG6o2lcbiAgICBjb25zdCBjYXJib25Gcm9tVHJhbnNwb3J0ID0gdHJhbnNwb3J0ICogMC4yOyAvLyBrbSAqIGjhu4cgc+G7kSBwaMOhdCB0aOG6o2lcbiAgICAvL2h0dHBzOi8vdm5jZS52bi9oZS1zby1waGF0LXRoYWktY28yLWtoaS1uaGEta2luaFxuICAgIC8vMTAwMCBcbiAgICBjb25zdCBjYXJib25Gcm9tV2FzdGUgPSB3YXN0ZSAqIDAuNDsgLy8ga2cgcsOhYyAqIGjhu4cgc+G7kSBwaMOhdCB0aOG6o2lcblxuICAgIC8vIFThu5VuZyBsxrDhu6NuZyBjYXJib24gdGjhuqNpIHJhXG4gICAgY29uc3QgdG90YWxDYXJib24gPSAoXG4gICAgICBjYXJib25Gcm9tRWxlY3RyaWNpdHkgK1xuICAgICAgY2FyYm9uRnJvbVdhdGVyICtcbiAgICAgIGNhcmJvbkZyb21UcmFuc3BvcnQgK1xuICAgICAgY2FyYm9uRnJvbVdhc3RlXG4gICAgKS50b0ZpeGVkKDIpO1xuXG4gICAgLy8gUXV5IMSR4buVaSBsxrDhu6NuZyBjw6J5IHhhbmggY+G6p24gdHLhu5NuZyAoMSBjw6J5IGjhuqVwIHRo4bulIDIxa2cgQ08yL27Eg20pXG4gICAgY29uc3QgdG90YWxUcmVlcyA9IE1hdGguY2VpbCh0b3RhbENhcmJvbiAvIDIxKTtcblxuICAgIHNldENhcmJvbk91dHB1dCh0b3RhbENhcmJvbik7XG4gICAgc2V0VHJlZXNOZWVkZWQodG90YWxUcmVlcyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiLCBtYXhXaWR0aDogXCI2MDBweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19PlxuICAgICAgPENhcmQgdGl0bGU9XCJDYXJib24gQ2FsY3VsYXRvclwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgPEZvcm0gbGF5b3V0PVwidmVydGljYWxcIiBvbkZpbmlzaD17Y2FsY3VsYXRlQ2FyYm9ufT5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBsYWJlbD1cIsSQaeG7h24gdGnDqnUgdGjhu6UgdHJvbmcgdGjDoW5nIChrV2gpXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbGVjdHJpY2l0eVwiXG4gICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkjDo3kgbmjhuq1wIHPhu5Ega1doIMSRaeG7h24gdGnDqnUgdGjhu6UhXCIgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIk5o4bqtcCBz4buRIGtXaFwiIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbGFiZWw9XCJMxrDhu6NuZyBuxrDhu5tjIHPhu60gZOG7pW5nIChtwrMpXCJcbiAgICAgICAgICAgIG5hbWU9XCJ3YXRlclwiXG4gICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkjDo3kgbmjhuq1wIGzGsOG7o25nIG7GsOG7m2MgxJHDoyBz4butIGThu6VuZyFcIiB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiTmjhuq1wIHPhu5EgbcKzXCIgLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBsYWJlbD1cIktob+G6o25nIGPDoWNoIMSRaSBs4bqhaSAoa20pXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0cmFuc3BvcnRcIlxuICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJIw6N5IG5o4bqtcCBraG/huqNuZyBjw6FjaCBkaSBjaHV54buDbiFcIiB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiTmjhuq1wIHPhu5Ega21cIiAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgIGxhYmVsPVwiTMaw4bujbmcgcsOhYyB0aOG6o2kgKGtnKVwiXG4gICAgICAgICAgICBuYW1lPVwid2FzdGVcIlxuICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkjDo3kgbmjhuq1wIGzGsOG7o25nIHLDoWMgdGjhuqNpIVwiIH1dfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJOaOG6rXAgc+G7kSBrZ1wiIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgYmxvY2s+XG4gICAgICAgICAgICBUw61uaCBsxrDhu6NuZyBjYXJib25cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgIHtjYXJib25PdXRwdXQgPiAwICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8Yj5MxrDhu6NuZyBjYXJib24gdGjhuqNpIHJhOjwvYj4ge2NhcmJvbk91dHB1dH0ga2cgQ08yXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGI+U+G7kSBjw6J5IHhhbmggY+G6p24gdHLhu5NuZzo8L2I+IHt0cmVlc05lZWRlZH0gY8OieVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyYm9uR2FtZVZpZXc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIklucHV0IiwiQnV0dG9uIiwiRm9ybSIsIkNhcmQiLCJSb3ciLCJDb2wiLCJDYXJib25HYW1lVmlldyIsImNhcmJvbk91dHB1dCIsInNldENhcmJvbk91dHB1dCIsInRyZWVzTmVlZGVkIiwic2V0VHJlZXNOZWVkZWQiLCJjYWxjdWxhdGVDYXJib24iLCJ2YWx1ZXMiLCJlbGVjdHJpY2l0eSIsIndhdGVyIiwidHJhbnNwb3J0Iiwid2FzdGUiLCJjYXJib25Gcm9tRWxlY3RyaWNpdHkiLCJjYXJib25Gcm9tV2F0ZXIiLCJjYXJib25Gcm9tVHJhbnNwb3J0IiwiY2FyYm9uRnJvbVdhc3RlIiwidG90YWxDYXJib24iLCJ0b0ZpeGVkIiwidG90YWxUcmVlcyIsIk1hdGgiLCJjZWlsIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0aXRsZSIsInRleHRBbGlnbiIsImxheW91dCIsIm9uRmluaXNoIiwiSXRlbSIsImxhYmVsIiwibmFtZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaHRtbFR5cGUiLCJibG9jayIsIm1hcmdpblRvcCIsInAiLCJiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./sections/carbon-game/View/CarbonGameView.jsx\n"));

/***/ })

});