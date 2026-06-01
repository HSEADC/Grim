/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/tests/Q_FD1.webp":
/*!*************************************!*\
  !*** ./src/images/tests/Q_FD1.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/42ebddda105661102f1c.webp";

/***/ }),

/***/ "./src/images/tests/Q_FD2.webp":
/*!*************************************!*\
  !*** ./src/images/tests/Q_FD2.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/189a4a568fbfbcb28cee.webp";

/***/ }),

/***/ "./src/stylesheets/test1.css":
/*!***********************************!*\
  !*** ./src/stylesheets/test1.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************************!*\
  !*** ./src/javascripts/test3final-destination.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_test1_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/test1.css */ "./src/stylesheets/test1.css");
/* harmony import */ var _images_tests_Q_FD1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/tests/Q_FD1.webp */ "./src/images/tests/Q_FD1.webp");
/* harmony import */ var _images_tests_Q_FD2_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/tests/Q_FD2.webp */ "./src/images/tests/Q_FD2.webp");



var testData = {
  questions: [{
    id: 1,
    text: "В первом фильме «Пункт назначения» у героя возникает видение катастрофы какого транспорта?",
    answers: [{
      text: "Поезд",
      isCorrect: false
    }, {
      text: "Корабль",
      isCorrect: false
    }, {
      text: "Самолет",
      isCorrect: true
    }, {
      text: "Автобус",
      isCorrect: false
    }]
  }, {
    id: 2,
    text: "В начале фильма «Пункт назначения 2» происходит массовая авария на…",
    answers: [{
      text: "Гоночной трассе",
      isCorrect: false
    }, {
      text: "Городской улице",
      isCorrect: false
    }, {
      text: "Парковке",
      isCorrect: false
    }, {
      text: "Шоссе",
      isCorrect: true
    }]
  }, {
    id: 3,
    text: "В «Пункт назначения 3» предчувствие главной героини связано с какой катастрофой?",
    answers: [{
      text: "Обрушение моста",
      isCorrect: false
    }, {
      text: "Авария на американских горках",
      isCorrect: true
    }, {
      text: "Взрыв самолёта",
      isCorrect: false
    }, {
      text: "Пожар в школе",
      isCorrect: false
    }]
  }, {
    id: 4,
    text: "Какой катастрофой начинается фильм «Пункт назначения 5»?",
    answers: [{
      text: "Крушение самолёта",
      isCorrect: false
    }, {
      text: "Крушение поезда",
      isCorrect: false
    }, {
      text: "Пожар в здании",
      isCorrect: false
    }, {
      text: "Обрушение моста",
      isCorrect: true
    }]
  }, {
    id: 5,
    text: "Кто является главным «антагонистом» всей серии фильмов?",
    answers: [{
      text: "Смерть и её план",
      isCorrect: true
    }, {
      text: "Маньяк",
      isCorrect: false
    }, {
      text: "Демон",
      isCorrect: false
    }, {
      text: "Тайная организация",
      isCorrect: false
    }]
  }],
  results: [{
    minScore: 0,
    maxScore: 2,
    title: "Большинство ответов неверны",
    description: "Вам стоит получше разобраться \nво вселенной Пункта назначения, в чём \nмы с удовольствием поможем!",
    image: _images_tests_Q_FD2_webp__WEBPACK_IMPORTED_MODULE_2__,
    caption: "«Пункт назначения 2» (Final Destination 2, 2003)"
  }, {
    minScore: 3,
    maxScore: 5,
    title: "Большинство ответов верны",
    description: "Вы определённо хорошо разбираетесь \nв данной франшизе, продолжайте \nв том же духе!",
    image: _images_tests_Q_FD1_webp__WEBPACK_IMPORTED_MODULE_1__,
    caption: "«Пункт назначения» (Final Destination, 2000)"
  }]
};
var currentQuestionIndex = 0;
var userAnswers = []; // здесь будем хранить объекты с questionId и isCorrect
var selectedAnswerIndex = null;
function renderQuestion() {
  var question = testData.questions[currentQuestionIndex];
  selectedAnswerIndex = null;
  var isLastQuestion = currentQuestionIndex === testData.questions.length - 1;
  var navigationHtml;
  if (currentQuestionIndex === 0) {
    navigationHtml = "\n      <div class=\"W_TestNavigation\">\n        <button class=\"A_TestPrevButton text_button_text\" id=\"backButton\">\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434</button>\n        <button class=\"A_TestNextButton text_button_text\" id=\"nextButton\" disabled>\n          \u0414\u0430\u043B\u0435\u0435\n        </button>\n      </div>\n    ";
  } else {
    navigationHtml = "\n      <div class=\"W_TestNavigation\">\n        <button class=\"A_TestPrevButton text_button_text\" id=\"prevButton\">\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441</button>\n        <button class=\"A_TestNextButton text_button_text\" id=\"nextButton\" disabled>\n          ".concat(isLastQuestion ? "Завершить" : "Далее", "\n        </button>\n      </div>\n    ");
  }
  document.getElementById("W_test_container").innerHTML = "\n    <div class=\"W_TestHeading\">\n      <div class=\"W_TestQuestion\">\n        <div class=\"M_TestQuestionCounter\">\n          <p class=\"text_button_text\">\u0412\u043E\u043F\u0440\u043E\u0441 <span>".concat(currentQuestionIndex + 1, "</span> \u0438\u0437 ").concat(testData.questions.length, "</p>\n        </div>\n        <h2 class=\"A_TestQuestionTitle\">").concat(question.text, "</h2>\n      </div>\n    </div>\n    <div class=\"W_TestBody\">\n      <div class=\"C_AnswerVariants\">\n        ").concat(question.answers.map(function (answer, index) {
    return "\n            <div class=\"M_AnswerVariant\" data-index=\"".concat(index, "\">\n              <p class=\"text_body_text\">").concat(answer.text, "</p>\n            </div>\n          ");
  }).join(""), "\n      </div>\n      ").concat(navigationHtml, "\n    </div>\n  ");
  document.querySelectorAll(".M_AnswerVariant").forEach(function (variant) {
    variant.addEventListener("click", function () {
      document.querySelectorAll(".M_AnswerVariant").forEach(function (v) {
        v.classList.remove("selected");
      });
      this.classList.add("selected");
      selectedAnswerIndex = parseInt(this.getAttribute("data-index"));
      document.getElementById("nextButton").disabled = false;
    });
  });
  document.getElementById("nextButton").addEventListener("click", goToNextQuestion);
  if (currentQuestionIndex === 0) {
    document.getElementById("backButton").addEventListener("click", function () {
      window.location.href = "../../pages/tests.html"; // путь к списку тестов
    });
  } else {
    document.getElementById("prevButton").addEventListener("click", goToPreviousQuestion);
  }
}
function goToNextQuestion() {
  if (selectedAnswerIndex !== null) {
    var question = testData.questions[currentQuestionIndex];
    userAnswers.push({
      questionId: question.id,
      answerIndex: selectedAnswerIndex,
      isCorrect: question.answers[selectedAnswerIndex].isCorrect
    });
    if (currentQuestionIndex < testData.questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      showResults();
    }
  }
}
function goToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    // Удаляем последний сохранённый ответ (он относится к текущему вопросу)
    if (userAnswers.length > currentQuestionIndex) {
      userAnswers.pop();
    }
    currentQuestionIndex--;
    renderQuestion();
  }
}
function showResults() {
  var correctAnswers = userAnswers.filter(function (answer) {
    return answer.isCorrect;
  }).length;
  var result = testData.results.find(function (r) {
    return correctAnswers >= r.minScore && correctAnswers <= r.maxScore;
  }) || testData.results[0];
  document.getElementById("W_test_container").innerHTML = "\n    <div class=\"W_ResultContent\">\n      <div class=\"M_TestQuestionCounter\">\n        <p class=\"text_button_text\">\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442</p>\n      </div>\n      <div class=\"W_ResultText\">\n        <h1 class=\"A_ResultTitle\">".concat(result.title, "</h1>\n        <p class=\"text_body_text A_ResultDescription\">").concat(result.description, "</p>\n      </div>\n      <div class=\"W_ResultImage\">\n        <img src=\"").concat(result.image, "\" alt=\"").concat(result.caption, "\" class=\"A_ResultImage\" />\n        <p class=\"A_ResultCaption text_body_text\">").concat(result.caption, "</p>\n      </div>\n      <div class=\"W_ResultButtons\">\n        <a href=\"../../pages/tests.html\" class=\"A_BackToTestsButton text_button_text\">\u041F\u0440\u043E\u0439\u0442\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u0435\u0441\u0442\u044B</a>\n      </div>\n    </div>\n  ");
}
document.addEventListener("DOMContentLoaded", renderQuestion);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7QUNsQmtDO0FBRWdCO0FBQ0E7QUFDbEQsSUFBTUUsUUFBUSxHQUFHO0VBQ2ZDLFNBQVMsRUFBRSxDQUNUO0lBQ0VDLEVBQUUsRUFBRSxDQUFDO0lBQ0xDLElBQUksRUFBRSw0RkFBNEY7SUFDbEdDLE9BQU8sRUFBRSxDQUNQO01BQUVELElBQUksRUFBRSxPQUFPO01BQUVFLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDbkM7TUFBRUYsSUFBSSxFQUFFLFNBQVM7TUFBRUUsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUNyQztNQUFFRixJQUFJLEVBQUUsU0FBUztNQUFFRSxTQUFTLEVBQUU7SUFBSyxDQUFDLEVBQ3BDO01BQUVGLElBQUksRUFBRSxTQUFTO01BQUVFLFNBQVMsRUFBRTtJQUFNLENBQUM7RUFFekMsQ0FBQyxFQUNEO0lBQ0VILEVBQUUsRUFBRSxDQUFDO0lBQ0xDLElBQUksRUFBRSxxRUFBcUU7SUFDM0VDLE9BQU8sRUFBRSxDQUNQO01BQUVELElBQUksRUFBRSxpQkFBaUI7TUFBRUUsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUM3QztNQUFFRixJQUFJLEVBQUUsaUJBQWlCO01BQUVFLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDN0M7TUFBRUYsSUFBSSxFQUFFLFVBQVU7TUFBRUUsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUN0QztNQUFFRixJQUFJLEVBQUUsT0FBTztNQUFFRSxTQUFTLEVBQUU7SUFBSyxDQUFDO0VBRXRDLENBQUMsRUFDRDtJQUNFSCxFQUFFLEVBQUUsQ0FBQztJQUNMQyxJQUFJLEVBQUUsa0ZBQWtGO0lBQ3hGQyxPQUFPLEVBQUUsQ0FDUDtNQUFFRCxJQUFJLEVBQUUsaUJBQWlCO01BQUVFLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDN0M7TUFBRUYsSUFBSSxFQUFFLCtCQUErQjtNQUFFRSxTQUFTLEVBQUU7SUFBSyxDQUFDLEVBQzFEO01BQUVGLElBQUksRUFBRSxnQkFBZ0I7TUFBRUUsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUM1QztNQUFFRixJQUFJLEVBQUUsZUFBZTtNQUFFRSxTQUFTLEVBQUU7SUFBTSxDQUFDO0VBRS9DLENBQUMsRUFDRDtJQUNFSCxFQUFFLEVBQUUsQ0FBQztJQUNMQyxJQUFJLEVBQUUsMERBQTBEO0lBQ2hFQyxPQUFPLEVBQUUsQ0FDUDtNQUFFRCxJQUFJLEVBQUUsbUJBQW1CO01BQUVFLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDL0M7TUFBRUYsSUFBSSxFQUFFLGlCQUFpQjtNQUFFRSxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQzdDO01BQUVGLElBQUksRUFBRSxnQkFBZ0I7TUFBRUUsU0FBUyxFQUFFO0lBQU0sQ0FBQyxFQUM1QztNQUFFRixJQUFJLEVBQUUsaUJBQWlCO01BQUVFLFNBQVMsRUFBRTtJQUFLLENBQUM7RUFFaEQsQ0FBQyxFQUNEO0lBQ0VILEVBQUUsRUFBRSxDQUFDO0lBQ0xDLElBQUksRUFBRSx5REFBeUQ7SUFDL0RDLE9BQU8sRUFBRSxDQUNQO01BQUVELElBQUksRUFBRSxrQkFBa0I7TUFBRUUsU0FBUyxFQUFFO0lBQUssQ0FBQyxFQUM3QztNQUFFRixJQUFJLEVBQUUsUUFBUTtNQUFFRSxTQUFTLEVBQUU7SUFBTSxDQUFDLEVBQ3BDO01BQUVGLElBQUksRUFBRSxPQUFPO01BQUVFLFNBQVMsRUFBRTtJQUFNLENBQUMsRUFDbkM7TUFBRUYsSUFBSSxFQUFFLG9CQUFvQjtNQUFFRSxTQUFTLEVBQUU7SUFBTSxDQUFDO0VBRXBELENBQUMsQ0FDRjtFQUNEQyxPQUFPLEVBQUUsQ0FDUDtJQUNFQyxRQUFRLEVBQUUsQ0FBQztJQUNYQyxRQUFRLEVBQUUsQ0FBQztJQUNYQyxLQUFLLEVBQUUsNkJBQTZCO0lBQ3BDQyxXQUFXLEVBQ1QscUdBQXFHO0lBQ3ZHQyxLQUFLLEVBQUVaLHFEQUFRO0lBQ2ZhLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFDRDtJQUNFTCxRQUFRLEVBQUUsQ0FBQztJQUNYQyxRQUFRLEVBQUUsQ0FBQztJQUNYQyxLQUFLLEVBQUUsMkJBQTJCO0lBQ2xDQyxXQUFXLEVBQ1Qsc0ZBQXNGO0lBQ3hGQyxLQUFLLEVBQUViLHFEQUFRO0lBQ2ZjLE9BQU8sRUFBRTtFQUNYLENBQUM7QUFFTCxDQUFDO0FBRUQsSUFBSUMsb0JBQW9CLEdBQUcsQ0FBQztBQUM1QixJQUFJQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDdEIsSUFBSUMsbUJBQW1CLEdBQUcsSUFBSTtBQUU5QixTQUFTQyxjQUFjQSxDQUFBLEVBQUc7RUFDeEIsSUFBTUMsUUFBUSxHQUFHakIsUUFBUSxDQUFDQyxTQUFTLENBQUNZLG9CQUFvQixDQUFDO0VBQ3pERSxtQkFBbUIsR0FBRyxJQUFJO0VBQzFCLElBQU1HLGNBQWMsR0FBR0wsb0JBQW9CLEtBQUtiLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDa0IsTUFBTSxHQUFHLENBQUM7RUFFN0UsSUFBSUMsY0FBYztFQUNsQixJQUFJUCxvQkFBb0IsS0FBSyxDQUFDLEVBQUU7SUFDOUJPLGNBQWMscVlBT2I7RUFDSCxDQUFDLE1BQU07SUFDTEEsY0FBYyw2VUFBQUMsTUFBQSxDQUlOSCxjQUFjLEdBQUcsV0FBVyxHQUFHLE9BQU8sNENBRzdDO0VBQ0g7RUFFQUksUUFBUSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0MsU0FBUyxtTkFBQUgsTUFBQSxDQUlGUixvQkFBb0IsR0FBRyxDQUFDLDJCQUFBUSxNQUFBLENBQWNyQixRQUFRLENBQUNDLFNBQVMsQ0FBQ2tCLE1BQU0sc0VBQUFFLE1BQUEsQ0FFMUVKLFFBQVEsQ0FBQ2QsSUFBSSx1SEFBQWtCLE1BQUEsQ0FLN0NKLFFBQVEsQ0FBQ2IsT0FBTyxDQUNmcUIsR0FBRyxDQUNGLFVBQUNDLE1BQU0sRUFBRUMsS0FBSztJQUFBLG9FQUFBTixNQUFBLENBQzZCTSxLQUFLLHFEQUFBTixNQUFBLENBQ2xCSyxNQUFNLENBQUN2QixJQUFJO0VBQUEsQ0FHM0MsQ0FBQyxDQUNBeUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyw0QkFBQVAsTUFBQSxDQUVYRCxjQUFjLHFCQUVuQjtFQUVERSxRQUFRLENBQUNPLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUs7SUFDakVBLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDNUNWLFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUNHLENBQUMsRUFBSztRQUMzREEsQ0FBQyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7TUFDaEMsQ0FBQyxDQUFDO01BQ0YsSUFBSSxDQUFDRCxTQUFTLENBQUNFLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDOUJyQixtQkFBbUIsR0FBR3NCLFFBQVEsQ0FBQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztNQUMvRGhCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDZ0IsUUFBUSxHQUFHLEtBQUs7SUFDeEQsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0VBRUZqQixRQUFRLENBQ0xDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FDNUJTLGdCQUFnQixDQUFDLE9BQU8sRUFBRVEsZ0JBQWdCLENBQUM7RUFFOUMsSUFBSTNCLG9CQUFvQixLQUFLLENBQUMsRUFBRTtJQUM5QlMsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUNTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ3BFUyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLHdCQUF3QixDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxNQUFNO0lBQ0xyQixRQUFRLENBQ0xDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FDNUJTLGdCQUFnQixDQUFDLE9BQU8sRUFBRVksb0JBQW9CLENBQUM7RUFDcEQ7QUFDRjtBQUVBLFNBQVNKLGdCQUFnQkEsQ0FBQSxFQUFHO0VBQzFCLElBQUl6QixtQkFBbUIsS0FBSyxJQUFJLEVBQUU7SUFDaEMsSUFBTUUsUUFBUSxHQUFHakIsUUFBUSxDQUFDQyxTQUFTLENBQUNZLG9CQUFvQixDQUFDO0lBQ3pEQyxXQUFXLENBQUMrQixJQUFJLENBQUM7TUFDZkMsVUFBVSxFQUFFN0IsUUFBUSxDQUFDZixFQUFFO01BQ3ZCNkMsV0FBVyxFQUFFaEMsbUJBQW1CO01BQ2hDVixTQUFTLEVBQUVZLFFBQVEsQ0FBQ2IsT0FBTyxDQUFDVyxtQkFBbUIsQ0FBQyxDQUFDVjtJQUNuRCxDQUFDLENBQUM7SUFFRixJQUFJUSxvQkFBb0IsR0FBR2IsUUFBUSxDQUFDQyxTQUFTLENBQUNrQixNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3hETixvQkFBb0IsRUFBRTtNQUN0QkcsY0FBYyxDQUFDLENBQUM7SUFDbEIsQ0FBQyxNQUFNO01BQ0xnQyxXQUFXLENBQUMsQ0FBQztJQUNmO0VBQ0Y7QUFDRjtBQUVBLFNBQVNKLG9CQUFvQkEsQ0FBQSxFQUFHO0VBQzlCLElBQUkvQixvQkFBb0IsR0FBRyxDQUFDLEVBQUU7SUFDNUI7SUFDQSxJQUFJQyxXQUFXLENBQUNLLE1BQU0sR0FBR04sb0JBQW9CLEVBQUU7TUFDN0NDLFdBQVcsQ0FBQ21DLEdBQUcsQ0FBQyxDQUFDO0lBQ25CO0lBQ0FwQyxvQkFBb0IsRUFBRTtJQUN0QkcsY0FBYyxDQUFDLENBQUM7RUFDbEI7QUFDRjtBQUVBLFNBQVNnQyxXQUFXQSxDQUFBLEVBQUc7RUFDckIsSUFBTUUsY0FBYyxHQUFHcEMsV0FBVyxDQUFDcUMsTUFBTSxDQUN2QyxVQUFDekIsTUFBTTtJQUFBLE9BQUtBLE1BQU0sQ0FBQ3JCLFNBQVM7RUFBQSxDQUM5QixDQUFDLENBQUNjLE1BQU07RUFDUixJQUFNaUMsTUFBTSxHQUNWcEQsUUFBUSxDQUFDTSxPQUFPLENBQUMrQyxJQUFJLENBQ25CLFVBQUNDLENBQUM7SUFBQSxPQUFLSixjQUFjLElBQUlJLENBQUMsQ0FBQy9DLFFBQVEsSUFBSTJDLGNBQWMsSUFBSUksQ0FBQyxDQUFDOUMsUUFBUTtFQUFBLENBQ3JFLENBQUMsSUFBSVIsUUFBUSxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBRTFCZ0IsUUFBUSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0MsU0FBUyxrUkFBQUgsTUFBQSxDQU1uQitCLE1BQU0sQ0FBQzNDLEtBQUsscUVBQUFZLE1BQUEsQ0FDUStCLE1BQU0sQ0FBQzFDLFdBQVcsa0ZBQUFXLE1BQUEsQ0FHdEQrQixNQUFNLENBQUN6QyxLQUFLLGVBQUFVLE1BQUEsQ0FBVStCLE1BQU0sQ0FBQ3hDLE9BQU8seUZBQUFTLE1BQUEsQ0FDSitCLE1BQU0sQ0FBQ3hDLE9BQU8sb1NBTS9EO0FBQ0g7QUFFQVUsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRWhCLGNBQWMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU3R1ZHkvLi9zcmMvc3R5bGVzaGVldHMvdGVzdDEuY3NzP2EyM2IiLCJ3ZWJwYWNrOi8vU3R1ZHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vU3R1ZHkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9TdHVkeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1N0dWR5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL1N0dWR5Ly4vc3JjL2phdmFzY3JpcHRzL3Rlc3QzZmluYWwtZGVzdGluYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi4vc3R5bGVzaGVldHMvdGVzdDEuY3NzXCI7XHJcblxyXG5pbXBvcnQgZmQxSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy90ZXN0cy9RX0ZEMS53ZWJwXCI7XHJcbmltcG9ydCBmZDJJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL3Rlc3RzL1FfRkQyLndlYnBcIjtcclxuY29uc3QgdGVzdERhdGEgPSB7XHJcbiAgcXVlc3Rpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICB0ZXh0OiBcItCSINC/0LXRgNCy0L7QvCDRhNC40LvRjNC80LUgwqvQn9GD0L3QutGCINC90LDQt9C90LDRh9C10L3QuNGPwrsg0YMg0LPQtdGA0L7RjyDQstC+0LfQvdC40LrQsNC10YIg0LLQuNC00LXQvdC40LUg0LrQsNGC0LDRgdGC0YDQvtGE0Ysg0LrQsNC60L7Qs9C+INGC0YDQsNC90YHQv9C+0YDRgtCwP1wiLFxyXG4gICAgICBhbnN3ZXJzOiBbXHJcbiAgICAgICAgeyB0ZXh0OiBcItCf0L7QtdC30LRcIiwgaXNDb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLQmtC+0YDQsNCx0LvRjFwiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCh0LDQvNC+0LvQtdGCXCIsIGlzQ29ycmVjdDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLQkNCy0YLQvtCx0YPRgVwiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgdGV4dDogXCLQkiDQvdCw0YfQsNC70LUg0YTQuNC70YzQvNCwIMKr0J/Rg9C90LrRgiDQvdCw0LfQvdCw0YfQtdC90LjRjyAywrsg0L/RgNC+0LjRgdGF0L7QtNC40YIg0LzQsNGB0YHQvtCy0LDRjyDQsNCy0LDRgNC40Y8g0L3QsOKAplwiLFxyXG4gICAgICBhbnN3ZXJzOiBbXHJcbiAgICAgICAgeyB0ZXh0OiBcItCT0L7QvdC+0YfQvdC+0Lkg0YLRgNCw0YHRgdC1XCIsIGlzQ29ycmVjdDogZmFsc2UgfSxcclxuICAgICAgICB7IHRleHQ6IFwi0JPQvtGA0L7QtNGB0LrQvtC5INGD0LvQuNGG0LVcIiwgaXNDb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLQn9Cw0YDQutC+0LLQutC1XCIsIGlzQ29ycmVjdDogZmFsc2UgfSxcclxuICAgICAgICB7IHRleHQ6IFwi0KjQvtGB0YHQtVwiLCBpc0NvcnJlY3Q6IHRydWUgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICB0ZXh0OiBcItCSIMKr0J/Rg9C90LrRgiDQvdCw0LfQvdCw0YfQtdC90LjRjyAzwrsg0L/RgNC10LTRh9GD0LLRgdGC0LLQuNC1INCz0LvQsNCy0L3QvtC5INCz0LXRgNC+0LjQvdC4INGB0LLRj9C30LDQvdC+INGBINC60LDQutC+0Lkg0LrQsNGC0LDRgdGC0YDQvtGE0L7QuT9cIixcclxuICAgICAgYW5zd2VyczogW1xyXG4gICAgICAgIHsgdGV4dDogXCLQntCx0YDRg9GI0LXQvdC40LUg0LzQvtGB0YLQsFwiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCQ0LLQsNGA0LjRjyDQvdCwINCw0LzQtdGA0LjQutCw0L3RgdC60LjRhSDQs9C+0YDQutCw0YVcIiwgaXNDb3JyZWN0OiB0cnVlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCS0LfRgNGL0LIg0YHQsNC80L7Qu9GR0YLQsFwiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCf0L7QttCw0YAg0LIg0YjQutC+0LvQtVwiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNCxcclxuICAgICAgdGV4dDogXCLQmtCw0LrQvtC5INC60LDRgtCw0YHRgtGA0L7RhNC+0Lkg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YTQuNC70YzQvCDCq9Cf0YPQvdC60YIg0L3QsNC30L3QsNGH0LXQvdC40Y8gNcK7P1wiLFxyXG4gICAgICBhbnN3ZXJzOiBbXHJcbiAgICAgICAgeyB0ZXh0OiBcItCa0YDRg9GI0LXQvdC40LUg0YHQsNC80L7Qu9GR0YLQsFwiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCa0YDRg9GI0LXQvdC40LUg0L/QvtC10LfQtNCwXCIsIGlzQ29ycmVjdDogZmFsc2UgfSxcclxuICAgICAgICB7IHRleHQ6IFwi0J/QvtC20LDRgCDQsiDQt9C00LDQvdC40LhcIiwgaXNDb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLQntCx0YDRg9GI0LXQvdC40LUg0LzQvtGB0YLQsFwiLCBpc0NvcnJlY3Q6IHRydWUgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA1LFxyXG4gICAgICB0ZXh0OiBcItCa0YLQviDRj9Cy0LvRj9C10YLRgdGPINCz0LvQsNCy0L3Ri9C8IMKr0LDQvdGC0LDQs9C+0L3QuNGB0YLQvtC8wrsg0LLRgdC10Lkg0YHQtdGA0LjQuCDRhNC40LvRjNC80L7Qsj9cIixcclxuICAgICAgYW5zd2VyczogW1xyXG4gICAgICAgIHsgdGV4dDogXCLQodC80LXRgNGC0Ywg0Lgg0LXRkSDQv9C70LDQvVwiLCBpc0NvcnJlY3Q6IHRydWUgfSxcclxuICAgICAgICB7IHRleHQ6IFwi0JzQsNC90YzRj9C6XCIsIGlzQ29ycmVjdDogZmFsc2UgfSxcclxuICAgICAgICB7IHRleHQ6IFwi0JTQtdC80L7QvVwiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCi0LDQudC90LDRjyDQvtGA0LPQsNC90LjQt9Cw0YbQuNGPXCIsIGlzQ29ycmVjdDogZmFsc2UgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICByZXN1bHRzOiBbXHJcbiAgICB7XHJcbiAgICAgIG1pblNjb3JlOiAwLFxyXG4gICAgICBtYXhTY29yZTogMixcclxuICAgICAgdGl0bGU6IFwi0JHQvtC70YzRiNC40L3RgdGC0LLQviDQvtGC0LLQtdGC0L7QsiDQvdC10LLQtdGA0L3Ri1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcItCS0LDQvCDRgdGC0L7QuNGCINC/0L7Qu9GD0YfRiNC1INGA0LDQt9C+0LHRgNCw0YLRjNGB0Y8gXFxu0LLQviDQstGB0LXQu9C10L3QvdC+0Lkg0J/Rg9C90LrRgtCwINC90LDQt9C90LDRh9C10L3QuNGPLCDQsiDRh9GR0LwgXFxu0LzRiyDRgSDRg9C00L7QstC+0LvRjNGB0YLQstC40LXQvCDQv9C+0LzQvtC20LXQvCFcIixcclxuICAgICAgaW1hZ2U6IGZkMkltYWdlLFxyXG4gICAgICBjYXB0aW9uOiBcIsKr0J/Rg9C90LrRgiDQvdCw0LfQvdCw0YfQtdC90LjRjyAywrsgKEZpbmFsIERlc3RpbmF0aW9uIDIsIDIwMDMpXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBtaW5TY29yZTogMyxcclxuICAgICAgbWF4U2NvcmU6IDUsXHJcbiAgICAgIHRpdGxlOiBcItCR0L7Qu9GM0YjQuNC90YHRgtCy0L4g0L7RgtCy0LXRgtC+0LIg0LLQtdGA0L3Ri1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcItCS0Ysg0L7Qv9GA0LXQtNC10LvRkdC90L3QviDRhdC+0YDQvtGI0L4g0YDQsNC30LHQuNGA0LDQtdGC0LXRgdGMIFxcbtCyINC00LDQvdC90L7QuSDRhNGA0LDQvdGI0LjQt9C1LCDQv9GA0L7QtNC+0LvQttCw0LnRgtC1IFxcbtCyINGC0L7QvCDQttC1INC00YPRhdC1IVwiLFxyXG4gICAgICBpbWFnZTogZmQxSW1hZ2UsXHJcbiAgICAgIGNhcHRpb246IFwiwqvQn9GD0L3QutGCINC90LDQt9C90LDRh9C10L3QuNGPwrsgKEZpbmFsIERlc3RpbmF0aW9uLCAyMDAwKVwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxubGV0IGN1cnJlbnRRdWVzdGlvbkluZGV4ID0gMDtcclxubGV0IHVzZXJBbnN3ZXJzID0gW107IC8vINC30LTQtdGB0Ywg0LHRg9C00LXQvCDRhdGA0LDQvdC40YLRjCDQvtCx0YrQtdC60YLRiyDRgSBxdWVzdGlvbklkINC4IGlzQ29ycmVjdFxyXG5sZXQgc2VsZWN0ZWRBbnN3ZXJJbmRleCA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJRdWVzdGlvbigpIHtcclxuICBjb25zdCBxdWVzdGlvbiA9IHRlc3REYXRhLnF1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25JbmRleF07XHJcbiAgc2VsZWN0ZWRBbnN3ZXJJbmRleCA9IG51bGw7XHJcbiAgY29uc3QgaXNMYXN0UXVlc3Rpb24gPSBjdXJyZW50UXVlc3Rpb25JbmRleCA9PT0gdGVzdERhdGEucXVlc3Rpb25zLmxlbmd0aCAtIDE7XHJcblxyXG4gIGxldCBuYXZpZ2F0aW9uSHRtbDtcclxuICBpZiAoY3VycmVudFF1ZXN0aW9uSW5kZXggPT09IDApIHtcclxuICAgIG5hdmlnYXRpb25IdG1sID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiV19UZXN0TmF2aWdhdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJBX1Rlc3RQcmV2QnV0dG9uIHRleHRfYnV0dG9uX3RleHRcIiBpZD1cImJhY2tCdXR0b25cIj7QktC10YDQvdGD0YLRjNGB0Y8g0L3QsNC30LDQtDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJBX1Rlc3ROZXh0QnV0dG9uIHRleHRfYnV0dG9uX3RleHRcIiBpZD1cIm5leHRCdXR0b25cIiBkaXNhYmxlZD5cclxuICAgICAgICAgINCU0LDQu9C10LVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZpZ2F0aW9uSHRtbCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cIldfVGVzdE5hdmlnYXRpb25cIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiQV9UZXN0UHJldkJ1dHRvbiB0ZXh0X2J1dHRvbl90ZXh0XCIgaWQ9XCJwcmV2QnV0dG9uXCI+0J/RgNC10LTRi9C00YPRidC40Lkg0LLQvtC/0YDQvtGBPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIkFfVGVzdE5leHRCdXR0b24gdGV4dF9idXR0b25fdGV4dFwiIGlkPVwibmV4dEJ1dHRvblwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgJHtpc0xhc3RRdWVzdGlvbiA/IFwi0JfQsNCy0LXRgNGI0LjRgtGMXCIgOiBcItCU0LDQu9C10LVcIn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJXX3Rlc3RfY29udGFpbmVyXCIpLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJXX1Rlc3RIZWFkaW5nXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJXX1Rlc3RRdWVzdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJNX1Rlc3RRdWVzdGlvbkNvdW50ZXJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dF9idXR0b25fdGV4dFwiPtCS0L7Qv9GA0L7RgSA8c3Bhbj4ke2N1cnJlbnRRdWVzdGlvbkluZGV4ICsgMX08L3NwYW4+INC40LcgJHt0ZXN0RGF0YS5xdWVzdGlvbnMubGVuZ3RofTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJBX1Rlc3RRdWVzdGlvblRpdGxlXCI+JHtxdWVzdGlvbi50ZXh0fTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiV19UZXN0Qm9keVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiQ19BbnN3ZXJWYXJpYW50c1wiPlxyXG4gICAgICAgICR7cXVlc3Rpb24uYW5zd2Vyc1xyXG4gICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgKGFuc3dlciwgaW5kZXgpID0+IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIk1fQW5zd2VyVmFyaWFudFwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dF9ib2R5X3RleHRcIj4ke2Fuc3dlci50ZXh0fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBgLFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLmpvaW4oXCJcIil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAke25hdmlnYXRpb25IdG1sfVxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5NX0Fuc3dlclZhcmlhbnRcIikuZm9yRWFjaCgodmFyaWFudCkgPT4ge1xyXG4gICAgdmFyaWFudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLk1fQW5zd2VyVmFyaWFudFwiKS5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgc2VsZWN0ZWRBbnN3ZXJJbmRleCA9IHBhcnNlSW50KHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dEJ1dHRvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0QnV0dG9uXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvVG9OZXh0UXVlc3Rpb24pO1xyXG5cclxuICBpZiAoY3VycmVudFF1ZXN0aW9uSW5kZXggPT09IDApIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja0J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLi4vLi4vcGFnZXMvdGVzdHMuaHRtbFwiOyAvLyDQv9GD0YLRjCDQuiDRgdC/0LjRgdC60YMg0YLQtdGB0YLQvtCyXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwicHJldkJ1dHRvblwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvVG9QcmV2aW91c1F1ZXN0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvVG9OZXh0UXVlc3Rpb24oKSB7XHJcbiAgaWYgKHNlbGVjdGVkQW5zd2VySW5kZXggIT09IG51bGwpIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGVzdERhdGEucXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbkluZGV4XTtcclxuICAgIHVzZXJBbnN3ZXJzLnB1c2goe1xyXG4gICAgICBxdWVzdGlvbklkOiBxdWVzdGlvbi5pZCxcclxuICAgICAgYW5zd2VySW5kZXg6IHNlbGVjdGVkQW5zd2VySW5kZXgsXHJcbiAgICAgIGlzQ29ycmVjdDogcXVlc3Rpb24uYW5zd2Vyc1tzZWxlY3RlZEFuc3dlckluZGV4XS5pc0NvcnJlY3QsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0aW9uSW5kZXggPCB0ZXN0RGF0YS5xdWVzdGlvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBjdXJyZW50UXVlc3Rpb25JbmRleCsrO1xyXG4gICAgICByZW5kZXJRdWVzdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1Jlc3VsdHMoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvVG9QcmV2aW91c1F1ZXN0aW9uKCkge1xyXG4gIGlmIChjdXJyZW50UXVlc3Rpb25JbmRleCA+IDApIHtcclxuICAgIC8vINCj0LTQsNC70Y/QtdC8INC/0L7RgdC70LXQtNC90LjQuSDRgdC+0YXRgNCw0L3RkdC90L3Ri9C5INC+0YLQstC10YIgKNC+0L0g0L7RgtC90L7RgdC40YLRgdGPINC6INGC0LXQutGD0YnQtdC80YMg0LLQvtC/0YDQvtGB0YMpXHJcbiAgICBpZiAodXNlckFuc3dlcnMubGVuZ3RoID4gY3VycmVudFF1ZXN0aW9uSW5kZXgpIHtcclxuICAgICAgdXNlckFuc3dlcnMucG9wKCk7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50UXVlc3Rpb25JbmRleC0tO1xyXG4gICAgcmVuZGVyUXVlc3Rpb24oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dSZXN1bHRzKCkge1xyXG4gIGNvbnN0IGNvcnJlY3RBbnN3ZXJzID0gdXNlckFuc3dlcnMuZmlsdGVyKFxyXG4gICAgKGFuc3dlcikgPT4gYW5zd2VyLmlzQ29ycmVjdCxcclxuICApLmxlbmd0aDtcclxuICBjb25zdCByZXN1bHQgPVxyXG4gICAgdGVzdERhdGEucmVzdWx0cy5maW5kKFxyXG4gICAgICAocikgPT4gY29ycmVjdEFuc3dlcnMgPj0gci5taW5TY29yZSAmJiBjb3JyZWN0QW5zd2VycyA8PSByLm1heFNjb3JlLFxyXG4gICAgKSB8fCB0ZXN0RGF0YS5yZXN1bHRzWzBdO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIldfdGVzdF9jb250YWluZXJcIikuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cIldfUmVzdWx0Q29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiTV9UZXN0UXVlc3Rpb25Db3VudGVyXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0X2J1dHRvbl90ZXh0XCI+0KDQtdC30YPQu9GM0YLQsNGCPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIldfUmVzdWx0VGV4dFwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cIkFfUmVzdWx0VGl0bGVcIj4ke3Jlc3VsdC50aXRsZX08L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dF9ib2R5X3RleHQgQV9SZXN1bHREZXNjcmlwdGlvblwiPiR7cmVzdWx0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJXX1Jlc3VsdEltYWdlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke3Jlc3VsdC5pbWFnZX1cIiBhbHQ9XCIke3Jlc3VsdC5jYXB0aW9ufVwiIGNsYXNzPVwiQV9SZXN1bHRJbWFnZVwiIC8+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJBX1Jlc3VsdENhcHRpb24gdGV4dF9ib2R5X3RleHRcIj4ke3Jlc3VsdC5jYXB0aW9ufTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJXX1Jlc3VsdEJ1dHRvbnNcIj5cclxuICAgICAgICA8YSBocmVmPVwiLi4vLi4vcGFnZXMvdGVzdHMuaHRtbFwiIGNsYXNzPVwiQV9CYWNrVG9UZXN0c0J1dHRvbiB0ZXh0X2J1dHRvbl90ZXh0XCI+0J/RgNC+0LnRgtC4INC00YDRg9Cz0LjQtSDRgtC10YHRgtGLPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHJlbmRlclF1ZXN0aW9uKTtcclxuIl0sIm5hbWVzIjpbImZkMUltYWdlIiwiZmQySW1hZ2UiLCJ0ZXN0RGF0YSIsInF1ZXN0aW9ucyIsImlkIiwidGV4dCIsImFuc3dlcnMiLCJpc0NvcnJlY3QiLCJyZXN1bHRzIiwibWluU2NvcmUiLCJtYXhTY29yZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImNhcHRpb24iLCJjdXJyZW50UXVlc3Rpb25JbmRleCIsInVzZXJBbnN3ZXJzIiwic2VsZWN0ZWRBbnN3ZXJJbmRleCIsInJlbmRlclF1ZXN0aW9uIiwicXVlc3Rpb24iLCJpc0xhc3RRdWVzdGlvbiIsImxlbmd0aCIsIm5hdmlnYXRpb25IdG1sIiwiY29uY2F0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIm1hcCIsImFuc3dlciIsImluZGV4Iiwiam9pbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidmFyaWFudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsImdvVG9OZXh0UXVlc3Rpb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJnb1RvUHJldmlvdXNRdWVzdGlvbiIsInB1c2giLCJxdWVzdGlvbklkIiwiYW5zd2VySW5kZXgiLCJzaG93UmVzdWx0cyIsInBvcCIsImNvcnJlY3RBbnN3ZXJzIiwiZmlsdGVyIiwicmVzdWx0IiwiZmluZCIsInIiXSwic291cmNlUm9vdCI6IiJ9