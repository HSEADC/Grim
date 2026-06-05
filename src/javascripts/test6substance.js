import "../stylesheets/test1.css";

import substanceCorrectImage from "../images/tests/Q_Substance_correct.webp";
import substanceIncorrectImage from "../images/tests/Q_Substance_incorrect.webp";

const testData = {
  questions: [
    {
      id: 1,
      text: "Какую проблему пытается решить главная героиня с помощью «субстанции»?",
      answers: [
        { text: "Потерю памяти", isCorrect: false },
        { text: "Финансовые долги", isCorrect: false },
        { text: "Болезнь сердца", isCorrect: false },
        { text: "Страх старения и утраты популярности", isCorrect: true },
      ],
    },
    {
      id: 2,
      text: "Какое главное правило использования вещества нарушается в фильме?",
      answers: [
        { text: "Нельзя использовать его ночью", isCorrect: false },
        { text: "Нельзя рассказывать о нём другим", isCorrect: false },
        { text: "Соблюдать баланс времени между телами", isCorrect: true },
        { text: "Нужно принимать его только с едой", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "Что символизирует образ молодой версии героини?",
      answers: [
        { text: "Свободу от общества", isCorrect: false },
        { text: "Абсолютное зло", isCorrect: false },
        { text: "Идеализированную внешность", isCorrect: true },
        { text: "Детские воспоминания героини", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "Какие темы поднимает фильм «Субстанция»?",
      answers: [
        { text: "Развитие технологий", isCorrect: false },
        { text: "Культ молодости, сексизм и давление", isCorrect: true },
        { text: "Семейные конфликты", isCorrect: false },
        { text: "Политическую цензуру", isCorrect: false },
      ],
    },
    {
      id: 5,
      text: "Почему финал фильма можно назвать гротескным и гиперболизированным?",
      answers: [
        { text: "Так как телесный ужас доведён до абсурда", isCorrect: true },
        { text: "Потому что он полностью реалистичен", isCorrect: false },
        { text: "Потому что он снят как комедия", isCorrect: false },
        { text: "Так как героиня спокойно принимает судьбу", isCorrect: false },
      ],
    },
  ],
  results: [
    {
      minScore: 0,
      maxScore: 2,
      title: "Большинство ответов неверны",
      description:
        "Вам стоит повнимательнее \nизучить данный фильм, в чём \nмы с удовольствием поможем!",
      image: substanceIncorrectImage,
      caption: "«Субстанция» (The Substance, 2024)",
    },
    {
      minScore: 3,
      maxScore: 5,
      title: "Большинство ответов верны",
      description:
        "Вы определённо хорошо знаете \nданный фильм, продолжайте \nв том же духе!",
      image: substanceCorrectImage,
      caption: "«Субстанция» (The Substance, 2024)",
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
    navigationHtml = `
      <div class="W_TestNavigation">
        <button class="A_TestPrevButton text_button_text" id="backButton">Вернуться назад</button>
        <button class="A_TestNextButton text_button_text" id="nextButton" disabled>
          Далее
        </button>
      </div>
    `;
  } else {
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

  document
    .getElementById("nextButton")
    .addEventListener("click", goToNextQuestion);

  if (currentQuestionIndex === 0) {
    document.getElementById("backButton").addEventListener("click", () => {
      window.location.href = "../../pages/tests.html";
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
  const result =
    testData.results.find(
      (r) => correctAnswers >= r.minScore && correctAnswers <= r.maxScore,
    ) || testData.results[0];

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
