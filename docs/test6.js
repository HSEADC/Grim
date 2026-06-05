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

;// ./src/images/tests/Q_Substance_correct.webp
const Q_Substance_correct_namespaceObject = __webpack_require__.p + "images/f264dab0119ce378846e.webp";
;// ./src/images/tests/Q_Substance_incorrect.webp
const Q_Substance_incorrect_namespaceObject = __webpack_require__.p + "images/3f51e4dfbeed3d8b6189.webp";
;// ./src/javascripts/test6substance.js



var testData = {
  questions: [{
    id: 1,
    text: "Какую проблему пытается решить главная героиня с помощью «субстанции»?",
    answers: [{
      text: "Потерю памяти",
      isCorrect: false
    }, {
      text: "Финансовые долги",
      isCorrect: false
    }, {
      text: "Болезнь сердца",
      isCorrect: false
    }, {
      text: "Страх старения и утраты популярности",
      isCorrect: true
    }]
  }, {
    id: 2,
    text: "Какое главное правило использования вещества нарушается в фильме?",
    answers: [{
      text: "Нельзя использовать его ночью",
      isCorrect: false
    }, {
      text: "Нельзя рассказывать о нём другим",
      isCorrect: false
    }, {
      text: "Соблюдать баланс времени между телами",
      isCorrect: true
    }, {
      text: "Нужно принимать его только с едой",
      isCorrect: false
    }]
  }, {
    id: 3,
    text: "Что символизирует образ молодой версии героини?",
    answers: [{
      text: "Свободу от общества",
      isCorrect: false
    }, {
      text: "Абсолютное зло",
      isCorrect: false
    }, {
      text: "Идеализированную внешность",
      isCorrect: true
    }, {
      text: "Детские воспоминания героини",
      isCorrect: false
    }]
  }, {
    id: 4,
    text: "Какие темы поднимает фильм «Субстанция»?",
    answers: [{
      text: "Развитие технологий",
      isCorrect: false
    }, {
      text: "Культ молодости, сексизм и давление",
      isCorrect: true
    }, {
      text: "Семейные конфликты",
      isCorrect: false
    }, {
      text: "Политическую цензуру",
      isCorrect: false
    }]
  }, {
    id: 5,
    text: "Почему финал фильма можно назвать гротескным и гиперболизированным?",
    answers: [{
      text: "Так как телесный ужас доведён до абсурда",
      isCorrect: true
    }, {
      text: "Потому что он полностью реалистичен",
      isCorrect: false
    }, {
      text: "Потому что он снят как комедия",
      isCorrect: false
    }, {
      text: "Так как героиня спокойно принимает судьбу",
      isCorrect: false
    }]
  }],
  results: [{
    minScore: 0,
    maxScore: 2,
    title: "Большинство ответов неверны",
    description: "Вам стоит повнимательнее \nизучить данный фильм, в чём \nмы с удовольствием поможем!",
    image: Q_Substance_incorrect_namespaceObject,
    caption: "«Субстанция» (The Substance, 2024)"
  }, {
    minScore: 3,
    maxScore: 5,
    title: "Большинство ответов верны",
    description: "Вы определённо хорошо знаете \nданный фильм, продолжайте \nв том же духе!",
    image: Q_Substance_correct_namespaceObject,
    caption: "«Субстанция» (The Substance, 2024)"
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
      window.location.href = "../../pages/tests.html";
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