"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/configure/preview/page",{

/***/ "(app-pages-browser)/./src/app/configure/preview/DesignPreview.tsx":
/*!*****************************************************!*\
  !*** ./src/app/configure/preview/DesignPreview.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Phone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Phone */ \"(app-pages-browser)/./src/components/Phone.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _validators_option_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/validators/option-validator */ \"(app-pages-browser)/./src/validators/option-validator.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_confetti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom-confetti */ \"(app-pages-browser)/./node_modules/.pnpm/react-dom-confetti@0.2.0_react@18.3.1/node_modules/react-dom-confetti/lib/confetti.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DesignPreview = (param)=>{\n    let { configuration } = param;\n    var _COLORS_find;\n    _s();\n    const [showConfetti, setShowConfetti] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setShowConfetti(true);\n    }, []);\n    const { color } = configuration;\n    const tw = (_COLORS_find = _validators_option_validator__WEBPACK_IMPORTED_MODULE_3__.COLORS.find((supportedColor)=>supportedColor.value === color)) === null || _COLORS_find === void 0 ? void 0 : _COLORS_find.tw;\n    const { label: modelLabel } = _validators_option_validator__WEBPACK_IMPORTED_MODULE_3__.MODELS.options.find((param)=>{\n        let { value } = param;\n        return value === model;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"aria-hidden\": \"true\",\n                className: \"pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dom_confetti__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    active: showConfetti,\n                    config: {\n                        elementCount: 200,\n                        spread: 90\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Phone__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        imgSrc: configuration.croppedImageUrl,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"bg-\".concat(tw))\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(DesignPreview, \"afVoOF5p981x2nuP0kU5CKUCRJM=\");\n_c = DesignPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DesignPreview);\nvar _c;\n$RefreshReg$(_c, \"DesignPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29uZmlndXJlL3ByZXZpZXcvRGVzaWduUHJldmlldy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV1QztBQUNOO0FBQzhCO0FBRW5CO0FBQ0Y7QUFFMUMsTUFBTU8sZ0JBQWdCO1FBQUMsRUFBRUMsYUFBYSxFQUFvQztRQU83RE47O0lBTlgsTUFBTSxDQUFDTyxjQUFjQyxnQkFBZ0IsR0FBR0wsK0NBQVFBLENBQUM7SUFDakRELGdEQUFTQSxDQUFDO1FBQ1JNLGdCQUFnQjtJQUNsQixHQUFHLEVBQUU7SUFFTCxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHSDtJQUNsQixNQUFNSSxNQUFLVixlQUFBQSxnRUFBTUEsQ0FBQ1csSUFBSSxDQUNwQixDQUFDQyxpQkFBbUJBLGVBQWVDLEtBQUssS0FBS0osb0JBRHBDVCxtQ0FBQUEsYUFFUlUsRUFBRTtJQUVMLE1BQU0sRUFBRUksT0FBT0MsVUFBVSxFQUFFLEdBQUdkLGdFQUFNQSxDQUFDZSxPQUFPLENBQUNMLElBQUksQ0FDL0M7WUFBQyxFQUFFRSxLQUFLLEVBQUU7ZUFBS0EsVUFBVUk7O0lBRzNCLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQ0NDLGVBQVk7Z0JBQ1pDLFdBQVU7MEJBRVYsNEVBQUNoQiwwREFBUUE7b0JBQ1BpQixRQUFRZDtvQkFDUmUsUUFBUTt3QkFBRUMsY0FBYzt3QkFBS0MsUUFBUTtvQkFBRzs7Ozs7Ozs7Ozs7MEJBSTVDLDhEQUFDTjtnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQUlFLFdBQVU7OEJBQ2IsNEVBQUN0Qix5REFBS0E7d0JBQ0oyQixRQUFRbkIsY0FBY29CLGVBQWU7d0JBQ3JDTixXQUFXckIsOENBQUVBLENBQUMsTUFBUyxPQUFIVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhDO0dBckNNTDtLQUFBQTtBQXVDTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbmZpZ3VyZS9wcmV2aWV3L0Rlc2lnblByZXZpZXcudHN4PzFjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBQaG9uZSBmcm9tIFwiQC9jb21wb25lbnRzL1Bob25lXCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgQ09MT1JTLCBNT0RFTFMgfSBmcm9tIFwiQC92YWxpZGF0b3JzL29wdGlvbi12YWxpZGF0b3JcIjtcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb25mZXR0aSBmcm9tIFwicmVhY3QtZG9tLWNvbmZldHRpXCI7XG5cbmNvbnN0IERlc2lnblByZXZpZXcgPSAoeyBjb25maWd1cmF0aW9uIH06IHsgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IFtzaG93Q29uZmV0dGksIHNldFNob3dDb25mZXR0aV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2hvd0NvbmZldHRpKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyBjb2xvciB9ID0gY29uZmlndXJhdGlvbjtcbiAgY29uc3QgdHcgPSBDT0xPUlMuZmluZChcbiAgICAoc3VwcG9ydGVkQ29sb3IpID0+IHN1cHBvcnRlZENvbG9yLnZhbHVlID09PSBjb2xvclxuICApPy50dztcblxuICBjb25zdCB7IGxhYmVsOiBtb2RlbExhYmVsIH0gPSBNT0RFTFMub3B0aW9ucy5maW5kKFxuICAgICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBtb2RlbFxuICApITtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgc2VsZWN0LW5vbmUgYWJzb2x1dGUgaW5zZXQtMCBvdmVyZmxvdy1oaWRkZW4gZmxleCBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxDb25mZXR0aVxuICAgICAgICAgIGFjdGl2ZT17c2hvd0NvbmZldHRpfVxuICAgICAgICAgIGNvbmZpZz17eyBlbGVtZW50Q291bnQ6IDIwMCwgc3ByZWFkOiA5MCB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjAgZ3JpZCBncmlkLWNvbHMtMSB0ZXh0LXNtIHNtOmdyaWQtY29scy0xMiBzbTpncmlkLXJvd3MtMSBzbTpnYXAteC02IG1kOmdhcC14LTggbGc6Z2FwLXgtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpjb2wtc3Bhbi00IG1kOmNvbC1zcGFuLTMgbWQ6cm93LXNwYW4tMiBtZDpyb3ctZW5kLTJcIj5cbiAgICAgICAgICA8UGhvbmVcbiAgICAgICAgICAgIGltZ1NyYz17Y29uZmlndXJhdGlvbi5jcm9wcGVkSW1hZ2VVcmwhfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihgYmctJHt0d31gKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVzaWduUHJldmlldztcbiJdLCJuYW1lcyI6WyJQaG9uZSIsImNuIiwiQ09MT1JTIiwiTU9ERUxTIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb25mZXR0aSIsIkRlc2lnblByZXZpZXciLCJjb25maWd1cmF0aW9uIiwic2hvd0NvbmZldHRpIiwic2V0U2hvd0NvbmZldHRpIiwiY29sb3IiLCJ0dyIsImZpbmQiLCJzdXBwb3J0ZWRDb2xvciIsInZhbHVlIiwibGFiZWwiLCJtb2RlbExhYmVsIiwib3B0aW9ucyIsIm1vZGVsIiwiZGl2IiwiYXJpYS1oaWRkZW4iLCJjbGFzc05hbWUiLCJhY3RpdmUiLCJjb25maWciLCJlbGVtZW50Q291bnQiLCJzcHJlYWQiLCJpbWdTcmMiLCJjcm9wcGVkSW1hZ2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/configure/preview/DesignPreview.tsx\n"));

/***/ })

});