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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom-confetti */ \"(app-pages-browser)/./node_modules/.pnpm/react-dom-confetti@0.2.0_react@18.3.1/node_modules/react-dom-confetti/lib/confetti.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst DesignPreview = (param)=>{\n    let { configuration } = param;\n    _s();\n    const [showConfetti, setShowConfetti] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setShowConfetti(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"aria-hidden\": \"true\",\n                className: \"pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dom_confetti__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    active: showConfetti,\n                    config: {\n                        elementCount: 200,\n                        spread: 90\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Phone, {\n                        imgSrc: configuration.croppedImageUrl\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(DesignPreview, \"afVoOF5p981x2nuP0kU5CKUCRJM=\");\n_c = DesignPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DesignPreview);\nvar _c;\n$RefreshReg$(_c, \"DesignPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29uZmlndXJlL3ByZXZpZXcvRGVzaWduUHJldmlldy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUc0QztBQUNGO0FBRTFDLE1BQU1HLGdCQUFnQjtRQUFDLEVBQUVDLGFBQWEsRUFBb0M7O0lBQ3hFLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pERCxnREFBU0EsQ0FBQztRQUNSTSxnQkFBZ0I7SUFDbEIsR0FBRyxFQUFFO0lBQ0wscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFDQ0MsZUFBWTtnQkFDWkMsV0FBVTswQkFFViw0RUFBQ1AsMERBQVFBO29CQUNQUSxRQUFRTDtvQkFDUk0sUUFBUTt3QkFBRUMsY0FBYzt3QkFBS0MsUUFBUTtvQkFBRzs7Ozs7Ozs7Ozs7MEJBSTVDLDhEQUFDTjtnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQUlFLFdBQVU7OEJBQ2IsNEVBQUNLO3dCQUFNQyxRQUFRWCxjQUFjWSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEQ7R0F4Qk1iO0tBQUFBO0FBMEJOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29uZmlndXJlL3ByZXZpZXcvRGVzaWduUHJldmlldy50c3g/MWNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbmZldHRpIGZyb20gXCJyZWFjdC1kb20tY29uZmV0dGlcIjtcblxuY29uc3QgRGVzaWduUHJldmlldyA9ICh7IGNvbmZpZ3VyYXRpb24gfTogeyBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uIH0pID0+IHtcbiAgY29uc3QgW3Nob3dDb25mZXR0aSwgc2V0U2hvd0NvbmZldHRpXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTaG93Q29uZmV0dGkodHJ1ZSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIHNlbGVjdC1ub25lIGFic29sdXRlIGluc2V0LTAgb3ZlcmZsb3ctaGlkZGVuIGZsZXgganVzdGlmeS1jZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8Q29uZmV0dGlcbiAgICAgICAgICBhY3RpdmU9e3Nob3dDb25mZXR0aX1cbiAgICAgICAgICBjb25maWc9e3sgZWxlbWVudENvdW50OiAyMDAsIHNwcmVhZDogOTAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwIGdyaWQgZ3JpZC1jb2xzLTEgdGV4dC1zbSBzbTpncmlkLWNvbHMtMTIgc206Z3JpZC1yb3dzLTEgc206Z2FwLXgtNiBtZDpnYXAteC04IGxnOmdhcC14LTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Y29sLXNwYW4tNCBtZDpjb2wtc3Bhbi0zIG1kOnJvdy1zcGFuLTIgbWQ6cm93LWVuZC0yXCI+XG4gICAgICAgICAgPFBob25lIGltZ1NyYz17Y29uZmlndXJhdGlvbi5jcm9wcGVkSW1hZ2VVcmx9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNpZ25QcmV2aWV3O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29uZmV0dGkiLCJEZXNpZ25QcmV2aWV3IiwiY29uZmlndXJhdGlvbiIsInNob3dDb25mZXR0aSIsInNldFNob3dDb25mZXR0aSIsImRpdiIsImFyaWEtaGlkZGVuIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwiY29uZmlnIiwiZWxlbWVudENvdW50Iiwic3ByZWFkIiwiUGhvbmUiLCJpbWdTcmMiLCJjcm9wcGVkSW1hZ2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/configure/preview/DesignPreview.tsx\n"));

/***/ })

});