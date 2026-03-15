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

;// ./src/images/tests/Q_Psychological.webp
const Q_Psychological_namespaceObject = __webpack_require__.p + "images/03463dade381e1f988c3.webp";
;// ./src/images/tests/Q_Supernatural.webp
const Q_Supernatural_namespaceObject = __webpack_require__.p + "images/364099561b51102667a3.webp";
;// ./src/images/tests/Q_Cosmic.webp
const Q_Cosmic_namespaceObject = __webpack_require__.p + "images/e8ba2b9f350717bc0a4a.webp";
;// ./src/images/tests/Q_Body.webp
const Q_Body_namespaceObject = __webpack_require__.p + "images/7bbcde09d20be85c2bd8.webp";
;// ./src/javascripts/test1suitable-horror-subgenre.js





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
    image: Q_Psychological_namespaceObject,
    caption: "«Прочь» (Get Out, 2017)"
  }, {
    index: 1,
    // верхний правый
    title: "Сверхъестественный хоррор",
    description: "Здесь страх связан с силами, выходящими \nза пределы обычной реальности, \nкогда могут появляться призраки или другие \nпотусторонние сущности",
    image: Q_Supernatural_namespaceObject,
    caption: "«Синистер 2» (Sinister 2, 2015)"
  }, {
    index: 2,
    // нижний левый
    title: "Космический хоррор",
    description: "Этот поджанр раскрывает вселенную. \nУжас возникает из-за столкновения \nс непостижимыми силами \nили знаниями",
    image: Q_Cosmic_namespaceObject,
    caption: "«Чужой: Ромул» (Alien: Romulus, 2024)"
  }, {
    index: 3,
    // нижний правый
    title: "Боди-хоррор",
    description: "В центре этого поджанра — изменения \nи искажения человеческого тела. Герои \nмогут сталкиваться с мутациями, \nболезнями или экспериментами",
    image: Q_Body_namespaceObject,
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
      window.location.href = "/pages/tests.html"; // путь к списку тестов
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
  document.getElementById("W_test_container").innerHTML = "\n    <div class=\"W_ResultContent\">\n      <div class=\"M_TestQuestionCounter\">\n        <p class=\"text_button_text\">\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442</p>\n      </div>\n      <div class=\"W_ResultText\">\n        <h1 class=\"A_ResultTitle\">".concat(result.title, "</h1>\n        <p class=\"text_body_text A_ResultDescription\">").concat(result.description, "</p>\n      </div>\n      <div class=\"W_ResultImage\">\n        <img src=\"").concat(result.image, "\" alt=\"").concat(result.caption, "\" class=\"A_ResultImage\" />\n        <p class=\"A_ResultCaption text_body_text\">").concat(result.caption, "</p>\n      </div>\n      <div class=\"W_ResultButtons\">\n        <a href=\"/pages/tests.html\" class=\"A_BackToTestsButton text_button_text\">\u041F\u0440\u043E\u0439\u0442\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u0435\u0441\u0442\u044B</a>\n      </div>\n    </div>\n  ");
}
document.addEventListener("DOMContentLoaded", renderQuestion);
/******/ })()
;