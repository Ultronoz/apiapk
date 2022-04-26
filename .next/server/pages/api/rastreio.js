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
exports.id = "pages/api/rastreio";
exports.ids = ["pages/api/rastreio"];
exports.modules = {

/***/ "correios-brasil":
/*!**********************************!*\
  !*** external "correios-brasil" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("correios-brasil");

/***/ }),

/***/ "(api)/./pages/api/rastreio.js":
/*!*******************************!*\
  !*** ./pages/api/rastreio.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst { rastrearEncomendas  } = __webpack_require__(/*! correios-brasil */ \"correios-brasil\");\nconst { consultarCep , calcularPrecoPrazo  } = __webpack_require__(/*! correios-brasil */ \"correios-brasil\");\nfunction handler(req, res) {\n    function apiRastreio(rast) {\n        let codRastreio = [\n            \"${rast}\"\n        ]; // array de códigos de rastreios\n        rastrearEncomendas(codRastreio).then((response)=>{\n            console.log(response);\n        }).then((data)=>{\n            res.json(data);\n        });\n    }\n    apiRastreio(req.query.rast);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmFzdHJlaW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sRUFBRUEsa0JBQWtCLEdBQUUsR0FBR0MsbUJBQU8sQ0FBQyx3Q0FBaUIsQ0FBQztBQUN6RCxNQUFNLEVBQUVDLFlBQVksR0FBR0Msa0JBQWtCLEdBQUcsR0FBR0YsbUJBQU8sQ0FBQyx3Q0FBaUIsQ0FBQztBQUUxRCxTQUFTRyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLFNBQVNDLFdBQVcsQ0FBQ0MsSUFBSSxFQUFDO1FBQzFCLElBQUlDLFdBQVcsR0FBRztZQUFDLFNBQVM7U0FBQyxFQUFFO1FBRS9CVCxrQkFBa0IsQ0FBQ1MsV0FBVyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDQyxRQUFRLEdBQUs7WUFDbkRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUMsQ0FBQztTQUV2QixDQUFDLENBQUNELElBQUksQ0FBQ0ksQ0FBQUEsSUFBSSxHQUFJO1lBQ2RSLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDRCxJQUFJLENBQUM7U0FDZixDQUFDO0tBQ0Q7SUFDRFAsV0FBVyxDQUFDRixHQUFHLENBQUNXLEtBQUssQ0FBQ1IsSUFBSSxDQUFDO0NBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwcmVzc28tcmFzdHJlaW8vLi9wYWdlcy9hcGkvcmFzdHJlaW8uanM/MWJhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHJhc3RyZWFyRW5jb21lbmRhcyB9ID0gcmVxdWlyZSgnY29ycmVpb3MtYnJhc2lsJyk7XHJcbmNvbnN0IHsgY29uc3VsdGFyQ2VwLCAgY2FsY3VsYXJQcmVjb1ByYXpvICB9ID0gcmVxdWlyZSgnY29ycmVpb3MtYnJhc2lsJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgZnVuY3Rpb24gYXBpUmFzdHJlaW8ocmFzdCl7XHJcbiAgbGV0IGNvZFJhc3RyZWlvID0gWycke3Jhc3R9J107IC8vIGFycmF5IGRlIGPDs2RpZ29zIGRlIHJhc3RyZWlvc1xyXG5cclxuICByYXN0cmVhckVuY29tZW5kYXMoY29kUmFzdHJlaW8pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxufSkudGhlbihkYXRhID0+IHtcclxuICByZXMuanNvbihkYXRhKVxyXG59KVxyXG59XHJcbmFwaVJhc3RyZWlvKHJlcS5xdWVyeS5yYXN0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJyYXN0cmVhckVuY29tZW5kYXMiLCJyZXF1aXJlIiwiY29uc3VsdGFyQ2VwIiwiY2FsY3VsYXJQcmVjb1ByYXpvIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFwaVJhc3RyZWlvIiwicmFzdCIsImNvZFJhc3RyZWlvIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJqc29uIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/rastreio.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/rastreio.js"));
module.exports = __webpack_exports__;

})();