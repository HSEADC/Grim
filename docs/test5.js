/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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

;// ./src/images/tests/Q_Saw3.webp
const Q_Saw3_namespaceObject = __webpack_require__.p + "images/a0629f4c55e02cf00390.webp";
;// ./src/images/tests/Q_Saw2.webp
const Q_Saw2_namespaceObject = __webpack_require__.p + "images/942916002dd63434b7bc.webp";
;// ./src/javascripts/test5test-saw.js



var testData = {
  questions: [{
    id: 1,
    text: "Как зовут главного создателя «игр» в кинофраншизе?",
    answers: [{
      text: "Марк Хоффман",
      isCorrect: false
    }, {
      text: "Эрик Мэттьюс",
      isCorrect: false
    }, {
      text: "Джон Крамер",
      isCorrect: true
    }, {
      text: "Лоуренс Гордон",
      isCorrect: false
    }]
  }, {
    id: 2,
    text: "Как называется кукла, через которую передаются послания участникам?",
    answers: [{
      text: "Билли",
      isCorrect: true
    }, {
      text: "Чаки",
      isCorrect: false
    }, {
      text: "Тобин",
      isCorrect: false
    }, {
      text: "Зеп",
      isCorrect: false
    }]
  }, {
    id: 3,
    text: "Кто была одной из первых учениц маньяка, которой тот пытался передать своё видение мира?",
    answers: [{
      text: "Джилл Так",
      isCorrect: false
    }, {
      text: "Линдси Перес",
      isCorrect: false
    }, {
      text: "Памела Дженкинс",
      isCorrect: false
    }, {
      text: "Аманда Янг",
      isCorrect: true
    }]
  }, {
    id: 4,
    text: "Что обычно должны были сделать участники игры, чтобы выжить?",
    answers: [{
      text: "Дождаться полиции",
      isCorrect: false
    }, {
      text: "Найти спрятанный маньяком предмет",
      isCorrect: false
    }, {
      text: "Искренне просить пощады",
      isCorrect: false
    }, {
      text: "Пройти испытания",
      isCorrect: true
    }]
  }, {
    id: 5,
    text: "Что часто является особенностью кинофраншизы «Пила»?",
    answers: [{
      text: "Нелинейный монтаж и финальный твист",
      isCorrect: true
    }, {
      text: "Жестокие вставки после каждой ловушки",
      isCorrect: false
    }, {
      text: "Завязка на длинных диалогах",
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
    description: "Вам стоит получше разобраться \nво вселенной Пилы, в чём \nмы с удовольствием поможем!",
    image: Q_Saw2_namespaceObject,
    caption: "«Пила 2» (Saw II, 2005)"
  }, {
    minScore: 3,
    maxScore: 5,
    title: "Большинство ответов верны",
    description: "Вы определённо хорошо разбираетесь \nв данной франшизе, продолжайте \nв том же духе!",
    image: Q_Saw3_namespaceObject,
    caption: "«Пила 3» (Saw III, 2006)"
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
    navigationHtml = "\n      <div class=\"W_TestNavigation\">\n        <button class=\"A_TestPrevButton text_button_text\" id=\"backButton\">\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434</button>\n        <button class=\"A_TestNextButton text_button_text\" id=\"nextButton\" disabled>\n          \u0414\u0430\u043B\u0435\u0435\n        </button>\n      </div>\n    ";
  } else {
    navigationHtml = "\n      <div class=\"W_TestNavigation\">\n        <button class=\"A_TestPrevButton text_button_text\" id=\"prevButton\">\u041D\u0430\u0437\u0430\u0434</button>\n        <button class=\"A_TestNextButton text_button_text\" id=\"nextButton\" disabled>\n          ".concat(isLastQuestion ? "Завершить" : "Далее", "\n        </button>\n      </div>\n    ");
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
/******/ })()
;