/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n// frontend/pages/_app.js\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Token aus dem lokalen Speicher abrufen\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            setUser({\n                token\n            });\n        } else {\n            setUser(null);\n        }\n    }, []);\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"token\");\n        setUser(null);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogout,\n                        children: \"Abmelden\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\pages\\\\_app.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n            }, void 0, false, {\n                fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                user: user,\n                setUser: setUser\n            }, void 0, false, {\n                fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Schule\\\\IT\\\\Ozelot.chat\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlCQUF5Qjs7QUFDTTtBQUNhO0FBQ0o7QUFFeEMsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDUztJQUVqQ1IsZ0RBQVNBLENBQUM7UUFDUix5Q0FBeUM7UUFDekMsTUFBTVMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQ25DLElBQUlGLE9BQU87WUFDVEYsUUFBUTtnQkFBRUU7WUFBTTtRQUNsQixPQUFPO1lBQ0xGLFFBQVE7UUFDVjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1LLGVBQWU7UUFDbkJGLGFBQWFHLFVBQVUsQ0FBQztRQUN4Qk4sUUFBUTtRQUNSRixPQUFPUyxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUNFVixxQkFDQzs4QkFDRSw0RUFBQ1c7d0JBQU9DLFNBQVNOO2tDQUFjOzs7Ozs7a0RBR2pDOzs7Ozs7MEJBR0osOERBQUNUO2dCQUFXLEdBQUdDLFNBQVM7Z0JBQUVFLE1BQU1BO2dCQUFNQyxTQUFTQTs7Ozs7Ozs7Ozs7O0FBR3JEO0FBRUEsaUVBQWVMLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcm9udGVuZC9wYWdlcy9fYXBwLmpzXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFRva2VuIGF1cyBkZW0gbG9rYWxlbiBTcGVpY2hlciBhYnJ1ZmVuXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHNldFVzZXIoeyB0b2tlbiB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+QWJtZWxkZW48L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IHVzZXI9e3VzZXJ9IHNldFVzZXI9e3NldFVzZXJ9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsInVuZGVmaW5lZCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiZGl2IiwibmF2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();