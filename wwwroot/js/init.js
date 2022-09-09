/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Resources/Scripts/schedule.ts":
/*!***************************************!*\
  !*** ./Resources/Scripts/schedule.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initSchedule = void 0;
function initSchedule() {
    const navButtons = document.querySelectorAll('.nav__button');
    const scheduleDays = document.querySelectorAll('.schedule');
    for (let i = 0; i < scheduleDays.length; i++) {
        const button = navButtons[i];
        const day = scheduleDays[i];
        button.addEventListener('click', () => {
            scheduleDays.forEach(day => {
                day.classList.remove('schedule--active');
            });
            navButtons.forEach(button => {
                button.classList.remove('nav__button--active');
            });
            button.classList.add('nav__button--active');
            day.classList.add('schedule--active');
        });
    }
}
exports.initSchedule = initSchedule;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************************!*\
  !*** ./Resources/Scripts/init.ts ***!
  \***********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const schedule_1 = __webpack_require__(/*! ./schedule */ "./Resources/Scripts/schedule.ts");
document.addEventListener("DOMContentLoaded", () => {
    (0, schedule_1.initSchedule)();
    // initMap()
});

})();

/******/ })()
;
//# sourceMappingURL=init.js.map