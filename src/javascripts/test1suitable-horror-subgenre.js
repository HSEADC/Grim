import "../stylesheets/test1.css";

import psychoImage from "../images/tests/Q_Psychological.webp";
import superImage from "../images/tests/Q_Supernatural.webp";
import cosmicImage from "../images/tests/Q_Cosmic.webp";
import bodyImage from "../images/tests/Q_Body.webp";
const testData = {
  questions: [
    {
      id: 1,
      text: "Какая ситуация пугает вас сильнее всего?",
      answers: [
        "Понять, что реальность вокруг может быть иллюзией, а ваш разум — нет",
        "Столкнуться с необъяснимым сверхъестественным явлением",
        "Узнать, что существуют древние силы, для которых люди — ничто",
        "Осознать, что ваше тело начинает меняться или разрушаться",
      ],
    },
    {
      id: 2,
      text: "Где происходит идеальная хоррор-история?",
      answers: [
        "В обычном городе или доме, где постепенно что-то начинает идти не так",
        "В старом доме, лесу или месте с проклятой историей",
        "В неизвестной зоне, космосе или месте, связанном с чем-то древним",
        "В лаборатории, больнице или месте жестоких экспериментов",
      ],
    },
    {
      id: 3,
      text: "Что делает историю страшной именно для вас?",
      answers: [
        "Медленное психологическое напряжение и паранойя",
        "Призраки, демоны или проклятия, которые невозможно объяснить",
        "Осознание масштаба вселенной и ничтожности человека",
        "Физические трансформации, паразиты, мутации живых существ",
      ],
    },
    {
      id: 4,
      text: "Какой финал кажется вам самым сильным?",
      answers: [
        "Герой понимает, что сам становится частью безумия",
        "Зло не побеждено и продолжает существовать где-то рядом",
        "Герой узнаёт ужасную правду о природе реальности",
        "Герой теряет своё тело, внешний облик или саму человечность",
      ],
    },
    {
      id: 5,
      text: "Какой страх кажется наиболее реалистичным?",
      answers: [
        "Потерять контроль над собственным разумом, начать сомневаться в том, что реально",
        "Столкнуться с чем-то потусторонним, нереальным",
        "Узнать, что мир устроен намного страшнее, чем кажется",
        "Потерять контроль над собственным телом и обликом",
      ],
    },
  ],
  results: [
    {
      index: 0, // соответствует верхнему левому ответу
      title: "Психологический хоррор",
      description:
        "Этот поджанр хоррора исследует \nвнутреннее состояние персонажа: \nстрах и паранойя становятся \nосновными источниками ужаса",
      image: psychoImage,
      caption: "«Прочь» (Get Out, 2017)",
    },
    {
      index: 1, // верхний правый
      title: "Сверхъестественный хоррор",
      description:
        "Здесь страх связан с силами, выходящими \nза пределы обычной реальности, \nкогда могут появляться призраки или другие \nпотусторонние сущности",
      image: superImage,
      caption: "«Синистер 2» (Sinister 2, 2015)",
    },
    {
      index: 2, // нижний левый
      title: "Космический хоррор",
      description:
        "Этот поджанр раскрывает вселенную. \nУжас возникает из-за столкновения \nс непостижимыми силами \nили знаниями",
      image: cosmicImage,
      caption: "«Чужой: Ромул» (Alien: Romulus, 2024)",
    },
    {
      index: 3, // нижний правый
      title: "Боди-хоррор",
      description:
        "В центре этого поджанра — изменения \nи искажения человеческого тела. Герои \nмогут сталкиваться с мутациями, \nболезнями или экспериментами",
      image: bodyImage,
      caption: "«Субстанция» (The Substance, 2024)",
    },
  ],
};

let currentQuestionIndex = 0;
let userAnswers = []; // здесь будем хранить индексы выбранных ответов (0-3)
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
              <p class="text_body_text">${answer}</p>
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
  const counts = [0, 0, 0, 0];
  userAnswers.forEach((ansIndex) => {
    counts[ansIndex] += 1;
  });

  // Находим индекс с максимальным количеством (если несколько – берём первый)
  let maxCount = -1;
  let resultIndex = 0;
  counts.forEach((count, idx) => {
    if (count > maxCount) {
      maxCount = count;
      resultIndex = idx;
    }
  });

  const result =
    testData.results.find((r) => r.index === resultIndex) ||
    testData.results[0];

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
