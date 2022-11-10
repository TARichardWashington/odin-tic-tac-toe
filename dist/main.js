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

/***/ "./gameboard.js":
/*!**********************!*\
  !*** ./gameboard.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* \r\n * Gameboard - module singleton\r\n * \r\n * CheckPosition()\r\n * player1Move()\r\n * player2Move()\r\n * hasSomeoneOne()\r\n * resetBoard()\r\n */\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function gameBoard() {\n  var player1 = {\n    symbol: 'x'\n  };\n  var player2 = {\n    symbol: 'o'\n  };\n  var finished = false;\n  var board = [[null, null, null], [null, null, null], [null, null, null]];\n  return {\n    checkPosition: function checkPosition(x, y) {\n      return board[y][x] == null;\n    },\n    player1Move: function player1Move(x, y) {\n      if (this.checkPosition(x, y) && finished === false) {\n        board[y][x] = player1.symbol;\n        return true;\n      } else {\n        return false;\n      }\n    },\n    player2Move: function player2Move(x, y) {\n      if (this.checkPosition(x, y) && finished === false) {\n        board[y][x] = player2.symbol;\n        return true;\n      } else {\n        return false;\n      }\n    },\n    display: function display(domElement) {\n      if (domElement && !domElement.hasChildNodes()) {\n        for (var x = 0; x < 3; x++) {\n          for (var y = 0; y < 3; y++) {\n            var cell = document.createElement('div');\n            cell.setAttribute('class', 'cell');\n            cell.setAttribute('data-x', x);\n            cell.setAttribute('data-y', y);\n            domElement.append(cell);\n            cell.innerText = board[y][x] ? board[y][x] : '-';\n          }\n        }\n      } else {\n        var cells = domElement.childNodes;\n        cells.forEach(function (cell) {\n          var x = cell.dataset.x;\n          var y = cell.dataset.y;\n          cell.innerText = board[y][x] ? board[y][x] : '-';\n        });\n      }\n    },\n    hasSomeoneWon: function hasSomeoneWon() {\n      var whoWon = false;\n\n      // Check a winner in the horizontal rows\n      board.forEach(function (row) {\n        if (row[0] != null && row[1] != null && row[2] != null) {\n          if (row[0] == row[1] && row[0] == row[2]) {\n            whoWon = row[0];\n          }\n        }\n      });\n\n      //Check a winner in the virtical columns\n      var col1 = false;\n      var col2 = false;\n      var col3 = false;\n      board.forEach(function (row, index) {\n        if (index === 0) {\n          if (row[0] != null) {\n            col1 = row[0];\n          }\n        }\n        if (row[0] != col1 || row[0] == false) {\n          col1 = false;\n        }\n        if (index === 0) {\n          if (row[1] != null) {\n            col2 = row[1];\n          }\n        }\n        if (row[1] != col2 || row[1] == false) {\n          col2 = false;\n        }\n        if (index === 0) {\n          if (row[2] != null) {\n            col3 = row[2];\n          }\n        }\n        if (row[2] != col3 || row[2] == false) {\n          col3 = false;\n        }\n      });\n      if (col1 != false) {\n        whoWon = col1;\n      }\n      if (col2 != false) {\n        whoWon = col2;\n      }\n      if (col3 != false) {\n        whoWon = col3;\n      }\n\n      // Check a winner on the diagonals\n      if (board[0][0] != null && board[1][1] != null && board[2][2] != null) {\n        if (board[0][0] == board[1][1] && board[0][0] == board[2][2]) {\n          whoWon = board[0][0];\n        }\n      }\n      if (board[0][2] != null && board[1][1] != null && board[2][0] != null) {\n        if (board[0][2] == board[1][1] && board[0][2] == board[2][0]) {\n          whoWon = board[0][2];\n        }\n      }\n      if (whoWon) {\n        finished = true;\n      }\n      return whoWon;\n    },\n    resetBoard: function resetBoard() {\n      for (var i = 0; i < board.length; i++) {\n        for (var n = 0; n < board[i].length; n++) {\n          board[i][n] = null;\n        }\n      }\n    }\n  };\n})());\nfunction simulator(whoGoesFirst) {\n  var count = 9;\n  var turn = whoGoesFirst;\n  while (!gameboard.hasSomeoneWon() && count != 0) {\n    while (true) {\n      var moveX = randomIntFromInterval(0, 2);\n      var moveY = randomIntFromInterval(0, 2);\n      if (turn === 1) {\n        if (gameboard.player2Move(moveX, moveY)) {\n          console.log('Player 1 moved ' + moveX + moveY);\n          turn = 0;\n          break;\n        }\n      } else {\n        if (gameboard.player1Move(moveX, moveY)) {\n          console.log('Player 2 moved ' + moveX + moveY);\n          turn = 1;\n          break;\n        }\n      }\n    }\n    count--;\n    console.log('Turns left ' + count);\n  }\n  function randomIntFromInterval(min, max) {\n    // min and max included \n    return Math.floor(Math.random() * (max - min + 1) + min);\n  }\n  var winner = gameboard.hasSomeoneWon();\n  console.log(winner ? 'Player ' + winner + ' won!' : 'Draw');\n}\n;\n\n//# sourceURL=webpack:///./gameboard.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./gameboard.js\");\n\n\n/* Random game simulator - function\r\n * \r\n * \r\n * \r\n */\n\n;\n;\nfunction simulator(whoGoesFirst) {\n  var count = 9;\n  var turn = whoGoesFirst;\n  while (!_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasSomeoneWon() && count != 0) {\n    while (true) {\n      var moveX = randomIntFromInterval(0, 2);\n      var moveY = randomIntFromInterval(0, 2);\n      if (turn === 1) {\n        if (_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2Move(moveX, moveY)) {\n          console.log('Player 1 moved ' + moveX + moveY);\n          turn = 0;\n          break;\n        }\n      } else {\n        if (_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1Move(moveX, moveY)) {\n          console.log('Player 2 moved ' + moveX + moveY);\n          turn = 1;\n          break;\n        }\n      }\n    }\n    count--;\n    console.log('Turns left ' + count);\n  }\n  function randomIntFromInterval(min, max) {\n    // min and max included \n    return Math.floor(Math.random() * (max - min + 1) + min);\n  }\n  var winner = _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasSomeoneWon();\n  console.log(winner ? 'Player ' + winner + ' won!' : 'Draw');\n}\n;\n\n//simulator(1);\n\nvar domBoard = document.querySelector('#board');\n_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].display(domBoard);\nvar cells = document.querySelectorAll('.cell');\nvar winner = document.querySelector('#winner');\nvar playerTurn = 1;\ncells.forEach(function (cell) {\n  cell.addEventListener('click', function () {\n    console.log('Cell ' + this.dataset.x + this.dataset.y + ' chosen');\n    if (playerTurn === 1) {\n      playerTurn = 2;\n      _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player1Move(this.dataset.x, this.dataset.y);\n    } else {\n      _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player2Move(this.dataset.x, this.dataset.y);\n      playerTurn = 1;\n    }\n    _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].display(domBoard);\n    var hasWinner = _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasSomeoneWon();\n    if (hasWinner) {\n      winner.textContent = hasWinner + ' is the winner!';\n    }\n  });\n});\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;