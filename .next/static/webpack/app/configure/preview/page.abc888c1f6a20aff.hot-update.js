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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Phone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Phone */ \"(app-pages-browser)/./src/components/Phone.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _validators_option_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/validators/option-validator */ \"(app-pages-browser)/./src/validators/option-validator.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_confetti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom-confetti */ \"(app-pages-browser)/./node_modules/.pnpm/react-dom-confetti@0.2.0_react@18.3.1/node_modules/react-dom-confetti/lib/confetti.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DesignPreview = (param)=>{\n    let { configuration } = param;\n    var _COLORS_find;\n    _s();\n    const [showConfetti, setShowConfetti] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setShowConfetti(true);\n    }, []);\n    const { color } = configuration;\n    const tw = (_COLORS_find = _validators_option_validator__WEBPACK_IMPORTED_MODULE_3__.COLORS.find((supportedColor)=>supportedColor.value === color)) === null || _COLORS_find === void 0 ? void 0 : _COLORS_find.tw;\n    const model = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_validators_option_validator__WEBPACK_IMPORTED_MODULE_3__.MODELS, {\n        className: \"find\"\n    }, void 0, false, {\n        fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n        lineNumber: 21,\n        columnNumber: 17\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"aria-hidden\": \"true\",\n                className: \"pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dom_confetti__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    active: showConfetti,\n                    config: {\n                        elementCount: 200,\n                        spread: 90\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-20 grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Phone__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        imgSrc: configuration.croppedImageUrl,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"bg-\".concat(tw))\n                    }, void 0, false, {\n                        fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dawiddebosz/Documents/casecobra/src/app/configure/preview/DesignPreview.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(DesignPreview, \"afVoOF5p981x2nuP0kU5CKUCRJM=\");\n_c = DesignPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DesignPreview);\nvar _c;\n$RefreshReg$(_c, \"DesignPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29uZmlndXJlL3ByZXZpZXcvRGVzaWduUHJldmlldy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV1QztBQUNOO0FBQzhCO0FBRW5CO0FBQ0Y7QUFFMUMsTUFBTU8sZ0JBQWdCO1FBQUMsRUFBRUMsYUFBYSxFQUFvQztRQU83RE47O0lBTlgsTUFBTSxDQUFDTyxjQUFjQyxnQkFBZ0IsR0FBR0wsK0NBQVFBLENBQUM7SUFDakRELGdEQUFTQSxDQUFDO1FBQ1JNLGdCQUFnQjtJQUNsQixHQUFHLEVBQUU7SUFFTCxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHSDtJQUNsQixNQUFNSSxNQUFLVixlQUFBQSxnRUFBTUEsQ0FBQ1csSUFBSSxDQUNwQixDQUFDQyxpQkFBbUJBLGVBQWVDLEtBQUssS0FBS0osb0JBRHBDVCxtQ0FBQUEsYUFFUlUsRUFBRTtJQUVMLE1BQU1JLHNCQUFRLDhEQUFDYixnRUFBTUE7UUFBQ2MsV0FBVTs7Ozs7O0lBRWhDLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQ0NDLGVBQVk7Z0JBQ1pGLFdBQVU7MEJBRVYsNEVBQUNYLDBEQUFRQTtvQkFDUGMsUUFBUVg7b0JBQ1JZLFFBQVE7d0JBQUVDLGNBQWM7d0JBQUtDLFFBQVE7b0JBQUc7Ozs7Ozs7Ozs7OzBCQUk1Qyw4REFBQ0w7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDakIseURBQUtBO3dCQUNKd0IsUUFBUWhCLGNBQWNpQixlQUFlO3dCQUNyQ1IsV0FBV2hCLDhDQUFFQSxDQUFDLE1BQVMsT0FBSFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQztHQW5DTUw7S0FBQUE7QUFxQ04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb25maWd1cmUvcHJldmlldy9EZXNpZ25QcmV2aWV3LnRzeD8xY2VlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUGhvbmUgZnJvbSBcIkAvY29tcG9uZW50cy9QaG9uZVwiO1xuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IENPTE9SUywgTU9ERUxTIH0gZnJvbSBcIkAvdmFsaWRhdG9ycy9vcHRpb24tdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29uZmV0dGkgZnJvbSBcInJlYWN0LWRvbS1jb25mZXR0aVwiO1xuXG5jb25zdCBEZXNpZ25QcmV2aWV3ID0gKHsgY29uZmlndXJhdGlvbiB9OiB7IGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24gfSkgPT4ge1xuICBjb25zdCBbc2hvd0NvbmZldHRpLCBzZXRTaG93Q29uZmV0dGldID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNob3dDb25mZXR0aSh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHsgY29sb3IgfSA9IGNvbmZpZ3VyYXRpb247XG4gIGNvbnN0IHR3ID0gQ09MT1JTLmZpbmQoXG4gICAgKHN1cHBvcnRlZENvbG9yKSA9PiBzdXBwb3J0ZWRDb2xvci52YWx1ZSA9PT0gY29sb3JcbiAgKT8udHc7XG5cbiAgY29uc3QgbW9kZWwgPSA8TU9ERUxTIGNsYXNzTmFtZT1cImZpbmRcIj48L01PREVMUz47XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIHNlbGVjdC1ub25lIGFic29sdXRlIGluc2V0LTAgb3ZlcmZsb3ctaGlkZGVuIGZsZXgganVzdGlmeS1jZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8Q29uZmV0dGlcbiAgICAgICAgICBhY3RpdmU9e3Nob3dDb25mZXR0aX1cbiAgICAgICAgICBjb25maWc9e3sgZWxlbWVudENvdW50OiAyMDAsIHNwcmVhZDogOTAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwIGdyaWQgZ3JpZC1jb2xzLTEgdGV4dC1zbSBzbTpncmlkLWNvbHMtMTIgc206Z3JpZC1yb3dzLTEgc206Z2FwLXgtNiBtZDpnYXAteC04IGxnOmdhcC14LTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Y29sLXNwYW4tNCBtZDpjb2wtc3Bhbi0zIG1kOnJvdy1zcGFuLTIgbWQ6cm93LWVuZC0yXCI+XG4gICAgICAgICAgPFBob25lXG4gICAgICAgICAgICBpbWdTcmM9e2NvbmZpZ3VyYXRpb24uY3JvcHBlZEltYWdlVXJsIX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oYGJnLSR7dHd9YCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc2lnblByZXZpZXc7XG4iXSwibmFtZXMiOlsiUGhvbmUiLCJjbiIsIkNPTE9SUyIsIk1PREVMUyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29uZmV0dGkiLCJEZXNpZ25QcmV2aWV3IiwiY29uZmlndXJhdGlvbiIsInNob3dDb25mZXR0aSIsInNldFNob3dDb25mZXR0aSIsImNvbG9yIiwidHciLCJmaW5kIiwic3VwcG9ydGVkQ29sb3IiLCJ2YWx1ZSIsIm1vZGVsIiwiY2xhc3NOYW1lIiwiZGl2IiwiYXJpYS1oaWRkZW4iLCJhY3RpdmUiLCJjb25maWciLCJlbGVtZW50Q291bnQiLCJzcHJlYWQiLCJpbWdTcmMiLCJjcm9wcGVkSW1hZ2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/configure/preview/DesignPreview.tsx\n"));

/***/ })

});