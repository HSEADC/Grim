import vecnaImg from "../images/cards/Q_ImageCardsMainVecna.gif";
import dustinImg from "../images/cards/Q_ImageCardsMainDustin.gif";
import hannibalImg from "../images/cards/Q_ImageCardsMainHannibal.gif";
import itImg from "../images/cards/Q_ImageCardsMainIt.gif";
import sabrinaImg from "../images/cards/Q_ImageCardsMainSabrina.gif";
import beverlyImg from "../images/cards/Q_ImageCardsMainBeverly.gif";
document.addEventListener("DOMContentLoaded", function () {
  // Массив данных карточек
  const cardsData = [
    {
      tag: "Антагонист",
      title: "Векна",
      description:
        "Имя и концепция персонажа взяты \nиз Dungeons & Dragons, где Векна — \nбожество смерти и секретов",
      image: vecnaImg,
    },
    {
      tag: "Протагонист",
      title: "Дастин Хендерсон",
      description:
        "Уникальная внешность Дастина обусловлена \nредким генетическим заболеванием актёра — \nключично-черепной дисплазией",
      image: dustinImg,
    },
    {
      tag: "Антагонист",
      title: "Ганнибал Лектер",
      description:
        "Прототип персонажа хирург-убийца \nАльфредо Балли Тревино, с которым писатель \nпознакомился в тюрьме в 1960-х",
      image: hannibalImg,
    },
    {
      tag: "Антагонист",
      title: "Пеннивайз",
      description:
        "Автор придумал персонажа когда \nспросил себя, кого боятся дети «больше, \nчем что-либо другое в мире»",
      image: itImg,
    },
    {
      tag: "Протагонист",
      title: "Сабрина Спеллман",
      description:
        "У актрисы аллергия на кошек, \nпоэтому контакт с Салемом в кадре \nсвели к минимуму",
      image: sabrinaImg,
    },
    {
      tag: "Протагонист",
      title: "Беверли Марш",
      description:
        "Персонаж поднимает проблему того, \nкак детская травма формирует \nсудьбу взрослой женщины",
      image: beverlyImg,
    },
  ];

  // Фразы по тегу
  const phraseByTag = {
    Антагонист: "В колоде завелась нечисть,<br>такое тоже бывает",
    Протагонист: "Похоже, нас все‑таки ждёт<br>хэппи-энд",
  };

  // Элементы страницы
  const startTitle = document.querySelector(".M_mainTextRandomizer");
  const startCardsBlock = document.querySelector(".RandomizerCards");
  const triggerCard = document.querySelector(".card-top"); // верхняя карточка

  if (!startTitle || !startCardsBlock || !triggerCard) {
    console.error("Не найдены нужные элементы на странице");
    return;
  }

  // Контейнер для результата
  const resultContainer = document.createElement("div");
  resultContainer.classList.add("randomizer-result");
  resultContainer.style.display = "none";
  startCardsBlock.parentNode.insertBefore(
    resultContainer,
    startCardsBlock.nextSibling,
  );

  // Случайная карточка
  function getRandomCard() {
    return cardsData[Math.floor(Math.random() * cardsData.length)];
  }

  // Отрисовка результата
  function renderResult(card, phrase) {
    const tagWrapperClass =
      card.tag === "Антагонист"
        ? "A_CardTagAntagonist"
        : "A_CardTagProtagonist";
    const descriptionHtml = card.description.replace(/\n/g, "<br>");

    resultContainer.innerHTML = `
      <div class="randomizer-header-phrase">
        <h2>${phrase}</h2>
      </div>
      <div class="randomizer-card-wrapper">
        <a class="O_Card" data-tags="${card.tag}">
          <div class="Q_Image_Card">
            <img src="${card.image}" alt="${card.title}" />
          </div>
          <div class="M_CardArticleInfo">
            <h3 class="A_CardName">${card.title}</h3>
            <p class="A_CardNameDescription">
              ${descriptionHtml}
            </p>
            <div class="${tagWrapperClass}">
              <div class="A_CardTag">${card.tag}</div>
            </div>
          </div>
        </a>
      </div>
      <div class="randomizer-back">
        <button class="back-button">На главную</button>
      </div>
    `;
  }

  // Клик по верхней карточке
  triggerCard.addEventListener("click", function () {
    const card = getRandomCard();
    const phrase = phraseByTag[card.tag];
    if (!phrase) {
      console.warn("Нет фразы для тега:", card.tag);
      return;
    }
    renderResult(card, phrase);

    startTitle.style.display = "none";
    startCardsBlock.style.display = "none";
    resultContainer.style.display = "block";
  });

  // Кнопка «На главную»
  resultContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("back-button")) {
      resultContainer.style.display = "none";
      startTitle.style.display = "";
      startCardsBlock.style.display = "";
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Массив данных карточек (можете дополнять)
//   const cardsData = [
//     {
//       tag: "Антагонист",
//       title: "Векна",
//       description:
//         "Имя и концепция персонажа взяты из Dungeons & Dragons, где Векна — божество смерти и секретов",
//       image: vecnaImg,
//     },
//   ];

//   const phrases = [
//     "В колоде завелась нечисть, такое тоже бывает",
//     "Запутались в лоре и фанатских теориях?",
//     "Похоже, нас все‑таки ждёт хэппи-энд",
//     "Этот персонаж не даст вам уснуть",
//     "Тёмная сторона Force с вами",
//   ];

//   const startTitle = document.querySelector(".M_mainTextRandomizer");
//   const startButtonBlock = document.querySelector(".RandomizerCards");
//   const startButton = startButtonBlock?.querySelector("button");

//   if (!startTitle || !startButtonBlock || !startButton) {
//     console.error("Не найдены нужные элементы на странице");
//     return;
//   }

//   const resultContainer = document.createElement("div");
//   resultContainer.classList.add("randomizer-result");
//   resultContainer.style.display = "none";
//   startButtonBlock.parentNode.insertBefore(
//     resultContainer,
//     startButtonBlock.nextSibling,
//   );

//   function getRandomCardAndPhrase() {
//     const randomCard = cardsData[Math.floor(Math.random() * cardsData.length)];
//     const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
//     return { card: randomCard, phrase: randomPhrase };
//   }

//   function renderResult(card, phrase) {
//     resultContainer.innerHTML = `
//       <div class="randomizer-header-phrase">
//         <h2>${phrase}</h2>
//       </div>
//       <a class="O_Card" data-tags="${card.tag}">
//         <div class="Q_Image">
//           <img src=${card.image} alt="${card.title}" />
//         </div>
//         <div class="M_ArticleInfo">
//           <div class="M_TagLine">
//             <div class="A_CardTag">${card.tag}</div>
//           </div>
//           <h2 class="A_SubCard">${card.title}</h2>
//           <h2 class="A_SubCard">${card.description.replace(/\n/g, "<br>")}</h2>
//         </div>
//       </a>
//       <div class="randomizer-back">
//         <button class="back-button">На главную</button>
//       </div>
//     `;
//   }

//   startButton.addEventListener("click", function () {
//     const { card, phrase } = getRandomCardAndPhrase();
//     renderResult(card, phrase);

//     startTitle.style.display = "none";
//     startButtonBlock.style.display = "none";
//     resultContainer.style.display = "block";
//   });

//   resultContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("back-button")) {
//       resultContainer.style.display = "none";
//       startTitle.style.display = "";
//       startButtonBlock.style.display = "";
//     }
//   });
// });
