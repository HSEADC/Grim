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

;// ./src/images/tests/Q_ResultIt.webp
const Q_ResultIt_namespaceObject = __webpack_require__.p + "images/b7552f16341aa62bcedb.webp";
;// ./src/images/tests/Q_ResultShining.webp
const Q_ResultShining_namespaceObject = __webpack_require__.p + "images/8e08495673c0ff94f145.webp";
;// ./src/javascripts/test2knowledge-popular-horrors.js



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
    image: Q_ResultIt_namespaceObject,
    caption: "«Оно» (It, 2017)"
  }, {
    minScore: 3,
    maxScore: 6,
    title: "Большинство ответов верны",
    description: "Вы определённо хорошо разбираетесь \nв хоррорах, продолжайте\n в том же духе!",
    image: Q_ResultShining_namespaceObject,
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
/******/ })()
;