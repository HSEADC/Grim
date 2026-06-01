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

;// ./src/images/tests/Q_Conjuring.webp
const Q_Conjuring_namespaceObject = __webpack_require__.p + "images/58172e5487969159b077.webp";
;// ./src/images/tests/Q_Babadook.webp
const Q_Babadook_namespaceObject = __webpack_require__.p + "images/4b2b439255801a05569b.webp";
;// ./src/images/tests/Q_FinalDestination.webp
const Q_FinalDestination_namespaceObject = __webpack_require__.p + "images/e1ee3a66200ccf8bc89d.webp";
;// ./src/images/tests/Q_Scream.webp
const Q_Scream_namespaceObject = __webpack_require__.p + "images/07ae6082a63a0be775e1.webp";
;// ./src/javascripts/test4easy-to-dive-in.js





var testData = {
  questions: [{
    id: 1,
    text: "Что для тебя самое важное в хорроре?",
    answers: ["Сюжет с загадкой и расследованием", "Пугающая атмосфера, безысходность", "Ощущение внезапной, случайной смерти", "Интересные персонажи, чёрный юмор"]
  }, {
    id: 2,
    text: "Какой тип страха тебе интереснее?",
    answers: ["Призраки, демоны и проклятия", "Нечто непонятное, что сводит с ума", "Смерть, которая находит людей сама", "Маньяк, скрывающийся среди людей"]
  }, {
    id: 3,
    text: "Какая атмосфера тебе ближе?",
    answers: ["Старый дом, семейная история, странные явления", "Тёмная, гнетущая, практически абсолютно безнадёжная", "Обычная жизнь, где внезапно начинают происходить смертельные случайности", "Подростки, вечеринки, телефонные звонки и напряжённая игра в кошки-мышки"]
  }, {
    id: 4,
    text: "Насколько сильные ужасы ты готов выдержать?",
    answers: ["Средние: страшно, но без жёсткой жести", "Очень тяжёлые и пугающие", "Напряжённые и необычные сцены смерти", "Скорее развлекательные, чем травмирующие"]
  }, {
    id: 5,
    text: "Какой тип истории тебе кажется интереснее?",
    answers: ["Реальные исследователи паранормального", "Тайна древнего зла", "Попытка обмануть судьбу", "История про убийцу и правила хорроров"]
  }],
  results: [{
    index: 0,
    // верхний левый
    title: "Франшиза «Заклятие»",
    description: "Классический мистический хоррор. Один \nиз лучших фильмов про призраков: \nсильная атмосфера, напряжение \nи хороший сюжет",
    image: Q_Conjuring_namespaceObject,
    caption: "«Заклятие» (Conjuring, 2013)"
  }, {
    index: 1,
    // верхний правый
    title: "«Бабадук»",
    description: "Атмосферный психологический хоррор \nо матери и сыне, которых начинает \nпреследовать загадочное существо \nиз детской книги",
    image: Q_Babadook_namespaceObject,
    caption: "«Бабадук» (The Babadook, 2014)"
  }, {
    index: 2,
    // нижний левый
    title: "Франшиза «Пункт назначения»",
    description: "Идеальный вход в жанр. \nНет монстров — только судьба \nи цепочки событий, которые \nприводят к смерти",
    image: Q_FinalDestination_namespaceObject,
    caption: "«Пункт назначения 3» (Final Destination, 2006)"
  }, {
    index: 3,
    // нижний правый
    title: "Франшиза «Крик»",
    description: "Отличный старт, если хочется хоррора \nс юмором и детективом. Фильм \nодновременно пугает и играет \nс клише жанра",
    image: Q_Scream_namespaceObject,
    caption: "«Крик 2» (The Scream, 1997)"
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
    // Удаляем последний сохранённый ответ (он относится к текущему вопросу)
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
/******/ })()
;