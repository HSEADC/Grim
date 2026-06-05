import "../stylesheets/test1.css";

import saw3Image from "../images/tests/Q_Saw3.webp";
import saw2Image from "../images/tests/Q_Saw2.webp";

const testData = {
  questions: [
    {
      id: 1,
      text: "Как зовут главного создателя «игр» в кинофраншизе?",
      answers: [
        { text: "Марк Хоффман", isCorrect: false },
        { text: "Эрик Мэттьюс", isCorrect: false },
        { text: "Джон Крамер", isCorrect: true },
        { text: "Лоуренс Гордон", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "Как называется кукла, через которую передаются послания участникам?",
      answers: [
        { text: "Билли", isCorrect: true },
        { text: "Чаки", isCorrect: false },
        { text: "Тобин", isCorrect: false },
        { text: "Зеп", isCorrect: false },
      ],
    },
    {
      id: 3,
      text: "Кто была одной из первых учениц маньяка, которой тот пытался передать своё видение мира?",
      answers: [
        { text: "Джилл Так", isCorrect: false },
        { text: "Линдси Перес", isCorrect: false },
        { text: "Памела Дженкинс", isCorrect: false },
        { text: "Аманда Янг", isCorrect: true },
      ],
    },
    {
      id: 4,
      text: "Что обычно должны были сделать участники игры, чтобы выжить?",
      answers: [
        { text: "Дождаться полиции", isCorrect: false },
        { text: "Найти спрятанный маньяком предмет", isCorrect: false },
        { text: "Искренне просить пощады", isCorrect: false },
        { text: "Пройти испытания", isCorrect: true },
      ],
    },
    {
      id: 5,
      text: "Что часто является особенностью кинофраншизы «Пила»?",
      answers: [
        { text: "Нелинейный монтаж и финальный твист", isCorrect: true },
        { text: "Жестокие вставки после каждой ловушки", isCorrect: false },
        { text: "Завязка на длинных диалогах", isCorrect: false },
        { text: "Тайная организация", isCorrect: false },
      ],
    },
  ],
  results: [
    {
      minScore: 0,
      maxScore: 2,
      title: "Большинство ответов неверны",
      description:
        "Вам стоит получше разобраться \nво вселенной Пилы, в чём \nмы с удовольствием поможем!",
      image: saw2Image,
      caption: "«Пила 2» (Saw II, 2005)",
    },
    {
      minScore: 3,
      maxScore: 5,
      title: "Большинство ответов верны",
      description:
        "Вы определённо хорошо разбираетесь \nв данной франшизе, продолжайте \nв том же духе!",
      image: saw3Image,
      caption: "«Пила 3» (Saw III, 2006)",
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
      window.location.href = "../../pages/tests.html"; // путь к списку тестов
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
