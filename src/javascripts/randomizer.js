// document.addEventListener("DOMContentLoaded", function () {

//   const cardsData = [
//     {
//       tag: "Антагонист",
//       title: "Векна",
//       description:
//         "Имя и концепция персонажа взяты из Dungeons & Dragons, где Векна — божество смерти и секретов",
//       image: "../images/Q_cardInfoImgvecna.webp",
//     },
//     {
//       tag: "Протагонист",
//       title: "Дастин Хендерсон",
//       description:
//         "Уникальная внешность Дастина обусловлена редким генетическим заболеванием актёра — ключично-черепной дисплазией",
//       image: "../images/Q_cardInfoImgvecna.webp",
//     },
//     {
//       tag: "Антагонист",
//       title: "Ганнибал Лектер",
//       description:
//         "Прототип персонажа хирург-убийца Альфредо Балли Тревино, с которым писатель познакомился в тюрьме в 1960-х",
//       image: "../images/Q_cardInfoImgvecna.webp",
//     },
//   ];

//   const container = document.querySelector(".RandomizerCards");
//   const button = container.querySelector("button");

//   const cardDisplay = document.createElement("div");
//   cardDisplay.classList.add("randomizer-card-display");
//   container.appendChild(cardDisplay);

//   button.addEventListener("click", function () {

//     const randomIndex = Math.floor(Math.random() * cardsData.length);
//     const card = cardsData[randomIndex];

//     const cardHTML = `
//       <a class="O_Card" data-tags="${card.tag}">
//         <div class="Q_Image">
//           <img src="${card.image}" alt="${card.title}" />
//         </div>
//         <div class="M_ArticleInfo">
//           <div class="M_TagLine">
//             <div class="A_CardTag">${card.tag}</div>
//           </div>
//           <h2 class="A_SubCard">${card.title}</h2>
//           <h2 class="A_SubCard">${card.description.replace(/\n/g, "<br>")}</h2>
//         </div>
//       </a>
//     `;

//     cardDisplay.innerHTML = cardHTML;
//   });
// });
import vecnaImg from "../images/Q_cardInfoImgvecna.webp";

document.addEventListener("DOMContentLoaded", function () {
  // Массив данных карточек (можете дополнять)
  const cardsData = [
    {
      tag: "Антагонист",
      title: "Векна",
      description:
        "Имя и концепция персонажа взяты из Dungeons & Dragons, где Векна — божество смерти и секретов",
      image: vecnaImg,
    },
    // {
    //   tag: "Протагонист",
    //   title: "Дастин Хендерсон",
    //   description:
    //     "Уникальная внешность Дастина обусловлена редким генетическим заболеванием актёра — ключично-черепной дисплазией",
    //   image: "../images/Q_cardInfoImgvecna.webp",
    // },
    // {
    //   tag: "Антагонист",
    //   title: "Ганнибал Лектер",
    //   description:
    //     "Прототип персонажа хирург-убийца Альфредо Балли Тревино, с которым писатель познакомился в тюрьме в 1960-х",
    //   image: "../images/Q_cardInfoImgvecna.webp",
    // },
  ];

  // Массив фраз, которые появляются над карточкой
  const phrases = [
    "В колоде завелась нечисть, такое тоже бывает",
    "Запутались в лоре и фанатских теориях?",
    "Похоже, нас все‑таки ждёт хэппи-энд",
    "Этот персонаж не даст вам уснуть",
    "Тёмная сторона Force с вами",
  ];

  // Находим стартовые блоки
  const startTitle = document.querySelector(".M_mainTextRandomizer");
  const startButtonBlock = document.querySelector(".RandomizerCards");
  const startButton = startButtonBlock?.querySelector("button");

  if (!startTitle || !startButtonBlock || !startButton) {
    console.error("Не найдены нужные элементы на странице");
    return;
  }

  // Создаём контейнер для результата (скрыт по умолчанию)
  const resultContainer = document.createElement("div");
  resultContainer.classList.add("randomizer-result");
  resultContainer.style.display = "none";
  startButtonBlock.parentNode.insertBefore(
    resultContainer,
    startButtonBlock.nextSibling,
  );

  // Функция для получения случайной карточки и случайной фразы
  function getRandomCardAndPhrase() {
    const randomCard = cardsData[Math.floor(Math.random() * cardsData.length)];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return { card: randomCard, phrase: randomPhrase };
  }

  // Функция отрисовки результата
  function renderResult(card, phrase) {
    resultContainer.innerHTML = `
      <div class="randomizer-header-phrase">
        <h2>${phrase}</h2>
      </div>
      <a class="O_Card" data-tags="${card.tag}">
        <div class="Q_Image">
          <img src=${card.image} alt="${card.title}" />
        </div>
        <div class="M_ArticleInfo">
          <div class="M_TagLine">
            <div class="A_CardTag">${card.tag}</div>
          </div>
          <h2 class="A_SubCard">${card.title}</h2>
          <h2 class="A_SubCard">${card.description.replace(/\n/g, "<br>")}</h2>
        </div>
      </a>
      <div class="randomizer-back">
        <button class="back-button">На главную</button>
      </div>
    `;
  }

  // Обработчик клика на «Тяни»
  startButton.addEventListener("click", function () {
    const { card, phrase } = getRandomCardAndPhrase();
    renderResult(card, phrase);

    // Скрываем стартовые блоки, показываем результат
    startTitle.style.display = "none";
    startButtonBlock.style.display = "none";
    resultContainer.style.display = "block";
  });

  // Обработчик клика на кнопку «На главную» (используем делегирование, так как кнопка создаётся динамически)
  resultContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("back-button")) {
      // Скрываем результат, показываем стартовые блоки
      resultContainer.style.display = "none";
      startTitle.style.display = ""; // возвращаем исходный display (обычно block или flex)
      startButtonBlock.style.display = "";
    }
  });
});
