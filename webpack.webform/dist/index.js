/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajaxData__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_man_png__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_man_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_man_png__);




$(function () {

    var $app = $('#app');

    var iteratorList = '\n    <table class ="table">\n            <tr class="table-title">\n                <th>id</td>\n                <th>name</td>\n                <th>gender</td>\n            </tr>\n    ';

    __WEBPACK_IMPORTED_MODULE_1__ajaxData__["a" /* default */].list.forEach(function (item) {
        iteratorList += '\n         <tr>\n                <td>' + item.id + '</td>\n                <td>' + item.name + '</td>\n                <td>' + getGender(item.gender) + '</td>\n            </tr>\n        ';
    });

    //多增加新的方法，來決定要回傳哪張圖片，這邊也可以定義import的方式，manPng像是我上面定義的變數
    function getGender(gender) {
        if (gender === 'body') {
            return '<img src="' + __WEBPACK_IMPORTED_MODULE_2__img_man_png___default.a + '"/>';
        }
        return '<img src="' + __webpack_require__(5) + '"/>';
    }

    iteratorList += '</table>';

    $app.html(iteratorList);
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    list: [{ id: 1, name: 'anson', gender: 'body' }, { id: 2, name: 'coco', gender: 'girl' }]
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA3ZJREFUSImllc9PnFUUhp9z5pspDMyAULC0SC3MtIEpWDeiMda0Jq0lNGm6mtqmCxPjH6BBl27rUje6bLBpqV1ZHENa0bgwpjGhAakpoAxCacOPAYSZgTLfvS6gdIRhpuK7u/ec+5z33u879wp5FIoNNAhErXBMMBFjtHItYmZE9Z5Ar6h7dejkkdHtGJJrMtzdX4/yKdaeRTVnzoaMsajeUDId90+9HC9YIPztwEWUL4DivOCtSllr3x9pa/kqe1KzB6FY/8col3cAB/CLSGc4NvBh9uTGDtadX94BeIustRdG2lqubBQId/fX45Hf2JnzLTKGpGs1Em+PjDkAeLiUD+5NJ3ml+3Mqp8cYLatlYX8jE6+exjjenPmqlAiZS0BUQrGBBrFmON/fcubrT6hIJ1hJLfOobC/+gJ+J4D76jp7Ptw2rauodgWg+uC+9SCQAh1tbAVicnQLgl78T3HUzWI+Te6GquFaiaoVj29uAivmHBEtLcI0lYywAKxlDmReCybl8SxHkuAomki/pooyzZ08V8ZlFphZSzKVXic+ladjlEp29k7eAEZr0afvn1u/+Gnw+L3XlxZiFBLKyTKiiGJ9a7gdq8xYAU6UFMrgZbGLWOtz6pocH45NMTyf4/vbP/Foe5sfdLxVajoKZKZTUU9qA4/WSWkqytJgkEAzwU1VLQTjotIrqvUJpDyihNrSfdDLFn/FJipqamafoGdybQUegF3hrc/AFX5rXn9/Hu8XXeW7XCfr+qqAy2EwymcJrF7l9+jUeTnxGZ/osP0zNM/54a59aS68c7Ll7wGbkj+xeqCs23HSu4ztUjR2aQhtPkJh4zOTgHaobm6moOYjjf4QZuIXs3c3qwgpvJ9qYXM5uJ2NWXadeh04eGUX1Rnbld2oy+MpA/a1IEHDnKQ8Mc/homOq6MjwzXYgWIQEQfz1OoJRzNav/cm+MdMXbI2O6dlaZDiD1JPhGpReDkrEWg+IiGNfFXU7grs5jTOZpzIK1wpuV3iy4WcIjH0HWdR2K9V8Qkc6CX+5ZZDk33NZ8bc38utZfoo7/yxbsB0/ga+NNCsX6z1srX6pS8l/AxpglFX0vGw6bnkyAkbaWK67ViMV0YdZvt0JoY69anyeyGZ5zB9k69F3fi671RAU5boQmMFXrvqYVM2gtvRnjXIu3R8a2Y/wDHE5cJ74gUAYAAAAASUVORK5CYII="

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA9NJREFUSImllX1o1HUcx1/fz/12a3Pe1DlzUsp0N8M9YxakFUVRWwYOSnvwjyIk6OGvSvzPULDWH0FREBQRuApHpsXcIaboprXckLzNzd2ubZpr7gk3N3budvf99Mfacba7K+0NP/j9Pg+vz8MPvl9DChUe/S1fret5hUcNtshayZn12BEj0mHghJHot4EnynuTMUwi4+pj7SslYmuM1W2IJIyJyVpF5DshsrOrsqLvXwsU+PzPqtUvRSQrJXi+plT11WBVaW28UW6CN7S9ZjB1twEHyDTG7Pf62t6JN8Ym8Db4qzHm+9sAz5Oqbg9WlX4dK3CPryMvaqOdCNnJkooDTaztbSXoWUl/fhkjywtS1ZgSIkVdlRV9DkCUmb2IJIW/WL+Pu6aGAcjqaKG8+SAX1m+m9aEXkqVkWnVqgG1mVX37csfoHyI4iSI3th5iU09j7Ptq/2Ds/actO+nPL09cwlo1jq4Rt8tuTQYHKOo/jzstHUccHMeNy+VgjCEtzU1+oDlZGogYtfKcAzyWPAqyPblUb31ltilVrl/uYTI0hWdBFp+ePpUqFdQ8IqClyfzpvZ3UNncyPDFJV/8AV8fGIcPDcNiwLG8l1fdtTMm3hnWOhTxJEhBdtJQ7F83++7JC76xxfJzlS5agqrRf7oPikhQVWCZC8v1HFueyzhOmpzcIqtiBAezoKABt587wa/BiyglErHWs5ZoIOQkDohHyXBH8587w++Ao9Y2NoMq+l1/i3NmTeELTiCrWJDuuZNgU+M6fNsi8ZT549gAVvS1kiGVN+QOUFW3EvTiHiSuX0MlJfrnQTGdLE0N5XjrWV3HJe3+CFelRAXMyUe2uVfcyeEMpfOZ1Hn5jN5kLs0kPz7BI3GQtzqV67yds2LGLibAytGx1wv5VzAlB5Zt5g03fQA/V0vjnND8cP83Q0BDBG+GYvy8tjYGBAY77AwzOuMk68BkmPP2P7q26iNQZAK/P/yOYp+d8ma2NZB+ri8Xm5OSw593dFIZCREZHCa5YQVP7Rco2b2GBy/Dz4YN8fuU6UxWb4tqnrruqZJsARF2ut4DQnC+jowV1ObFnZGycvTUf0KfQl7mAPe/XMDk+hhsovkOIjl8j40JrfP8h44rugrjjuqDBv90Ysz/hMm9RBnYEKku+gLgLJ1hVWovRN/8vXJX35uB/F7tZXp//KQtfCWbprYCtJWKEt4NPFn+MMTpnn3dKdFeWHkk3slaVD4Gp/8g/JWo2BCtLPoqHJ5wgXmsPdy6MpEe2iNrHQSpQ7raQKcKktdptjGkSOBCoKmlJxvgLDiJ5ko9BAHQAAAAASUVORK5CYII="

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);