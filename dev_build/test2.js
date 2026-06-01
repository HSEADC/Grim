/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/tests/Q_ResultIt.webp":
/*!******************************************!*\
  !*** ./src/images/tests/Q_ResultIt.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/b7552f16341aa62bcedb.webp";

/***/ }),

/***/ "./src/images/tests/Q_ResultShining.webp":
/*!***********************************************!*\
  !*** ./src/images/tests/Q_ResultShining.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/8e08495673c0ff94f145.webp";

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
/*!***********************************************************!*\
  !*** ./src/javascripts/test2knowledge-popular-horrors.js ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_test1_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/test1.css */ "./src/stylesheets/test1.css");
/* harmony import */ var _images_tests_Q_ResultIt_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/tests/Q_ResultIt.webp */ "./src/images/tests/Q_ResultIt.webp");
/* harmony import */ var _images_tests_Q_ResultShining_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/tests/Q_ResultShining.webp */ "./src/images/tests/Q_ResultShining.webp");



var testData = {
  title: "Насколько хорошо ты знаешь хорроры?",
  questions: [{
    id: 1,
    text: "В каком фильме впервые появился Фредди Крюгер?",
    answers: [{
      text: "Хэллоуин",
      isCorrect: false
    }, {
      text: "Кошмар на улице Вязов",
      isCorrect: true
    }, {
      text: "Пятница, 13-е",
      isCorrect: false
    }, {
      text: "Кэндимэн",
      isCorrect: false
    }]
  }, {
    id: 2,
    text: "Как зовут убийцу из фильмов «Детские игры»?",
    answers: [{
      text: "Энди",
      isCorrect: false
    }, {
      text: "Сэм",
      isCorrect: false
    }, {
      text: "Чаки",
      isCorrect: true
    }, {
      text: "Билли",
      isCorrect: false
    }]
  }, {
    id: 3,
    text: "В каком фильме есть проклятая видеокассета?",
    answers: [{
      text: "Звонок",
      isCorrect: true
    }, {
      text: "Проклятие",
      isCorrect: false
    }, {
      text: "Астрал",
      isCorrect: false
    }, {
      text: "Паранормальное явление",
      isCorrect: false
    }]
  }, {
    id: 4,
    text: "Как называется отель из фильма «Сияние»?",
    answers: [{
      text: "Стэнли",
      isCorrect: false
    }, {
      text: "Бейтс",
      isCorrect: false
    }, {
      text: "Оверлук",
      isCorrect: true
    }, {
      text: "Рузвельт",
      isCorrect: false
    }]
  }, {
    id: 5,
    text: "Какой режиссёр снял фильм «Сияние» (1980)?",
    answers: [{
      text: "Джеймс Ван",
      isCorrect: false
    }, {
      text: "Стэнли Кубрик",
      isCorrect: true
    }, {
      text: "Джон Карпентер",
      isCorrect: false
    }, {
      text: "Альфред Хичкок",
      isCorrect: false
    }]
  }, {
    id: 6,
    text: "Кто главный убийца в серии фильмов «Хэллоуин»?",
    answers: [{
      text: "Джейсон Вурхиз",
      isCorrect: false
    }, {
      text: "Пинхед",
      isCorrect: false
    }, {
      text: "Майкл Майерс",
      isCorrect: true
    }, {
      text: "Кожаное лицо",
      isCorrect: false
    }]
  }],
  results: [{
    minScore: 0,
    maxScore: 2,
    title: "Большинство ответов неверны",
    description: "Вам стоит получше разобраться в мире \nхорроров, в чём мы с удовольствием \nпоможем!",
    image: _images_tests_Q_ResultIt_webp__WEBPACK_IMPORTED_MODULE_1__,
    caption: "«Оно» (It, 2017)"
  }, {
    minScore: 3,
    maxScore: 6,
    title: "Большинство ответов верны",
    description: "Вы определённо хорошо разбираетесь \nв хоррорах, продолжайте\n в том же духе!",
    image: _images_tests_Q_ResultShining_webp__WEBPACK_IMPORTED_MODULE_2__,
    caption: "«Сияние» (The Shining, 1980)"
  }]
};
var currentQuestionIndex = 0;
var userAnswers = [];
var selectedAnswerIndex = null;
function renderQuestion() {
  var question = testData.questions[currentQuestionIndex];
  selectedAnswerIndex = null;
  var isLastQuestion = currentQuestionIndex === testData.questions.length - 1;
  var navigationHtml;
  if (currentQuestionIndex === 0) {
    // Первый вопрос: кнопка "Вернуться назад" (активная) и "Далее" (disabled)
    navigationHtml = "\n      <div class=\"W_TestNavigation\">\n        <button class=\"A_TestPrevButton text_button_text\" id=\"backButton\">\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434</button>\n        <button class=\"A_TestNextButton text_button_text\" id=\"nextButton\" disabled>\n          ".concat(isLastQuestion ? "Завершить" : "Далее", "\n        </button>\n      </div>\n    ");
  } else {
    // Второй и последующие: "Предыдущий вопрос" (активный) и "Далее/Завершить" (disabled)
    navigationHtml = "\n      <div class=\"W_TestNavigation\">\n        <button class=\"A_TestPrevButton text_button_text\" id=\"prevButton\">\u041D\u0430\u0437\u0430\u0434</button>\n        <button class=\"A_TestNextButton text_button_text\" id=\"nextButton\" disabled>\n          ".concat(isLastQuestion ? "Завершить" : "Далее", "\n        </button>\n      </div>\n    ");
  }
  document.getElementById("W_test_container").innerHTML = "\n    <div class=\"W_TestHeading\">\n      <div class=\"W_TestQuestion\">\n        <div class=\"M_TestQuestionCounter\">\n          <p class=\"text_button_text\">\u0412\u043E\u043F\u0440\u043E\u0441 <span>".concat(currentQuestionIndex + 1, "</span> \u0438\u0437 ").concat(testData.questions.length, "</p>\n        </div>\n        <h2 class=\"A_TestQuestionTitle\">").concat(question.text, "</h2>\n      </div>\n    </div>\n    <div class=\"W_TestBody\">\n      <div class=\"C_AnswerVariants\">\n        ").concat(question.answers.map(function (answer, index) {
    return "\n            <div class=\"M_AnswerVariant\" data-index=\"".concat(index, "\">\n              <p class=\"text_body_text\">").concat(answer.text, "</p>\n            </div>\n          ");
  }).join(""), "\n      </div>\n      ").concat(navigationHtml, "\n    </div>\n  ");

  // Обработчики для вариантов ответов
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

  // Обработчик для кнопки "Далее / Завершить"
  document.getElementById("nextButton").addEventListener("click", goToNextQuestion);

  // Обработчики для левой кнопки
  if (currentQuestionIndex === 0) {
    document.getElementById("backButton").addEventListener("click", function () {
      window.location.href = "../../pages/tests.html"; // путь к странице со списком тестов
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
    // Удаляем ответ на текущий вопрос, если он был сохранён
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
  });
  document.getElementById("W_test_container").innerHTML = "\n    <div class=\"W_ResultContent\">\n      <div class=\"M_TestQuestionCounter\">\n        <p class=\"text_button_text\">\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442</p>\n      </div>\n      <div class=\"W_ResultText\">\n        <h1 class=\"A_ResultTitle\">".concat(result.title, "</h1>\n        <p class=\"text_body_text A_ResultDescription\">").concat(result.description, "</p>\n      </div>\n      <div class=\"W_ResultImage\">\n        <img src=\"").concat(result.image, "\" alt=\"").concat(result.caption, "\" class=\"A_ResultImage\" />\n        <p class=\"A_ResultCaption text_body_text\">").concat(result.caption, "</p>\n      </div>\n      <div class=\"W_ResultButtons\">\n        <a href=\"../../pages/tests.html\" class=\"A_BackToTestsButton text_button_text\">\u041F\u0440\u043E\u0439\u0442\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u0435\u0441\u0442\u044B</a>\n      </div>\n    </div>\n  ");
}
document.addEventListener("DOMContentLoaded", renderQuestion);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLENBQUN4QyxPQUFPLHlGQUFBUyxNQUFBLENBQ0orQixNQUFNLENBQUN4QyxPQUFPLG9TQU0vRDtBQUNIO0FBRUFVLFFBQVEsQ0FBQ1UsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUVoQixjQUFjLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL1N0dWR5Ly4vc3JjL3N0eWxlc2hlZXRzL3Rlc3QxLmNzcz9hMjNiIiwid2VicGFjazovL1N0dWR5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1N0dWR5L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vU3R1ZHkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9TdHVkeS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9TdHVkeS8uL3NyYy9qYXZhc2NyaXB0cy90ZXN0Mmtub3dsZWRnZS1wb3B1bGFyLWhvcnJvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi4vc3R5bGVzaGVldHMvdGVzdDEuY3NzXCI7XHJcbmltcG9ydCBpdEltYWdlIGZyb20gXCIuLi9pbWFnZXMvdGVzdHMvUV9SZXN1bHRJdC53ZWJwXCI7XHJcbmltcG9ydCBzaGluaW5nSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy90ZXN0cy9RX1Jlc3VsdFNoaW5pbmcud2VicFwiO1xyXG5cclxuY29uc3QgdGVzdERhdGEgPSB7XHJcbiAgdGl0bGU6IFwi0J3QsNGB0LrQvtC70YzQutC+INGF0L7RgNC+0YjQviDRgtGLINC30L3QsNC10YjRjCDRhdC+0YDRgNC+0YDRiz9cIixcclxuICBxdWVzdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHRleHQ6IFwi0JIg0LrQsNC60L7QvCDRhNC40LvRjNC80LUg0LLQv9C10YDQstGL0LUg0L/QvtGP0LLQuNC70YHRjyDQpNGA0LXQtNC00Lgg0JrRgNGO0LPQtdGAP1wiLFxyXG4gICAgICBhbnN3ZXJzOiBbXHJcbiAgICAgICAgeyB0ZXh0OiBcItCl0Y3Qu9C70L7Rg9C40L1cIiwgaXNDb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLQmtC+0YjQvNCw0YAg0L3QsCDRg9C70LjRhtC1INCS0Y/Qt9C+0LJcIiwgaXNDb3JyZWN0OiB0cnVlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCf0Y/RgtC90LjRhtCwLCAxMy3QtVwiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCa0Y3QvdC00LjQvNGN0L1cIiwgaXNDb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHRleHQ6IFwi0JrQsNC6INC30L7QstGD0YIg0YPQsdC40LnRhtGDINC40Lcg0YTQuNC70YzQvNC+0LIgwqvQlNC10YLRgdC60LjQtSDQuNCz0YDRi8K7P1wiLFxyXG4gICAgICBhbnN3ZXJzOiBbXHJcbiAgICAgICAgeyB0ZXh0OiBcItCt0L3QtNC4XCIsIGlzQ29ycmVjdDogZmFsc2UgfSxcclxuICAgICAgICB7IHRleHQ6IFwi0KHRjdC8XCIsIGlzQ29ycmVjdDogZmFsc2UgfSxcclxuICAgICAgICB7IHRleHQ6IFwi0KfQsNC60LhcIiwgaXNDb3JyZWN0OiB0cnVlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCR0LjQu9C70LhcIiwgaXNDb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIHRleHQ6IFwi0JIg0LrQsNC60L7QvCDRhNC40LvRjNC80LUg0LXRgdGC0Ywg0L/RgNC+0LrQu9GP0YLQsNGPINCy0LjQtNC10L7QutCw0YHRgdC10YLQsD9cIixcclxuICAgICAgYW5zd2VyczogW1xyXG4gICAgICAgIHsgdGV4dDogXCLQl9Cy0L7QvdC+0LpcIiwgaXNDb3JyZWN0OiB0cnVlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCf0YDQvtC60LvRj9GC0LjQtVwiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCQ0YHRgtGA0LDQu1wiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCf0LDRgNCw0L3QvtGA0LzQsNC70YzQvdC+0LUg0Y/QstC70LXQvdC40LVcIiwgaXNDb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIHRleHQ6IFwi0JrQsNC6INC90LDQt9GL0LLQsNC10YLRgdGPINC+0YLQtdC70Ywg0LjQtyDRhNC40LvRjNC80LAgwqvQodC40Y/QvdC40LXCuz9cIixcclxuICAgICAgYW5zd2VyczogW1xyXG4gICAgICAgIHsgdGV4dDogXCLQodGC0Y3QvdC70LhcIiwgaXNDb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLQkdC10LnRgtGBXCIsIGlzQ29ycmVjdDogZmFsc2UgfSxcclxuICAgICAgICB7IHRleHQ6IFwi0J7QstC10YDQu9GD0LpcIiwgaXNDb3JyZWN0OiB0cnVlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCg0YPQt9Cy0LXQu9GM0YJcIiwgaXNDb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDUsXHJcbiAgICAgIHRleHQ6IFwi0JrQsNC60L7QuSDRgNC10LbQuNGB0YHRkdGAINGB0L3Rj9C7INGE0LjQu9GM0LwgwqvQodC40Y/QvdC40LXCuyAoMTk4MCk/XCIsXHJcbiAgICAgIGFuc3dlcnM6IFtcclxuICAgICAgICB7IHRleHQ6IFwi0JTQttC10LnQvNGBINCS0LDQvVwiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCh0YLRjdC90LvQuCDQmtGD0LHRgNC40LpcIiwgaXNDb3JyZWN0OiB0cnVlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCU0LbQvtC9INCa0LDRgNC/0LXQvdGC0LXRgFwiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCQ0LvRjNGE0YDQtdC0INCl0LjRh9C60L7QulwiLCBpc0NvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNixcclxuICAgICAgdGV4dDogXCLQmtGC0L4g0LPQu9Cw0LLQvdGL0Lkg0YPQsdC40LnRhtCwINCyINGB0LXRgNC40Lgg0YTQuNC70YzQvNC+0LIgwqvQpdGN0LvQu9C+0YPQuNC9wrs/XCIsXHJcbiAgICAgIGFuc3dlcnM6IFtcclxuICAgICAgICB7IHRleHQ6IFwi0JTQttC10LnRgdC+0L0g0JLRg9GA0YXQuNC3XCIsIGlzQ29ycmVjdDogZmFsc2UgfSxcclxuICAgICAgICB7IHRleHQ6IFwi0J/QuNC90YXQtdC0XCIsIGlzQ29ycmVjdDogZmFsc2UgfSxcclxuICAgICAgICB7IHRleHQ6IFwi0JzQsNC50LrQuyDQnNCw0LnQtdGA0YFcIiwgaXNDb3JyZWN0OiB0cnVlIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcItCa0L7QttCw0L3QvtC1INC70LjRhtC+XCIsIGlzQ29ycmVjdDogZmFsc2UgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICByZXN1bHRzOiBbXHJcbiAgICB7XHJcbiAgICAgIG1pblNjb3JlOiAwLFxyXG4gICAgICBtYXhTY29yZTogMixcclxuICAgICAgdGl0bGU6IFwi0JHQvtC70YzRiNC40L3RgdGC0LLQviDQvtGC0LLQtdGC0L7QsiDQvdC10LLQtdGA0L3Ri1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcItCS0LDQvCDRgdGC0L7QuNGCINC/0L7Qu9GD0YfRiNC1INGA0LDQt9C+0LHRgNCw0YLRjNGB0Y8g0LIg0LzQuNGA0LUgXFxu0YXQvtGA0YDQvtGA0L7Qsiwg0LIg0YfRkdC8INC80Ysg0YEg0YPQtNC+0LLQvtC70YzRgdGC0LLQuNC10LwgXFxu0L/QvtC80L7QttC10LwhXCIsXHJcbiAgICAgIGltYWdlOiBpdEltYWdlLFxyXG4gICAgICBjYXB0aW9uOiBcIsKr0J7QvdC+wrsgKEl0LCAyMDE3KVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbWluU2NvcmU6IDMsXHJcbiAgICAgIG1heFNjb3JlOiA2LFxyXG4gICAgICB0aXRsZTogXCLQkdC+0LvRjNGI0LjQvdGB0YLQstC+INC+0YLQstC10YLQvtCyINCy0LXRgNC90YtcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCLQktGLINC+0L/RgNC10LTQtdC70ZHQvdC90L4g0YXQvtGA0L7RiNC+INGA0LDQt9Cx0LjRgNCw0LXRgtC10YHRjCBcXG7QsiDRhdC+0YDRgNC+0YDQsNGFLCDQv9GA0L7QtNC+0LvQttCw0LnRgtC1XFxuINCyINGC0L7QvCDQttC1INC00YPRhdC1IVwiLFxyXG4gICAgICBpbWFnZTogc2hpbmluZ0ltYWdlLFxyXG4gICAgICBjYXB0aW9uOiBcIsKr0KHQuNGP0L3QuNC1wrsgKFRoZSBTaGluaW5nLCAxOTgwKVwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxubGV0IGN1cnJlbnRRdWVzdGlvbkluZGV4ID0gMDtcclxubGV0IHVzZXJBbnN3ZXJzID0gW107XHJcbmxldCBzZWxlY3RlZEFuc3dlckluZGV4ID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclF1ZXN0aW9uKCkge1xyXG4gIGNvbnN0IHF1ZXN0aW9uID0gdGVzdERhdGEucXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbkluZGV4XTtcclxuICBzZWxlY3RlZEFuc3dlckluZGV4ID0gbnVsbDtcclxuICBjb25zdCBpc0xhc3RRdWVzdGlvbiA9IGN1cnJlbnRRdWVzdGlvbkluZGV4ID09PSB0ZXN0RGF0YS5xdWVzdGlvbnMubGVuZ3RoIC0gMTtcclxuXHJcbiAgbGV0IG5hdmlnYXRpb25IdG1sO1xyXG4gIGlmIChjdXJyZW50UXVlc3Rpb25JbmRleCA9PT0gMCkge1xyXG4gICAgLy8g0J/QtdGA0LLRi9C5INCy0L7Qv9GA0L7RgTog0LrQvdC+0L/QutCwIFwi0JLQtdGA0L3Rg9GC0YzRgdGPINC90LDQt9Cw0LRcIiAo0LDQutGC0LjQstC90LDRjykg0LggXCLQlNCw0LvQtdC1XCIgKGRpc2FibGVkKVxyXG4gICAgbmF2aWdhdGlvbkh0bWwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJXX1Rlc3ROYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIkFfVGVzdFByZXZCdXR0b24gdGV4dF9idXR0b25fdGV4dFwiIGlkPVwiYmFja0J1dHRvblwiPtCS0LXRgNC90YPRgtGM0YHRjyDQvdCw0LfQsNC0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIkFfVGVzdE5leHRCdXR0b24gdGV4dF9idXR0b25fdGV4dFwiIGlkPVwibmV4dEJ1dHRvblwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgJHtpc0xhc3RRdWVzdGlvbiA/IFwi0JfQsNCy0LXRgNGI0LjRgtGMXCIgOiBcItCU0LDQu9C10LVcIn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyDQktGC0L7RgNC+0Lkg0Lgg0L/QvtGB0LvQtdC00YPRjtGJ0LjQtTogXCLQn9GA0LXQtNGL0LTRg9GJ0LjQuSDQstC+0L/RgNC+0YFcIiAo0LDQutGC0LjQstC90YvQuSkg0LggXCLQlNCw0LvQtdC1L9CX0LDQstC10YDRiNC40YLRjFwiIChkaXNhYmxlZClcclxuICAgIG5hdmlnYXRpb25IdG1sID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiV19UZXN0TmF2aWdhdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJBX1Rlc3RQcmV2QnV0dG9uIHRleHRfYnV0dG9uX3RleHRcIiBpZD1cInByZXZCdXR0b25cIj7QndCw0LfQsNC0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIkFfVGVzdE5leHRCdXR0b24gdGV4dF9idXR0b25fdGV4dFwiIGlkPVwibmV4dEJ1dHRvblwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgJHtpc0xhc3RRdWVzdGlvbiA/IFwi0JfQsNCy0LXRgNGI0LjRgtGMXCIgOiBcItCU0LDQu9C10LVcIn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJXX3Rlc3RfY29udGFpbmVyXCIpLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJXX1Rlc3RIZWFkaW5nXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJXX1Rlc3RRdWVzdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJNX1Rlc3RRdWVzdGlvbkNvdW50ZXJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dF9idXR0b25fdGV4dFwiPtCS0L7Qv9GA0L7RgSA8c3Bhbj4ke2N1cnJlbnRRdWVzdGlvbkluZGV4ICsgMX08L3NwYW4+INC40LcgJHt0ZXN0RGF0YS5xdWVzdGlvbnMubGVuZ3RofTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJBX1Rlc3RRdWVzdGlvblRpdGxlXCI+JHtxdWVzdGlvbi50ZXh0fTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiV19UZXN0Qm9keVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiQ19BbnN3ZXJWYXJpYW50c1wiPlxyXG4gICAgICAgICR7cXVlc3Rpb24uYW5zd2Vyc1xyXG4gICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgKGFuc3dlciwgaW5kZXgpID0+IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIk1fQW5zd2VyVmFyaWFudFwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dF9ib2R5X3RleHRcIj4ke2Fuc3dlci50ZXh0fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBgLFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLmpvaW4oXCJcIil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAke25hdmlnYXRpb25IdG1sfVxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgLy8g0J7QsdGA0LDQsdC+0YLRh9C40LrQuCDQtNC70Y8g0LLQsNGA0LjQsNC90YLQvtCyINC+0YLQstC10YLQvtCyXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5NX0Fuc3dlclZhcmlhbnRcIikuZm9yRWFjaCgodmFyaWFudCkgPT4ge1xyXG4gICAgdmFyaWFudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLk1fQW5zd2VyVmFyaWFudFwiKS5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgc2VsZWN0ZWRBbnN3ZXJJbmRleCA9IHBhcnNlSW50KHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dEJ1dHRvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vINCe0LHRgNCw0LHQvtGC0YfQuNC6INC00LvRjyDQutC90L7Qv9C60LggXCLQlNCw0LvQtdC1IC8g0JfQsNCy0LXRgNGI0LjRgtGMXCJcclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKFwibmV4dEJ1dHRvblwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb1RvTmV4dFF1ZXN0aW9uKTtcclxuXHJcbiAgLy8g0J7QsdGA0LDQsdC+0YLRh9C40LrQuCDQtNC70Y8g0LvQtdCy0L7QuSDQutC90L7Qv9C60LhcclxuICBpZiAoY3VycmVudFF1ZXN0aW9uSW5kZXggPT09IDApIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja0J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLi4vLi4vcGFnZXMvdGVzdHMuaHRtbFwiOyAvLyDQv9GD0YLRjCDQuiDRgdGC0YDQsNC90LjRhtC1INGB0L4g0YHQv9C40YHQutC+0Lwg0YLQtdGB0YLQvtCyXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwicHJldkJ1dHRvblwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvVG9QcmV2aW91c1F1ZXN0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvVG9OZXh0UXVlc3Rpb24oKSB7XHJcbiAgaWYgKHNlbGVjdGVkQW5zd2VySW5kZXggIT09IG51bGwpIHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gdGVzdERhdGEucXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbkluZGV4XTtcclxuICAgIHVzZXJBbnN3ZXJzLnB1c2goe1xyXG4gICAgICBxdWVzdGlvbklkOiBxdWVzdGlvbi5pZCxcclxuICAgICAgYW5zd2VySW5kZXg6IHNlbGVjdGVkQW5zd2VySW5kZXgsXHJcbiAgICAgIGlzQ29ycmVjdDogcXVlc3Rpb24uYW5zd2Vyc1tzZWxlY3RlZEFuc3dlckluZGV4XS5pc0NvcnJlY3QsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0aW9uSW5kZXggPCB0ZXN0RGF0YS5xdWVzdGlvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBjdXJyZW50UXVlc3Rpb25JbmRleCsrO1xyXG4gICAgICByZW5kZXJRdWVzdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1Jlc3VsdHMoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvVG9QcmV2aW91c1F1ZXN0aW9uKCkge1xyXG4gIGlmIChjdXJyZW50UXVlc3Rpb25JbmRleCA+IDApIHtcclxuICAgIC8vINCj0LTQsNC70Y/QtdC8INC+0YLQstC10YIg0L3QsCDRgtC10LrRg9GJ0LjQuSDQstC+0L/RgNC+0YEsINC10YHQu9C4INC+0L0g0LHRi9C7INGB0L7RhdGA0LDQvdGR0L1cclxuICAgIGlmICh1c2VyQW5zd2Vycy5sZW5ndGggPiBjdXJyZW50UXVlc3Rpb25JbmRleCkge1xyXG4gICAgICB1c2VyQW5zd2Vycy5wb3AoKTtcclxuICAgIH1cclxuICAgIGN1cnJlbnRRdWVzdGlvbkluZGV4LS07XHJcbiAgICByZW5kZXJRdWVzdGlvbigpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Jlc3VsdHMoKSB7XHJcbiAgY29uc3QgY29ycmVjdEFuc3dlcnMgPSB1c2VyQW5zd2Vycy5maWx0ZXIoXHJcbiAgICAoYW5zd2VyKSA9PiBhbnN3ZXIuaXNDb3JyZWN0LFxyXG4gICkubGVuZ3RoO1xyXG4gIGNvbnN0IHJlc3VsdCA9IHRlc3REYXRhLnJlc3VsdHMuZmluZChcclxuICAgIChyKSA9PiBjb3JyZWN0QW5zd2VycyA+PSByLm1pblNjb3JlICYmIGNvcnJlY3RBbnN3ZXJzIDw9IHIubWF4U2NvcmUsXHJcbiAgKTtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJXX3Rlc3RfY29udGFpbmVyXCIpLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJXX1Jlc3VsdENvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIk1fVGVzdFF1ZXN0aW9uQ291bnRlclwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dF9idXR0b25fdGV4dFwiPtCg0LXQt9GD0LvRjNGC0LDRgjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJXX1Jlc3VsdFRleHRcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJBX1Jlc3VsdFRpdGxlXCI+JHtyZXN1bHQudGl0bGV9PC9oMT5cclxuICAgICAgICA8cCBjbGFzcz1cInRleHRfYm9keV90ZXh0IEFfUmVzdWx0RGVzY3JpcHRpb25cIj4ke3Jlc3VsdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiV19SZXN1bHRJbWFnZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHtyZXN1bHQuaW1hZ2V9XCIgYWx0PVwiJHtyZXN1bHQuY2FwdGlvbn1cIiBjbGFzcz1cIkFfUmVzdWx0SW1hZ2VcIiAvPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiQV9SZXN1bHRDYXB0aW9uIHRleHRfYm9keV90ZXh0XCI+JHtyZXN1bHQuY2FwdGlvbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiV19SZXN1bHRCdXR0b25zXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIi4uLy4uL3BhZ2VzL3Rlc3RzLmh0bWxcIiBjbGFzcz1cIkFfQmFja1RvVGVzdHNCdXR0b24gdGV4dF9idXR0b25fdGV4dFwiPtCf0YDQvtC50YLQuCDQtNGA0YPQs9C40LUg0YLQtdGB0YLRizwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByZW5kZXJRdWVzdGlvbik7XHJcbiJdLCJuYW1lcyI6WyJpdEltYWdlIiwic2hpbmluZ0ltYWdlIiwidGVzdERhdGEiLCJ0aXRsZSIsInF1ZXN0aW9ucyIsImlkIiwidGV4dCIsImFuc3dlcnMiLCJpc0NvcnJlY3QiLCJyZXN1bHRzIiwibWluU2NvcmUiLCJtYXhTY29yZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJjYXB0aW9uIiwiY3VycmVudFF1ZXN0aW9uSW5kZXgiLCJ1c2VyQW5zd2VycyIsInNlbGVjdGVkQW5zd2VySW5kZXgiLCJyZW5kZXJRdWVzdGlvbiIsInF1ZXN0aW9uIiwiaXNMYXN0UXVlc3Rpb24iLCJsZW5ndGgiLCJuYXZpZ2F0aW9uSHRtbCIsImNvbmNhdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJtYXAiLCJhbnN3ZXIiLCJpbmRleCIsImpvaW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInZhcmlhbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidiIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJnb1RvTmV4dFF1ZXN0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZ29Ub1ByZXZpb3VzUXVlc3Rpb24iLCJwdXNoIiwicXVlc3Rpb25JZCIsImFuc3dlckluZGV4Iiwic2hvd1Jlc3VsdHMiLCJwb3AiLCJjb3JyZWN0QW5zd2VycyIsImZpbHRlciIsInJlc3VsdCIsImZpbmQiLCJyIl0sInNvdXJjZVJvb3QiOiIifQ==