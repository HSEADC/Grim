import "../stylesheets/test1.css";

import conjuringImage from "../images/tests/Q_Conjuring.webp";
import babadookImage from "../images/tests/Q_Babadook.webp";
import finalDestinationImage from "../images/tests/Q_FinalDestination.webp";
import screamImage from "../images/tests/Q_Scream.webp";

const testData = {
  questions: [
    {
      id: 1,
      text: "Что для тебя самое важное в хорроре?",
      answers: [
        "Сюжет с загадкой и расследованием",
        "Пугающая атмосфера, безысходность",
        "Ощущение внезапной, случайной смерти",
        "Интересные персонажи, чёрный юмор",
      ],
    },
    {
      id: 2,
      text: "Какой тип страха тебе интереснее?",
      answers: [
        "Призраки, демоны и проклятия",
        "Нечто непонятное, что сводит с ума",
        "Смерть, которая находит людей сама",
        "Маньяк, скрывающийся среди людей",
      ],
    },
    {
      id: 3,
      text: "Какая атмосфера тебе ближе?",
      answers: [
        "Старый дом, семейная история, странные явления",
        "Тёмная, гнетущая, практически абсолютно безнадёжная",
        "Обычная жизнь, где внезапно начинают происходить смертельные случайности",
        "Подростки, вечеринки, телефонные звонки и напряжённая игра в кошки-мышки",
      ],
    },
    {
      id: 4,
      text: "Насколько сильные ужасы ты готов выдержать?",
      answers: [
        "Средние: страшно, но без жёсткой жести",
        "Очень тяжёлые и пугающие",
        "Напряжённые и необычные сцены смерти",
        "Скорее развлекательные, чем травмирующие",
      ],
    },
    {
      id: 5,
      text: "Какой тип истории тебе кажется интереснее?",
      answers: [
        "Реальные исследователи паранормального",
        "Тайна древнего зла",
        "Попытка обмануть судьбу",
        "История про убийцу и правила хорроров",
      ],
    },
  ],
  results: [
    {
      index: 0, // верхний левый
      title: "Франшиза «Заклятие»",
      description:
        "Классический мистический хоррор. Один \nиз лучших фильмов про призраков: \nсильная атмосфера, напряжение \nи хороший сюжет",
      image: conjuringImage,
      caption: "«Заклятие» (Conjuring, 2013)",
    },
    {
      index: 1, // верхний правый
      title: "«Бабадук»",
      description:
        "Атмосферный психологический хоррор \nо матери и сыне, которых начинает \nпреследовать загадочное существо \nиз детской книги",
      image: babadookImage,
      caption: "«Бабадук» (The Babadook, 2014)",
    },
    {
      index: 2, // нижний левый
      title: "Франшиза «Пункт назначения»",
      description:
        "Идеальный вход в жанр. \nНет монстров — только судьба \nи цепочки событий, которые \nприводят к смерти",
      image: finalDestinationImage,
      caption: "«Пункт назначения 3» (Final Destination, 2006)",
    },
    {
      index: 3, // нижний правый
      title: "Франшиза «Крик»",
      description:
        "Отличный старт, если хочется хоррора \nс юмором и детективом. Фильм \nодновременно пугает и играет \nс клише жанра",
      image: screamImage,
      caption: "«Крик 2» (The Scream, 1997)",
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
      window.location.href = "/pages/tests.html"; // путь к списку тестов
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
        <a href="/pages/tests.html" class="A_BackToTestsButton text_button_text">Пройти другие тесты</a>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderQuestion);
