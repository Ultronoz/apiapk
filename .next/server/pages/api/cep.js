"use strict";
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
exports.id = "pages/api/cep";
exports.ids = ["pages/api/cep"];
exports.modules = {

/***/ "correios-brasil":
/*!**********************************!*\
  !*** external "correios-brasil" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("correios-brasil");

/***/ }),

/***/ "(api)/./pages/api/cep.js":
/*!**************************!*\
  !*** ./pages/api/cep.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst { rastrearEncomendas  } = __webpack_require__(/*! correios-brasil */ \"correios-brasil\");\nconst { consultarCep , calcularPrecoPrazo  } = __webpack_require__(/*! correios-brasil */ \"correios-brasil\");\nfunction handler(req, res) {\n    function apiCep(cep) {\n        consultarCep(cep).then((response)=>{\n            return response;\n        }).then((data)=>{\n            res.json(data);\n        });\n    }\n    apiCep(req.query.cep);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2VwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUFDN0UsTUFBTSxFQUFFQSxrQkFBa0IsR0FBRSxHQUFHQyxtQkFBTyxDQUFDLHdDQUFpQixDQUFDO0FBQ3pELE1BQU0sRUFBRUMsWUFBWSxHQUFHQyxrQkFBa0IsR0FBRyxHQUFHRixtQkFBTyxDQUFDLHdDQUFpQixDQUFDO0FBRTFELFNBQVNHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsU0FBU0MsTUFBTSxDQUFDQyxHQUFHLEVBQUM7UUFDcEJOLFlBQVksQ0FBQ00sR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBRUMsQ0FBQUEsUUFBUSxHQUFJO1lBQ2xDLE9BQU9BLFFBQVE7U0FDaEIsQ0FBRSxDQUFDRCxJQUFJLENBQUNFLENBQUFBLElBQUksR0FBSTtZQUNqQkwsR0FBRyxDQUFDTSxJQUFJLENBQUNELElBQUksQ0FBQztTQUNmLENBQUM7S0FDRDtJQUNESixNQUFNLENBQUNGLEdBQUcsQ0FBQ1EsS0FBSyxDQUFDTCxHQUFHLENBQUM7Q0FDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHByZXNzby1yYXN0cmVpby8uL3BhZ2VzL2FwaS9jZXAuanM/ZmRjYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuY29uc3QgeyByYXN0cmVhckVuY29tZW5kYXMgfSA9IHJlcXVpcmUoJ2NvcnJlaW9zLWJyYXNpbCcpO1xuY29uc3QgeyBjb25zdWx0YXJDZXAsICBjYWxjdWxhclByZWNvUHJhem8gIH0gPSByZXF1aXJlKCdjb3JyZWlvcy1icmFzaWwnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBmdW5jdGlvbiBhcGlDZXAoY2VwKXtcbiAgY29uc3VsdGFyQ2VwKGNlcCkudGhlbigocmVzcG9uc2UgPT4ge1xuICAgIHJldHVybiByZXNwb25zZVxuICB9KSkudGhlbihkYXRhID0+IHtcbiAgcmVzLmpzb24oZGF0YSlcbn0pXG59XG5hcGlDZXAocmVxLnF1ZXJ5LmNlcClcbn1cbiJdLCJuYW1lcyI6WyJyYXN0cmVhckVuY29tZW5kYXMiLCJyZXF1aXJlIiwiY29uc3VsdGFyQ2VwIiwiY2FsY3VsYXJQcmVjb1ByYXpvIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFwaUNlcCIsImNlcCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJqc29uIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/cep.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cep.js"));
module.exports = __webpack_exports__;

})();