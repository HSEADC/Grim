import "../stylesheets/test1.css";
import itImage from "../images/tests/Q_ResultIt.webp";
import shiningImage from "../images/tests/Q_ResultShining.webp";

const testData = {
  title: "Насколько хорошо ты знаешь хорроры?",
  questions: [
    {
      id: 1,
      text: "В каком фильме впервые появился Фредди Крюгер?",
      answers: [
        { text: "Хэллоуин", isCorrect: false },
        { text: "Кошмар на улице Вязов", isCorrect: true },
        { text: "Пятница, 13-е", isCorrect: false },
        { text: "Кэндимэн", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "Как зовут убийцу из фильмов «Детские игры»?",
      answers: [
        { text: "Энди", isCorrect: false },
        { text: "Сэм", isCorrect: false },
        { text: "Чаки", isCorrect: true },
        { text: "Билли", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "В каком фильме есть проклятая видеокассета?",
      answers: [
        { text: "Звонок", isCorrect: true },
        { text: "Проклятие", isCorrect: false },
        { text: "Астрал", isCorrect: false },
        { text: "Паранормальное явление", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "Как называется отель из фильма «Сияние»?",
      answers: [
        { text: "Стэнли", isCorrect: false },
        { text: "Бейтс", isCorrect: false },
        { text: "Оверлук", isCorrect: true },
        { text: "Рузвельт", isCorrect: false },
      ],
    },
    {
      id: 5,
      text: "Какой режиссёр снял фильм «Сияние» (1980)?",
      answers: [
        { text: "Джеймс Ван", isCorrect: false },
        { text: "Стэнли Кубрик", isCorrect: true },
        { text: "Джон Карпентер", isCorrect: false },
        { text: "Альфред Хичкок", isCorrect: false },
      ],
    },
    {
      id: 6,
      text: "Кто главный убийца в серии фильмов «Хэллоуин»?",
      answers: [
        { text: "Джейсон Вурхиз", isCorrect: false },
        { text: "Пинхед", isCorrect: false },
        { text: "Майкл Майерс", isCorrect: true },
        { text: "Кожаное лицо", isCorrect: false },
      ],
    },
  ],
  results: [
    {
      minScore: 0,
      maxScore: 2,
      title: "Большинство ответов неверны",
      description:
        "Вам стоит получше разобраться в мире \nхорроров, в чём мы с удовольствием \nпоможем!",
      image: itImage,
      caption: "«Оно» (It, 2017)",
    },
    {
      minScore: 3,
      maxScore: 6,
      title: "Большинство ответов верны",
      description:
        "Вы определённо хорошо разбираетесь \nв хоррорах, продолжайте\n в том же духе!",
      image: shiningImage,
      caption: "«Сияние» (The Shining, 1980)",
    },
  ],
};

let currentQuestionIndex = 0;
let userAnswers = [];
let selectedAnswerIndex = null;

function renderQuestion() {
  const question = testData.questions[currentQuestionIndex];
  selectedAnswerIndex = null;
  const isLastQuestion = currentQuestionIndex === testData.questions.length - 1;

  let navigationHtml;
  if (currentQuestionIndex === 0) {
    // Первый вопрос: кнопка "Вернуться назад" (активная) и "Далее" (disabled)
    navigationHtml = `
      <div class="W_TestNavigation">
        <button class="A_TestPrevButton text_button_text" id="backButton">Вернуться назад</button>
        <button class="A_TestNextButton text_button_text" id="nextButton" disabled>
          ${isLastQuestion ? "Завершить" : "Далее"}
        </button>
      </div>
    `;
  } else {
    // Второй и последующие: "Предыдущий вопрос" (активный) и "Далее/Завершить" (disabled)
    navigationHtml = `
      <div class="W_TestNavigation">
        <button class="A_TestPrevButton text_button_text" id="prevButton">Назад</button>
        <button class="A_TestNextButton text_button_text" id="nextButton" disabled>
          ${isLastQuestion ? "Завершить" : "Далее"}
        </button>
      </div>
    `;
  }

  document.getElementById("W_test_container").innerHTML = `
    <div class="W_TestHeading">
      <div class="W_TestQuestion">
        <div class="M_TestQuestionCounter">
          <p class="text_button_text">Вопрос <span>${currentQuestionIndex + 1}</span> из ${testData.questions.length}</p>
        </div>
        <h2 class="A_TestQuestionTitle">${question.text}</h2>
      </div>
    </div>
    <div class="W_TestBody">
      <div class="C_AnswerVariants">
        ${question.answers
          .map(
            (answer, index) => `
            <div class="M_AnswerVariant" data-index="${index}">
              <p class="text_body_text">${answer.text}</p>
            </div>
          `,
          )
          .join("")}
      </div>
      ${navigationHtml}
    </div>
  `;

  // Обработчики для вариантов ответов
  document.querySelectorAll(".M_AnswerVariant").forEach((variant) => {
    variant.addEventListener("click", function () {
      document.querySelectorAll(".M_AnswerVariant").forEach((v) => {
        v.classList.remove("selected");
      });
      this.classList.add("selected");
      selectedAnswerIndex = parseInt(this.getAttribute("data-index"));
      document.getElementById("nextButton").disabled = false;
    });
  });

  // Обработчик для кнопки "Далее / Завершить"
  document
    .getElementById("nextButton")
    .addEventListener("click", goToNextQuestion);

  // Обработчики для левой кнопки
  if (currentQuestionIndex === 0) {
    document.getElementById("backButton").addEventListener("click", () => {
      window.location.href = "../../pages/tests.html"; // путь к странице со списком тестов
    });
  } else {
    document
      .getElementById("prevButton")
      .addEventListener("click", goToPreviousQuestion);
  }
}

function goToNextQuestion() {
  if (selectedAnswerIndex !== null) {
    const question = testData.questions[currentQuestionIndex];
    userAnswers.push({
      questionId: question.id,
      answerIndex: selectedAnswerIndex,
      isCorrect: question.answers[selectedAnswerIndex].isCorrect,
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
  const correctAnswers = userAnswers.filter(
    (answer) => answer.isCorrect,
  ).length;
  const result = testData.results.find(
    (r) => correctAnswers >= r.minScore && correctAnswers <= r.maxScore,
  );

  document.getElementById("W_test_container").innerHTML = `
    <div class="W_ResultContent">
      <div class="M_TestQuestionCounter">
        <p class="text_button_text">Результат</p>
      </div>
      <div class="W_ResultText">
        <h1 class="A_ResultTitle">${result.title}</h1>
        <p class="text_body_text A_ResultDescription">${result.description}</p>
      </div>
      <div class="W_ResultImage">
        <img src="${result.image}" alt="${result.caption}" class="A_ResultImage" />
        <p class="A_ResultCaption text_body_text">${result.caption}</p>
      </div>
      <div class="W_ResultButtons">
        <a href="../../pages/tests.html" class="A_BackToTestsButton text_button_text">Пройти другие тесты</a>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderQuestion);
