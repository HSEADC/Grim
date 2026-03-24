import "../stylesheets/test1.css";

import fd1Image from "../images/tests/Q_FD1.webp";
import fd2Image from "../images/tests/Q_FD2.webp";
const testData = {
  questions: [
    {
      id: 1,
      text: "В первом фильме «Пункт назначения» у героя возникает видение катастрофы какого транспорта?",
      answers: [
        { text: "Поезд", isCorrect: false },
        { text: "Корабль", isCorrect: false },
        { text: "Самолет", isCorrect: true },
        { text: "Автобус", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "В начале фильма «Пункт назначения 2» происходит массовая авария на…",
      answers: [
        { text: "Гоночной трассе", isCorrect: false },
        { text: "Городской улице", isCorrect: false },
        { text: "Парковке", isCorrect: false },
        { text: "Шоссе", isCorrect: true },
      ],
    },
    {
      id: 3,
      text: "В «Пункт назначения 3» предчувствие главной героини связано с какой катастрофой?",
      answers: [
        { text: "Обрушение моста", isCorrect: false },
        { text: "Авария на американских горках", isCorrect: true },
        { text: "Взрыв самолёта", isCorrect: false },
        { text: "Пожар в школе", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "Какой катастрофой начинается фильм «Пункт назначения 5»?",
      answers: [
        { text: "Крушение самолёта", isCorrect: false },
        { text: "Крушение поезда", isCorrect: false },
        { text: "Пожар в здании", isCorrect: false },
        { text: "Обрушение моста", isCorrect: true },
      ],
    },
    {
      id: 5,
      text: "Кто является главным «антагонистом» всей серии фильмов?",
      answers: [
        { text: "Смерть и её план", isCorrect: true },
        { text: "Маньяк", isCorrect: false },
        { text: "Демон", isCorrect: false },
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
        "Вам стоит получше разобраться \nво вселенной Пункта назначения, в чём \nмы с удовольствием поможем!",
      image: fd2Image,
      caption: "«Пункт назначения 2» (Final Destination 2, 2003)",
    },
    {
      minScore: 3,
      maxScore: 5,
      title: "Большинство ответов верны",
      description:
        "Вы определённо хорошо разбираетесь \nв данной франшизе, продолжайте \nв том же духе!",
      image: fd1Image,
      caption: "«Пункт назначения» (Final Destination, 2000)",
    },
  ],
};

let currentQuestionIndex = 0;
let userAnswers = []; // здесь будем хранить объекты с questionId и isCorrect
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
        <button class="A_TestPrevButton text_button_text" id="prevButton">Предыдущий вопрос</button>
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
    // Удаляем последний сохранённый ответ (он относится к текущему вопросу)
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
