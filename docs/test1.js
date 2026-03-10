/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Данные теста
  var stages = [{
    question: "Какое растение, согласно народной медицине, следует использовать для заживления ран?",
    answers: [{
      text: "ромашка",
      count: 0
    }, {
      text: "брусника",
      count: 0
    }, {
      text: "алоэ",
      count: 1
    }]
  }, {
    question: "Отвар и настой ягод какого растения применяется как дезинфицирующее средство?",
    answers: [{
      text: "калина",
      count: 0
    }, {
      text: "брусника",
      count: 1
    }, {
      text: "клюква",
      count: 0
    }]
  }, {
    question: "Какое из перечисленных растений обладает противовоспалительным действием?",
    answers: [{
      text: "ромашка",
      count: 0
    }, {
      text: "аир",
      count: 0
    }, {
      text: "девятисил",
      count: 1
    }]
  }, {
    question: "Экстракт какого растения используется для приготовлении безрецептурных растительных антидепрессантов?",
    answers: [{
      text: "зверобой",
      count: 1
    }, {
      text: "шалфей",
      count: 0
    }, {
      text: "солодка",
      count: 0
    }]
  }];
  var currentStage = 0;
  var resultCount = 0;

  // Функция инициализации теста
  function initTest() {
    var numberOfQuestion = document.querySelector(".A_NumberOfQuestion");
    var question = document.querySelector(".A_Question");
    var answers = document.querySelectorAll(".A_AnswerText");
    var radioButtons = document.querySelectorAll(".A_TrueCheckbox");
    if (currentStage >= stages.length) {
      showResult();
      return;
    }

    // Сбрасываем все radio кнопки
    radioButtons.forEach(function (radio) {
      radio.checked = false;
    });

    // Обновляем номер вопроса
    if (numberOfQuestion) {
      numberOfQuestion.textContent = "\u0412\u043E\u043F\u0440\u043E\u0441 \u2116".concat(currentStage + 1, " \u0438\u0437 ").concat(stages.length);
    }

    // Обновляем текст вопроса
    if (question) {
      question.textContent = stages[currentStage].question;
    }

    // Обновляем варианты ответов
    for (var i = 0; i < answers.length; i++) {
      if (answers[i]) {
        answers[i].textContent = stages[currentStage].answers[i].text;
        // Сохраняем значение count в data-атрибут
        if (radioButtons[i]) {
          radioButtons[i].dataset.count = stages[currentStage].answers[i].count;
        }
      }
    }
  }

  // Функция показа результата
  function showResult() {
    var testContainer = document.querySelector(".O_Test");
    if (!testContainer) return;
    var resultHeader, resultParagraph;
    if (resultCount === 4) {
      resultHeader = "Отличный результат!";
      resultParagraph = "Видно, что вы прекрасно разбираетесь в теме! Проверьте свои знания в других наших тестах";
    } else if (resultCount >= 2) {
      resultHeader = "Хороший результат!";
      resultParagraph = "Видно, что вы неплохо знакомы с темой! Проверьте свои знания в других наших тестах";
    } else {
      resultHeader = "Кажется, вы новичок в этой теме...";
      resultParagraph = "Почитайте наши статьи, чтобы лучше подготовиться, и попробуйте снова проверить свои знания!";
    }
    testContainer.innerHTML = "\n      <div class=\"M_TestResult\">\n        <p class=\"A_TestResultCount\">\u0418\u0442\u043E\u0433\u043E: ".concat(resultCount, " \u0438\u0437 ").concat(stages.length, "</p>\n        <h2 class=\"A_TestResultHeader\">").concat(resultHeader, "</h2>\n        <p class=\"A_TestResultParagraph\">").concat(resultParagraph, "</p>\n        <button onclick=\"location.reload()\" style=\"\n          padding: 15px 30px;\n          background: cornflowerblue;\n          color: white;\n          border: none;\n          border-radius: 8px;\n          cursor: pointer;\n          font-size: 18px;\n          margin-top: 20px;\n        \">\u041F\u0440\u043E\u0439\u0442\u0438 \u0442\u0435\u0441\u0442 \u0441\u043D\u043E\u0432\u0430</button>\n      </div>\n    ");
  }

  // Проверяем, есть ли элементы теста на странице
  var testExists = document.querySelector(".W_Test") || document.querySelector(".A_Question") || document.querySelector(".C_Answers");
  if (testExists) {
    // Инициализируем первый вопрос
    initTest();

    // Добавляем обработчики на все radio кнопки
    var radioButtons = document.querySelectorAll(".A_TrueCheckbox");
    var answerLabels = document.querySelectorAll(".A_AnswerText");

    // Обработчик для radio кнопок
    if (radioButtons.length > 0) {
      radioButtons.forEach(function (radio) {
        radio.addEventListener("change", function () {
          if (this.checked) {
            // Добавляем баллы за правильный ответ
            resultCount += parseInt(this.dataset.count || 0);

            // Переходим к следующему вопросу через задержку
            setTimeout(function () {
              currentStage++;
              initTest();
            }, 500);
          }
        });
      });
    }

    // Обработчик для клика по тексту ответа
    if (answerLabels.length > 0) {
      answerLabels.forEach(function (label) {
        label.addEventListener("click", function () {
          var _this$previousElement;
          // Находим соответствующий radio и выбираем его
          var radio = (_this$previousElement = this.previousElementSibling) === null || _this$previousElement === void 0 ? void 0 : _this$previousElement.previousElementSibling;
          if (radio) {
            radio.checked = true;

            // Инициируем событие change
            var event = new Event("change");
            radio.dispatchEvent(event);
          }
        });
      });
    }
    console.log("Тест инициализирован");
  }
});
/******/ })()
;