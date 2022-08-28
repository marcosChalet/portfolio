/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio-v2-webpack/./src/assets/css/style.css?");

/***/ }),

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/assets/css/style.css\");\n\n\n\n//# sourceURL=webpack://portfolio-v2-webpack/./src/assets/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ \"./src/assets/index.js\");\n\nconst progresso = document.getElementById('progresso')\nconst botoes = document.querySelectorAll('.btn-item')\nconst camposDescricao = document.querySelectorAll('.descricao')\n\nlet carreiraSelecionada = 0\nconst qtdCarreiras = botoes.length - 1\n\n// Mover ao clicar\nbotoes.forEach((botao, indice) => {\n   botao.addEventListener('click', () => {\n      mover(indice)\n   })\n})\n\n// Mover automaticamente\nfunction apresentacaoAuto() {\n   mover(carreiraSelecionada)\n   setTimeout(() => apresentacaoAuto(), 4000)\n}\napresentacaoAuto()\n\n\n\nfunction selecionaProxCarreira(proxIndice) {\n   if (proxIndice > qtdCarreiras) {\n      carreiraSelecionada = 0\n   }else {\n      carreiraSelecionada = proxIndice\n   }\n}\n\nfunction mover(indice) {\n   addSelecao(indice)\n   removeDescricao()\n   addDescricaoSelecionada(indice)\n   atualizaProgresso(indice)\n   selecionaProxCarreira(indice+1)\n}\n\nfunction addSelecao(indice) {\n   botoes.forEach((btn, curIndice) => {\n      if (curIndice <= indice) {\n         btn.classList.add('selecionado')\n      }else {\n         btn.classList.remove('selecionado')\n      }\n   })\n}\n\nfunction removeDescricao() {\n   camposDescricao.forEach(descricao => {\n      descricao.classList.remove('ativo')\n   })\n}\n\nfunction addDescricaoSelecionada(indiceDescricao) {\n   camposDescricao[indiceDescricao].classList.add('ativo')\n}\n\nfunction atualizaProgresso(indice) {\n   progresso.style.width = (indice / (botoes.length - 1) * 100 + '%')\n}\n\n\n//# sourceURL=webpack://portfolio-v2-webpack/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;