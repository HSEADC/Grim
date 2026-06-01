/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/tests/Q_Body.webp":
/*!**************************************!*\
  !*** ./src/images/tests/Q_Body.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/7bbcde09d20be85c2bd8.webp";

/***/ }),

/***/ "./src/images/tests/Q_Cosmic.webp":
/*!****************************************!*\
  !*** ./src/images/tests/Q_Cosmic.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/e8ba2b9f350717bc0a4a.webp";

/***/ }),

/***/ "./src/images/tests/Q_Psychological.webp":
/*!***********************************************!*\
  !*** ./src/images/tests/Q_Psychological.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/03463dade381e1f988c3.webp";

/***/ }),

/***/ "./src/images/tests/Q_Supernatural.webp":
/*!**********************************************!*\
  !*** ./src/images/tests/Q_Supernatural.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/364099561b51102667a3.webp";

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
/*!**********************************************************!*\
  !*** ./src/javascripts/test1suitable-horror-subgenre.js ***!
  \**********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_test1_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/test1.css */ "./src/stylesheets/test1.css");
/* harmony import */ var _images_tests_Q_Psychological_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/tests/Q_Psychological.webp */ "./src/images/tests/Q_Psychological.webp");
/* harmony import */ var _images_tests_Q_Supernatural_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/tests/Q_Supernatural.webp */ "./src/images/tests/Q_Supernatural.webp");
/* harmony import */ var _images_tests_Q_Cosmic_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/tests/Q_Cosmic.webp */ "./src/images/tests/Q_Cosmic.webp");
/* harmony import */ var _images_tests_Q_Body_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/tests/Q_Body.webp */ "./src/images/tests/Q_Body.webp");





var testData = {
  questions: [{
    id: 1,
    text: "Какая ситуация пугает вас сильнее всего?",
    answers: ["Понять, что реальность вокруг может быть иллюзией, а ваш разум — нет", "Столкнуться с необъяснимым сверхъестественным явлением", "Узнать, что существуют древние силы, для которых люди — ничто", "Осознать, что ваше тело начинает меняться или разрушаться"]
  }, {
    id: 2,
    text: "Где происходит идеальная хоррор-история?",
    answers: ["В обычном городе или доме, где постепенно что-то начинает идти не так", "В старом доме, лесу или месте с проклятой историей", "В неизвестной зоне, космосе или месте, связанном с чем-то древним", "В лаборатории, больнице или месте жестоких экспериментов"]
  }, {
    id: 3,
    text: "Что делает историю страшной именно для вас?",
    answers: ["Медленное психологическое напряжение и паранойя", "Призраки, демоны или проклятия, которые невозможно объяснить", "Осознание масштаба вселенной и ничтожности человека", "Физические трансформации, паразиты, мутации живых существ"]
  }, {
    id: 4,
    text: "Какой финал кажется вам самым сильным?",
    answers: ["Герой понимает, что сам становится частью безумия", "Зло не побеждено и продолжает существовать где-то рядом", "Герой узнаёт ужасную правду о природе реальности", "Герой теряет своё тело, внешний облик или саму человечность"]
  }, {
    id: 5,
    text: "Какой страх кажется наиболее реалистичным?",
    answers: ["Потерять контроль над собственным разумом, начать сомневаться в том, что реально", "Столкнуться с чем-то потусторонним, нереальным", "Узнать, что мир устроен намного страшнее, чем кажется", "Потерять контроль над собственным телом и обликом"]
  }],
  results: [{
    index: 0,
    // соответствует верхнему левому ответу
    title: "Психологический хоррор",
    description: "Этот поджанр хоррора исследует \nвнутреннее состояние персонажа: \nстрах и паранойя становятся \nосновными источниками ужаса",
    image: _images_tests_Q_Psychological_webp__WEBPACK_IMPORTED_MODULE_1__,
    caption: "«Прочь» (Get Out, 2017)"
  }, {
    index: 1,
    // верхний правый
    title: "Сверхъестественный хоррор",
    description: "Здесь страх связан с силами, выходящими \nза пределы обычной реальности, \nкогда могут появляться призраки или другие \nпотусторонние сущности",
    image: _images_tests_Q_Supernatural_webp__WEBPACK_IMPORTED_MODULE_2__,
    caption: "«Синистер 2» (Sinister 2, 2015)"
  }, {
    index: 2,
    // нижний левый
    title: "Космический хоррор",
    description: "Этот поджанр раскрывает вселенную. \nУжас возникает из-за столкновения \nс непостижимыми силами \nили знаниями",
    image: _images_tests_Q_Cosmic_webp__WEBPACK_IMPORTED_MODULE_3__,
    caption: "«Чужой: Ромул» (Alien: Romulus, 2024)"
  }, {
    index: 3,
    // нижний правый
    title: "Боди-хоррор",
    description: "В центре этого поджанра — изменения \nи искажения человеческого тела. Герои \nмогут сталкиваться с мутациями, \nболезнями или экспериментами",
    image: _images_tests_Q_Body_webp__WEBPACK_IMPORTED_MODULE_4__,
    caption: "«Субстанция» (The Substance, 2024)"
  }]
};
var currentQuestionIndex = 0;
var userAnswers = []; // здесь будем хранить индексы выбранных ответов (0-3)
var selectedAnswerIndex = null;
function renderQuestion() {
  var question = testData.questions[currentQuestionIndex];
  selectedAnswerIndex = null;
  var isLastQuestion = currentQuestionIndex === testData.questions.length - 1;
  var navigationHtml;
  if (currentQuestionIndex === 0) {
    navigationHtml = "\n      <div class=\"W_TestNavigation\">\n        <button class=\"A_TestPrevButton text_button_text\" id=\"backButton\">\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434</button>\n        <button class=\"A_TestNextButton text_button_text\" id=\"nextButton\" disabled>\n          \u0414\u0430\u043B\u0435\u0435\n        </button>\n      </div>\n    ";
  } else {
    navigationHtml = "\n      <div class=\"W_TestNavigation\">\n        <button class=\"A_TestPrevButton text_button_text\" id=\"prevButton\">\u041D\u0430\u0437\u0430\u0434</button>\n        <button class=\"A_TestNextButton text_button_text\" id=\"nextButton\" disabled>\n          ".concat(isLastQuestion ? "Завершить" : "Далее", "\n        </button>\n      </div>\n    ");
  }
  document.getElementById("W_test_container").innerHTML = "\n    <div class=\"W_TestHeading\">\n      <div class=\"W_TestQuestion\">\n        <div class=\"M_TestQuestionCounter\">\n          <p class=\"text_button_text\">\u0412\u043E\u043F\u0440\u043E\u0441 <span>".concat(currentQuestionIndex + 1, "</span> \u0438\u0437 ").concat(testData.questions.length, "</p>\n        </div>\n        <h2 class=\"A_TestQuestionTitle\">").concat(question.text, "</h2>\n      </div>\n    </div>\n    <div class=\"W_TestBody\">\n      <div class=\"C_AnswerVariants\">\n        ").concat(question.answers.map(function (answer, index) {
    return "\n            <div class=\"M_AnswerVariant\" data-index=\"".concat(index, "\">\n              <p class=\"text_body_text\">").concat(answer, "</p>\n            </div>\n          ");
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
    userAnswers.push(selectedAnswerIndex);
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
    // Удаляем последний сохранённый ответ (он относится к текущему вопросу, который мы покидаем)
    if (userAnswers.length > currentQuestionIndex) {
      userAnswers.pop();
    }
    currentQuestionIndex--;
    renderQuestion();
  }
}
function showResults() {
  // Подсчитываем, какой индекс ответа выбирался чаще всего
  var counts = [0, 0, 0, 0];
  userAnswers.forEach(function (ansIndex) {
    counts[ansIndex] += 1;
  });

  // Находим индекс с максимальным количеством (если несколько – берём первый)
  var maxCount = -1;
  var resultIndex = 0;
  counts.forEach(function (count, idx) {
    if (count > maxCount) {
      maxCount = count;
      resultIndex = idx;
    }
  });
  var result = testData.results.find(function (r) {
    return r.index === resultIndex;
  }) || testData.results[0];
  document.getElementById("W_test_container").innerHTML = "\n    <div class=\"W_ResultContent\">\n      <div class=\"M_TestQuestionCounter\">\n        <p class=\"text_button_text\">\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442</p>\n      </div>\n      <div class=\"W_ResultText\">\n        <h1 class=\"A_ResultTitle\">".concat(result.title, "</h1>\n        <p class=\"text_body_text A_ResultDescription\">").concat(result.description, "</p>\n      </div>\n      <div class=\"W_ResultImage\">\n        <img src=\"").concat(result.image, "\" alt=\"").concat(result.caption, "\" class=\"A_ResultImage\" />\n        <p class=\"A_ResultCaption text_body_text\">").concat(result.caption, "</p>\n      </div>\n      <div class=\"W_ResultButtons\">\n        <a href=\"../../pages/tests.html\" class=\"A_BackToTestsButton text_button_text\">\u041F\u0440\u043E\u0439\u0442\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u0435\u0441\u0442\u044B</a>\n      </div>\n    </div>\n  ");
}
document.addEventListener("DOMContentLoaded", renderQuestion);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0ZBQUFXLE1BQUEsQ0FHdERnQyxNQUFNLENBQUMxQyxLQUFLLGVBQUFVLE1BQUEsQ0FBVWdDLE1BQU0sQ0FBQ3pDLE9BQU8seUZBQUFTLE1BQUEsQ0FDSmdDLE1BQU0sQ0FBQ3pDLE9BQU8sb1NBTS9EO0FBQ0g7QUFFQVUsUUFBUSxDQUFDUyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRWYsY0FBYyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdHVkeS8uL3NyYy9zdHlsZXNoZWV0cy90ZXN0MS5jc3M/YTIzYiIsIndlYnBhY2s6Ly9TdHVkeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9TdHVkeS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1N0dWR5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vU3R1ZHkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vU3R1ZHkvLi9zcmMvamF2YXNjcmlwdHMvdGVzdDFzdWl0YWJsZS1ob3Jyb3Itc3ViZ2VucmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi4vc3R5bGVzaGVldHMvdGVzdDEuY3NzXCI7XHJcblxyXG5pbXBvcnQgcHN5Y2hvSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy90ZXN0cy9RX1BzeWNob2xvZ2ljYWwud2VicFwiO1xyXG5pbXBvcnQgc3VwZXJJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL3Rlc3RzL1FfU3VwZXJuYXR1cmFsLndlYnBcIjtcclxuaW1wb3J0IGNvc21pY0ltYWdlIGZyb20gXCIuLi9pbWFnZXMvdGVzdHMvUV9Db3NtaWMud2VicFwiO1xyXG5pbXBvcnQgYm9keUltYWdlIGZyb20gXCIuLi9pbWFnZXMvdGVzdHMvUV9Cb2R5LndlYnBcIjtcclxuY29uc3QgdGVzdERhdGEgPSB7XHJcbiAgcXVlc3Rpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICB0ZXh0OiBcItCa0LDQutCw0Y8g0YHQuNGC0YPQsNGG0LjRjyDQv9GD0LPQsNC10YIg0LLQsNGBINGB0LjQu9GM0L3QtdC1INCy0YHQtdCz0L4/XCIsXHJcbiAgICAgIGFuc3dlcnM6IFtcclxuICAgICAgICBcItCf0L7QvdGP0YLRjCwg0YfRgtC+INGA0LXQsNC70YzQvdC+0YHRgtGMINCy0L7QutGA0YPQsyDQvNC+0LbQtdGCINCx0YvRgtGMINC40LvQu9GO0LfQuNC10LksINCwINCy0LDRiCDRgNCw0LfRg9C8IOKAlCDQvdC10YJcIixcclxuICAgICAgICBcItCh0YLQvtC70LrQvdGD0YLRjNGB0Y8g0YEg0L3QtdC+0LHRitGP0YHQvdC40LzRi9C8INGB0LLQtdGA0YXRitC10YHRgtC10YHRgtCy0LXQvdC90YvQvCDRj9Cy0LvQtdC90LjQtdC8XCIsXHJcbiAgICAgICAgXCLQo9C30L3QsNGC0YwsINGH0YLQviDRgdGD0YnQtdGB0YLQstGD0Y7RgiDQtNGA0LXQstC90LjQtSDRgdC40LvRiywg0LTQu9GPINC60L7RgtC+0YDRi9GFINC70Y7QtNC4IOKAlCDQvdC40YfRgtC+XCIsXHJcbiAgICAgICAgXCLQntGB0L7Qt9C90LDRgtGMLCDRh9GC0L4g0LLQsNGI0LUg0YLQtdC70L4g0L3QsNGH0LjQvdCw0LXRgiDQvNC10L3Rj9GC0YzRgdGPINC40LvQuCDRgNCw0LfRgNGD0YjQsNGC0YzRgdGPXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgdGV4dDogXCLQk9C00LUg0L/RgNC+0LjRgdGF0L7QtNC40YIg0LjQtNC10LDQu9GM0L3QsNGPINGF0L7RgNGA0L7RgC3QuNGB0YLQvtGA0LjRjz9cIixcclxuICAgICAgYW5zd2VyczogW1xyXG4gICAgICAgIFwi0JIg0L7QsdGL0YfQvdC+0Lwg0LPQvtGA0L7QtNC1INC40LvQuCDQtNC+0LzQtSwg0LPQtNC1INC/0L7RgdGC0LXQv9C10L3QvdC+INGH0YLQvi3RgtC+INC90LDRh9C40L3QsNC10YIg0LjQtNGC0Lgg0L3QtSDRgtCw0LpcIixcclxuICAgICAgICBcItCSINGB0YLQsNGA0L7QvCDQtNC+0LzQtSwg0LvQtdGB0YMg0LjQu9C4INC80LXRgdGC0LUg0YEg0L/RgNC+0LrQu9GP0YLQvtC5INC40YHRgtC+0YDQuNC10LlcIixcclxuICAgICAgICBcItCSINC90LXQuNC30LLQtdGB0YLQvdC+0Lkg0LfQvtC90LUsINC60L7RgdC80L7RgdC1INC40LvQuCDQvNC10YHRgtC1LCDRgdCy0Y/Qt9Cw0L3QvdC+0Lwg0YEg0YfQtdC8LdGC0L4g0LTRgNC10LLQvdC40LxcIixcclxuICAgICAgICBcItCSINC70LDQsdC+0YDQsNGC0L7RgNC40LgsINCx0L7Qu9GM0L3QuNGG0LUg0LjQu9C4INC80LXRgdGC0LUg0LbQtdGB0YLQvtC60LjRhSDRjdC60YHQv9C10YDQuNC80LXQvdGC0L7QslwiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIHRleHQ6IFwi0KfRgtC+INC00LXQu9Cw0LXRgiDQuNGB0YLQvtGA0LjRjiDRgdGC0YDQsNGI0L3QvtC5INC40LzQtdC90L3QviDQtNC70Y8g0LLQsNGBP1wiLFxyXG4gICAgICBhbnN3ZXJzOiBbXHJcbiAgICAgICAgXCLQnNC10LTQu9C10L3QvdC+0LUg0L/RgdC40YXQvtC70L7Qs9C40YfQtdGB0LrQvtC1INC90LDQv9GA0Y/QttC10L3QuNC1INC4INC/0LDRgNCw0L3QvtC50Y9cIixcclxuICAgICAgICBcItCf0YDQuNC30YDQsNC60LgsINC00LXQvNC+0L3RiyDQuNC70Lgg0L/RgNC+0LrQu9GP0YLQuNGPLCDQutC+0YLQvtGA0YvQtSDQvdC10LLQvtC30LzQvtC20L3QviDQvtCx0YrRj9GB0L3QuNGC0YxcIixcclxuICAgICAgICBcItCe0YHQvtC30L3QsNC90LjQtSDQvNCw0YHRiNGC0LDQsdCwINCy0YHQtdC70LXQvdC90L7QuSDQuCDQvdC40YfRgtC+0LbQvdC+0YHRgtC4INGH0LXQu9C+0LLQtdC60LBcIixcclxuICAgICAgICBcItCk0LjQt9C40YfQtdGB0LrQuNC1INGC0YDQsNC90YHRhNC+0YDQvNCw0YbQuNC4LCDQv9Cw0YDQsNC30LjRgtGLLCDQvNGD0YLQsNGG0LjQuCDQttC40LLRi9GFINGB0YPRidC10YHRgtCyXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNCxcclxuICAgICAgdGV4dDogXCLQmtCw0LrQvtC5INGE0LjQvdCw0Lsg0LrQsNC20LXRgtGB0Y8g0LLQsNC8INGB0LDQvNGL0Lwg0YHQuNC70YzQvdGL0Lw/XCIsXHJcbiAgICAgIGFuc3dlcnM6IFtcclxuICAgICAgICBcItCT0LXRgNC+0Lkg0L/QvtC90LjQvNCw0LXRgiwg0YfRgtC+INGB0LDQvCDRgdGC0LDQvdC+0LLQuNGC0YHRjyDRh9Cw0YHRgtGM0Y4g0LHQtdC30YPQvNC40Y9cIixcclxuICAgICAgICBcItCX0LvQviDQvdC1INC/0L7QsdC10LbQtNC10L3QviDQuCDQv9GA0L7QtNC+0LvQttCw0LXRgiDRgdGD0YnQtdGB0YLQstC+0LLQsNGC0Ywg0LPQtNC1LdGC0L4g0YDRj9C00L7QvFwiLFxyXG4gICAgICAgIFwi0JPQtdGA0L7QuSDRg9C30L3QsNGR0YIg0YPQttCw0YHQvdGD0Y4g0L/RgNCw0LLQtNGDINC+INC/0YDQuNGA0L7QtNC1INGA0LXQsNC70YzQvdC+0YHRgtC4XCIsXHJcbiAgICAgICAgXCLQk9C10YDQvtC5INGC0LXRgNGP0LXRgiDRgdCy0L7RkSDRgtC10LvQviwg0LLQvdC10YjQvdC40Lkg0L7QsdC70LjQuiDQuNC70Lgg0YHQsNC80YMg0YfQtdC70L7QstC10YfQvdC+0YHRgtGMXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNSxcclxuICAgICAgdGV4dDogXCLQmtCw0LrQvtC5INGB0YLRgNCw0YUg0LrQsNC20LXRgtGB0Y8g0L3QsNC40LHQvtC70LXQtSDRgNC10LDQu9C40YHRgtC40YfQvdGL0Lw/XCIsXHJcbiAgICAgIGFuc3dlcnM6IFtcclxuICAgICAgICBcItCf0L7RgtC10YDRj9GC0Ywg0LrQvtC90YLRgNC+0LvRjCDQvdCw0LQg0YHQvtCx0YHRgtCy0LXQvdC90YvQvCDRgNCw0LfRg9C80L7QvCwg0L3QsNGH0LDRgtGMINGB0L7QvNC90LXQstCw0YLRjNGB0Y8g0LIg0YLQvtC8LCDRh9GC0L4g0YDQtdCw0LvRjNC90L5cIixcclxuICAgICAgICBcItCh0YLQvtC70LrQvdGD0YLRjNGB0Y8g0YEg0YfQtdC8LdGC0L4g0L/QvtGC0YPRgdGC0L7RgNC+0L3QvdC40LwsINC90LXRgNC10LDQu9GM0L3Ri9C8XCIsXHJcbiAgICAgICAgXCLQo9C30L3QsNGC0YwsINGH0YLQviDQvNC40YAg0YPRgdGC0YDQvtC10L0g0L3QsNC80L3QvtCz0L4g0YHRgtGA0LDRiNC90LXQtSwg0YfQtdC8INC60LDQttC10YLRgdGPXCIsXHJcbiAgICAgICAgXCLQn9C+0YLQtdGA0Y/RgtGMINC60L7QvdGC0YDQvtC70Ywg0L3QsNC0INGB0L7QsdGB0YLQstC10L3QvdGL0Lwg0YLQtdC70L7QvCDQuCDQvtCx0LvQuNC60L7QvFwiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIHJlc3VsdHM6IFtcclxuICAgIHtcclxuICAgICAgaW5kZXg6IDAsIC8vINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCINCy0LXRgNGF0L3QtdC80YMg0LvQtdCy0L7QvNGDINC+0YLQstC10YLRg1xyXG4gICAgICB0aXRsZTogXCLQn9GB0LjRhdC+0LvQvtCz0LjRh9C10YHQutC40Lkg0YXQvtGA0YDQvtGAXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwi0K3RgtC+0YIg0L/QvtC00LbQsNC90YAg0YXQvtGA0YDQvtGA0LAg0LjRgdGB0LvQtdC00YPQtdGCIFxcbtCy0L3Rg9GC0YDQtdC90L3QtdC1INGB0L7RgdGC0L7Rj9C90LjQtSDQv9C10YDRgdC+0L3QsNC20LA6IFxcbtGB0YLRgNCw0YUg0Lgg0L/QsNGA0LDQvdC+0LnRjyDRgdGC0LDQvdC+0LLRj9GC0YHRjyBcXG7QvtGB0L3QvtCy0L3Ri9C80Lgg0LjRgdGC0L7Rh9C90LjQutCw0LzQuCDRg9C20LDRgdCwXCIsXHJcbiAgICAgIGltYWdlOiBwc3ljaG9JbWFnZSxcclxuICAgICAgY2FwdGlvbjogXCLCq9Cf0YDQvtGH0YzCuyAoR2V0IE91dCwgMjAxNylcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGluZGV4OiAxLCAvLyDQstC10YDRhdC90LjQuSDQv9GA0LDQstGL0LlcclxuICAgICAgdGl0bGU6IFwi0KHQstC10YDRhdGK0LXRgdGC0LXRgdGC0LLQtdC90L3Ri9C5INGF0L7RgNGA0L7RgFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcItCX0LTQtdGB0Ywg0YHRgtGA0LDRhSDRgdCy0Y/Qt9Cw0L0g0YEg0YHQuNC70LDQvNC4LCDQstGL0YXQvtC00Y/RidC40LzQuCBcXG7Qt9CwINC/0YDQtdC00LXQu9GLINC+0LHRi9GH0L3QvtC5INGA0LXQsNC70YzQvdC+0YHRgtC4LCBcXG7QutC+0LPQtNCwINC80L7Qs9GD0YIg0L/QvtGP0LLQu9GP0YLRjNGB0Y8g0L/RgNC40LfRgNCw0LrQuCDQuNC70Lgg0LTRgNGD0LPQuNC1IFxcbtC/0L7RgtGD0YHRgtC+0YDQvtC90L3QuNC1INGB0YPRidC90L7RgdGC0LhcIixcclxuICAgICAgaW1hZ2U6IHN1cGVySW1hZ2UsXHJcbiAgICAgIGNhcHRpb246IFwiwqvQodC40L3QuNGB0YLQtdGAIDLCuyAoU2luaXN0ZXIgMiwgMjAxNSlcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGluZGV4OiAyLCAvLyDQvdC40LbQvdC40Lkg0LvQtdCy0YvQuVxyXG4gICAgICB0aXRsZTogXCLQmtC+0YHQvNC40YfQtdGB0LrQuNC5INGF0L7RgNGA0L7RgFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcItCt0YLQvtGCINC/0L7QtNC20LDQvdGAINGA0LDRgdC60YDRi9Cy0LDQtdGCINCy0YHQtdC70LXQvdC90YPRji4gXFxu0KPQttCw0YEg0LLQvtC30L3QuNC60LDQtdGCINC40Lct0LfQsCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40Y8gXFxu0YEg0L3QtdC/0L7RgdGC0LjQttC40LzRi9C80Lgg0YHQuNC70LDQvNC4IFxcbtC40LvQuCDQt9C90LDQvdC40Y/QvNC4XCIsXHJcbiAgICAgIGltYWdlOiBjb3NtaWNJbWFnZSxcclxuICAgICAgY2FwdGlvbjogXCLCq9Cn0YPQttC+0Lk6INCg0L7QvNGD0LvCuyAoQWxpZW46IFJvbXVsdXMsIDIwMjQpXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbmRleDogMywgLy8g0L3QuNC20L3QuNC5INC/0YDQsNCy0YvQuVxyXG4gICAgICB0aXRsZTogXCLQkdC+0LTQuC3RhdC+0YDRgNC+0YBcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCLQkiDRhtC10L3RgtGA0LUg0Y3RgtC+0LPQviDQv9C+0LTQttCw0L3RgNCwIOKAlCDQuNC30LzQtdC90LXQvdC40Y8gXFxu0Lgg0LjRgdC60LDQttC10L3QuNGPINGH0LXQu9C+0LLQtdGH0LXRgdC60L7Qs9C+INGC0LXQu9CwLiDQk9C10YDQvtC4IFxcbtC80L7Qs9GD0YIg0YHRgtCw0LvQutC40LLQsNGC0YzRgdGPINGBINC80YPRgtCw0YbQuNGP0LzQuCwgXFxu0LHQvtC70LXQt9C90Y/QvNC4INC40LvQuCDRjdC60YHQv9C10YDQuNC80LXQvdGC0LDQvNC4XCIsXHJcbiAgICAgIGltYWdlOiBib2R5SW1hZ2UsXHJcbiAgICAgIGNhcHRpb246IFwiwqvQodGD0LHRgdGC0LDQvdGG0LjRj8K7IChUaGUgU3Vic3RhbmNlLCAyMDI0KVwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxubGV0IGN1cnJlbnRRdWVzdGlvbkluZGV4ID0gMDtcclxubGV0IHVzZXJBbnN3ZXJzID0gW107IC8vINC30LTQtdGB0Ywg0LHRg9C00LXQvCDRhdGA0LDQvdC40YLRjCDQuNC90LTQtdC60YHRiyDQstGL0LHRgNCw0L3QvdGL0YUg0L7RgtCy0LXRgtC+0LIgKDAtMylcclxubGV0IHNlbGVjdGVkQW5zd2VySW5kZXggPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyUXVlc3Rpb24oKSB7XHJcbiAgY29uc3QgcXVlc3Rpb24gPSB0ZXN0RGF0YS5xdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdO1xyXG4gIHNlbGVjdGVkQW5zd2VySW5kZXggPSBudWxsO1xyXG4gIGNvbnN0IGlzTGFzdFF1ZXN0aW9uID0gY3VycmVudFF1ZXN0aW9uSW5kZXggPT09IHRlc3REYXRhLnF1ZXN0aW9ucy5sZW5ndGggLSAxO1xyXG5cclxuICBsZXQgbmF2aWdhdGlvbkh0bWw7XHJcbiAgaWYgKGN1cnJlbnRRdWVzdGlvbkluZGV4ID09PSAwKSB7XHJcbiAgICBuYXZpZ2F0aW9uSHRtbCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cIldfVGVzdE5hdmlnYXRpb25cIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiQV9UZXN0UHJldkJ1dHRvbiB0ZXh0X2J1dHRvbl90ZXh0XCIgaWQ9XCJiYWNrQnV0dG9uXCI+0JLQtdGA0L3Rg9GC0YzRgdGPINC90LDQt9Cw0LQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiQV9UZXN0TmV4dEJ1dHRvbiB0ZXh0X2J1dHRvbl90ZXh0XCIgaWQ9XCJuZXh0QnV0dG9uXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICDQlNCw0LvQtdC1XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2aWdhdGlvbkh0bWwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJXX1Rlc3ROYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIkFfVGVzdFByZXZCdXR0b24gdGV4dF9idXR0b25fdGV4dFwiIGlkPVwicHJldkJ1dHRvblwiPtCd0LDQt9Cw0LQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiQV9UZXN0TmV4dEJ1dHRvbiB0ZXh0X2J1dHRvbl90ZXh0XCIgaWQ9XCJuZXh0QnV0dG9uXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAke2lzTGFzdFF1ZXN0aW9uID8gXCLQl9Cw0LLQtdGA0YjQuNGC0YxcIiA6IFwi0JTQsNC70LXQtVwifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIldfdGVzdF9jb250YWluZXJcIikuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cIldfVGVzdEhlYWRpbmdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIldfVGVzdFF1ZXN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIk1fVGVzdFF1ZXN0aW9uQ291bnRlclwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0X2J1dHRvbl90ZXh0XCI+0JLQvtC/0YDQvtGBIDxzcGFuPiR7Y3VycmVudFF1ZXN0aW9uSW5kZXggKyAxfTwvc3Bhbj4g0LjQtyAke3Rlc3REYXRhLnF1ZXN0aW9ucy5sZW5ndGh9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMiBjbGFzcz1cIkFfVGVzdFF1ZXN0aW9uVGl0bGVcIj4ke3F1ZXN0aW9uLnRleHR9PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJXX1Rlc3RCb2R5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJDX0Fuc3dlclZhcmlhbnRzXCI+XHJcbiAgICAgICAgJHtxdWVzdGlvbi5hbnN3ZXJzXHJcbiAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAoYW5zd2VyLCBpbmRleCkgPT4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiTV9BbnN3ZXJWYXJpYW50XCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0X2JvZHlfdGV4dFwiPiR7YW5zd2VyfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBgLFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLmpvaW4oXCJcIil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAke25hdmlnYXRpb25IdG1sfVxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5NX0Fuc3dlclZhcmlhbnRcIikuZm9yRWFjaCgodmFyaWFudCkgPT4ge1xyXG4gICAgdmFyaWFudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLk1fQW5zd2VyVmFyaWFudFwiKS5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgc2VsZWN0ZWRBbnN3ZXJJbmRleCA9IHBhcnNlSW50KHRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dEJ1dHRvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0QnV0dG9uXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvVG9OZXh0UXVlc3Rpb24pO1xyXG5cclxuICBpZiAoY3VycmVudFF1ZXN0aW9uSW5kZXggPT09IDApIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja0J1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLi4vLi4vcGFnZXMvdGVzdHMuaHRtbFwiOyAvLyDQv9GD0YLRjCDQuiDRgdC/0LjRgdC60YMg0YLQtdGB0YLQvtCyXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwicHJldkJ1dHRvblwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvVG9QcmV2aW91c1F1ZXN0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvVG9OZXh0UXVlc3Rpb24oKSB7XHJcbiAgaWYgKHNlbGVjdGVkQW5zd2VySW5kZXggIT09IG51bGwpIHtcclxuICAgIHVzZXJBbnN3ZXJzLnB1c2goc2VsZWN0ZWRBbnN3ZXJJbmRleCk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRRdWVzdGlvbkluZGV4IDwgdGVzdERhdGEucXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgY3VycmVudFF1ZXN0aW9uSW5kZXgrKztcclxuICAgICAgcmVuZGVyUXVlc3Rpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNob3dSZXN1bHRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnb1RvUHJldmlvdXNRdWVzdGlvbigpIHtcclxuICBpZiAoY3VycmVudFF1ZXN0aW9uSW5kZXggPiAwKSB7XHJcbiAgICAvLyDQo9C00LDQu9GP0LXQvCDQv9C+0YHQu9C10LTQvdC40Lkg0YHQvtGF0YDQsNC90ZHQvdC90YvQuSDQvtGC0LLQtdGCICjQvtC9INC+0YLQvdC+0YHQuNGC0YHRjyDQuiDRgtC10LrRg9GJ0LXQvNGDINCy0L7Qv9GA0L7RgdGDLCDQutC+0YLQvtGA0YvQuSDQvNGLINC/0L7QutC40LTQsNC10LwpXHJcbiAgICBpZiAodXNlckFuc3dlcnMubGVuZ3RoID4gY3VycmVudFF1ZXN0aW9uSW5kZXgpIHtcclxuICAgICAgdXNlckFuc3dlcnMucG9wKCk7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50UXVlc3Rpb25JbmRleC0tO1xyXG4gICAgcmVuZGVyUXVlc3Rpb24oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dSZXN1bHRzKCkge1xyXG4gIC8vINCf0L7QtNGB0YfQuNGC0YvQstCw0LXQvCwg0LrQsNC60L7QuSDQuNC90LTQtdC60YEg0L7RgtCy0LXRgtCwINCy0YvQsdC40YDQsNC70YHRjyDRh9Cw0YnQtSDQstGB0LXQs9C+XHJcbiAgY29uc3QgY291bnRzID0gWzAsIDAsIDAsIDBdO1xyXG4gIHVzZXJBbnN3ZXJzLmZvckVhY2goKGFuc0luZGV4KSA9PiB7XHJcbiAgICBjb3VudHNbYW5zSW5kZXhdICs9IDE7XHJcbiAgfSk7XHJcblxyXG4gIC8vINCd0LDRhdC+0LTQuNC8INC40L3QtNC10LrRgSDRgSDQvNCw0LrRgdC40LzQsNC70YzQvdGL0Lwg0LrQvtC70LjRh9C10YHRgtCy0L7QvCAo0LXRgdC70Lgg0L3QtdGB0LrQvtC70YzQutC+IOKAkyDQsdC10YDRkdC8INC/0LXRgNCy0YvQuSlcclxuICBsZXQgbWF4Q291bnQgPSAtMTtcclxuICBsZXQgcmVzdWx0SW5kZXggPSAwO1xyXG4gIGNvdW50cy5mb3JFYWNoKChjb3VudCwgaWR4KSA9PiB7XHJcbiAgICBpZiAoY291bnQgPiBtYXhDb3VudCkge1xyXG4gICAgICBtYXhDb3VudCA9IGNvdW50O1xyXG4gICAgICByZXN1bHRJbmRleCA9IGlkeDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVzdWx0ID1cclxuICAgIHRlc3REYXRhLnJlc3VsdHMuZmluZCgocikgPT4gci5pbmRleCA9PT0gcmVzdWx0SW5kZXgpIHx8XHJcbiAgICB0ZXN0RGF0YS5yZXN1bHRzWzBdO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIldfdGVzdF9jb250YWluZXJcIikuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cIldfUmVzdWx0Q29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiTV9UZXN0UXVlc3Rpb25Db3VudGVyXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0X2J1dHRvbl90ZXh0XCI+0KDQtdC30YPQu9GM0YLQsNGCPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIldfUmVzdWx0VGV4dFwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cIkFfUmVzdWx0VGl0bGVcIj4ke3Jlc3VsdC50aXRsZX08L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dF9ib2R5X3RleHQgQV9SZXN1bHREZXNjcmlwdGlvblwiPiR7cmVzdWx0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJXX1Jlc3VsdEltYWdlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke3Jlc3VsdC5pbWFnZX1cIiBhbHQ9XCIke3Jlc3VsdC5jYXB0aW9ufVwiIGNsYXNzPVwiQV9SZXN1bHRJbWFnZVwiIC8+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJBX1Jlc3VsdENhcHRpb24gdGV4dF9ib2R5X3RleHRcIj4ke3Jlc3VsdC5jYXB0aW9ufTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJXX1Jlc3VsdEJ1dHRvbnNcIj5cclxuICAgICAgICA8YSBocmVmPVwiLi4vLi4vcGFnZXMvdGVzdHMuaHRtbFwiIGNsYXNzPVwiQV9CYWNrVG9UZXN0c0J1dHRvbiB0ZXh0X2J1dHRvbl90ZXh0XCI+0J/RgNC+0LnRgtC4INC00YDRg9Cz0LjQtSDRgtC10YHRgtGLPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHJlbmRlclF1ZXN0aW9uKTtcclxuIl0sIm5hbWVzIjpbInBzeWNob0ltYWdlIiwic3VwZXJJbWFnZSIsImNvc21pY0ltYWdlIiwiYm9keUltYWdlIiwidGVzdERhdGEiLCJxdWVzdGlvbnMiLCJpZCIsInRleHQiLCJhbnN3ZXJzIiwicmVzdWx0cyIsImluZGV4IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiY2FwdGlvbiIsImN1cnJlbnRRdWVzdGlvbkluZGV4IiwidXNlckFuc3dlcnMiLCJzZWxlY3RlZEFuc3dlckluZGV4IiwicmVuZGVyUXVlc3Rpb24iLCJxdWVzdGlvbiIsImlzTGFzdFF1ZXN0aW9uIiwibGVuZ3RoIiwibmF2aWdhdGlvbkh0bWwiLCJjb25jYXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibWFwIiwiYW5zd2VyIiwiam9pbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidmFyaWFudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsImdvVG9OZXh0UXVlc3Rpb24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJnb1RvUHJldmlvdXNRdWVzdGlvbiIsInB1c2giLCJzaG93UmVzdWx0cyIsInBvcCIsImNvdW50cyIsImFuc0luZGV4IiwibWF4Q291bnQiLCJyZXN1bHRJbmRleCIsImNvdW50IiwiaWR4IiwicmVzdWx0IiwiZmluZCIsInIiXSwic291cmNlUm9vdCI6IiJ9