/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_initial_js__WEBPACK_IMPORTED_MODULE_0__.default.initialize()
const p = document.createElement('p');
document.body.appendChild(p)
const doSMTHIG = () => {
    fetch('http://worldtimeapi.org/api/timezone/Europe/Belgrade')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        p.textContent = data.utc_datetime
        
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

doSMTHIG();

// setInterval(doSMTHIG, 1)

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const setup = (function () {
    const nav = document.createElement('nav')
    const container = document.querySelector('#content')
    const menu = [
        {
            id: "home",
            text: "Home"
        },
        {
            id: "menu",
            text: "Menu"
        },
        {
            id: "contact-us",
            text: "Contact Us"
        }]

    const addheader = () => {
        const header = document.createElement('header');
        const headerH1 = document.createElement('h1');
        headerH1.textContent = "Restaurant Page";
        header.appendChild(headerH1);
        container.appendChild(header);
    }

    const addMenuToNav = () => {
        nav.id = "nav-bar"
        for (let i = 0; i<menu.length; i++) {
            const tab = document.createElement('div');
            tab.id = menu[i].id;
            tab.textContent = menu[i].text;
            tab.class = "tab";
            nav.appendChild(tab)
        }
        container.appendChild(nav)
    }

    const addInfoDiv = () => {
        const infoDiv = document.createElement('div')
        infoDiv.textContent = "infodiv"
        container.appendChild(infoDiv)
    }

    const addFooter = () => {
        const footer = document.createElement('footer');
        const footerP = document.createElement('p');
        footerP.textContent = "Made by Viktor";
        footer.appendChild(footerP);
        container.appendChild(footer);
    }


    const initialize = () => {
        addheader()
        addMenuToNav()
        addInfoDiv()
        addFooter()
    }

    return {
        initialize
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setup);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;