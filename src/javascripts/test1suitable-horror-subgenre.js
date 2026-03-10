import "../stylesheets/test1.css";

document.addEventListener("DOMContentLoaded", function () {
  // Данные теста
  const stages = [
    {
      question:
        "Какое растение, согласно народной медицине, следует использовать для заживления ран?",
      answers: [
        { text: "ромашка", count: 0 },
        { text: "брусника", count: 0 },
        { text: "алоэ", count: 1 },
      ],
    },
    {
      question:
        "Отвар и настой ягод какого растения применяется как дезинфицирующее средство?",
      answers: [
        { text: "калина", count: 0 },
        { text: "брусника", count: 1 },
        { text: "клюква", count: 0 },
      ],
    },
    {
      question:
        "Какое из перечисленных растений обладает противовоспалительным действием?",
      answers: [
        { text: "ромашка", count: 0 },
        { text: "аир", count: 0 },
        { text: "девятисил", count: 1 },
      ],
    },
    {
      question:
        "Экстракт какого растения используется для приготовлении безрецептурных растительных антидепрессантов?",
      answers: [
        { text: "зверобой", count: 1 },
        { text: "шалфей", count: 0 },
        { text: "солодка", count: 0 },
      ],
    },
  ];

  let currentStage = 0;
  let resultCount = 0;

  // Функция инициализации теста
  function initTest() {
    const numberOfQuestion = document.querySelector(".A_NumberOfQuestion");
    const question = document.querySelector(".A_Question");
    const answers = document.querySelectorAll(".A_AnswerText");
    const radioButtons = document.querySelectorAll(".A_TrueCheckbox");

    if (currentStage >= stages.length) {
      showResult();
      return;
    }

    // Сбрасываем все radio кнопки
    radioButtons.forEach((radio) => {
      radio.checked = false;
    });

    // Обновляем номер вопроса
    if (numberOfQuestion) {
      numberOfQuestion.textContent = `Вопрос №${currentStage + 1} из ${stages.length}`;
    }

    // Обновляем текст вопроса
    if (question) {
      question.textContent = stages[currentStage].question;
    }

    // Обновляем варианты ответов
    for (let i = 0; i < answers.length; i++) {
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
    const testContainer = document.querySelector(".O_Test");

    if (!testContainer) return;

    let resultHeader, resultParagraph;

    if (resultCount === 4) {
      resultHeader = "Отличный результат!";
      resultParagraph =
        "Видно, что вы прекрасно разбираетесь в теме! Проверьте свои знания в других наших тестах";
    } else if (resultCount >= 2) {
      resultHeader = "Хороший результат!";
      resultParagraph =
        "Видно, что вы неплохо знакомы с темой! Проверьте свои знания в других наших тестах";
    } else {
      resultHeader = "Кажется, вы новичок в этой теме...";
      resultParagraph =
        "Почитайте наши статьи, чтобы лучше подготовиться, и попробуйте снова проверить свои знания!";
    }

    testContainer.innerHTML = `
      <div class="M_TestResult">
        <p class="A_TestResultCount">Итого: ${resultCount} из ${stages.length}</p>
        <h2 class="A_TestResultHeader">${resultHeader}</h2>
        <p class="A_TestResultParagraph">${resultParagraph}</p>
        <button onclick="location.reload()" style="
          padding: 15px 30px;
          background: cornflowerblue;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 18px;
          margin-top: 20px;
        ">Пройти тест снова</button>
      </div>
    `;
  }

  // Проверяем, есть ли элементы теста на странице
  const testExists =
    document.querySelector(".W_Test") ||
    document.querySelector(".A_Question") ||
    document.querySelector(".C_Answers");

  if (testExists) {
    // Инициализируем первый вопрос
    initTest();

    // Добавляем обработчики на все radio кнопки
    const radioButtons = document.querySelectorAll(".A_TrueCheckbox");
    const answerLabels = document.querySelectorAll(".A_AnswerText");

    // Обработчик для radio кнопок
    if (radioButtons.length > 0) {
      radioButtons.forEach((radio) => {
        radio.addEventListener("change", function () {
          if (this.checked) {
            // Добавляем баллы за правильный ответ
            resultCount += parseInt(this.dataset.count || 0);

            // Переходим к следующему вопросу через задержку
            setTimeout(() => {
              currentStage++;
              initTest();
            }, 500);
          }
        });
      });
    }

    // Обработчик для клика по тексту ответа
    if (answerLabels.length > 0) {
      answerLabels.forEach((label) => {
        label.addEventListener("click", function () {
          // Находим соответствующий radio и выбираем его
          const radio = this.previousElementSibling?.previousElementSibling;
          if (radio) {
            radio.checked = true;

            // Инициируем событие change
            const event = new Event("change");
            radio.dispatchEvent(event);
          }
        });
      });
    }

    console.log("Тест инициализирован");
  }
});
