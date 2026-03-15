/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/images/cards/Q_ImageCardsMainVecna.gif
const Q_ImageCardsMainVecna_namespaceObject = __webpack_require__.p + "images/5553325eda6ac7465bf8.gif";
;// ./src/images/cards/Q_ImageCardsMainDustin.gif
const Q_ImageCardsMainDustin_namespaceObject = __webpack_require__.p + "images/0e5d18fda61717792dc7.gif";
;// ./src/images/cards/Q_ImageCardsMainHannibal.gif
const Q_ImageCardsMainHannibal_namespaceObject = __webpack_require__.p + "images/609710227f3624f793e2.gif";
;// ./src/images/cards/Q_ImageCardsMainIt.gif
const Q_ImageCardsMainIt_namespaceObject = __webpack_require__.p + "images/7c6a7f82358b270e9ef0.gif";
;// ./src/images/cards/Q_ImageCardsMainSabrina.gif
const Q_ImageCardsMainSabrina_namespaceObject = __webpack_require__.p + "images/689af8d871b7fd058e1a.gif";
;// ./src/images/cards/Q_ImageCardsMainBeverly.gif
const Q_ImageCardsMainBeverly_namespaceObject = __webpack_require__.p + "images/e14396f6f287fc3c1e62.gif";
;// ./src/javascripts/randomizer.js






document.addEventListener("DOMContentLoaded", function () {
  // Массив данных карточек
  var cardsData = [{
    tag: "Антагонист",
    title: "Векна",
    description: "Имя и концепция персонажа взяты \nиз Dungeons & Dragons, где Векна — \nбожество смерти и секретов",
    image: Q_ImageCardsMainVecna_namespaceObject
  }, {
    tag: "Протагонист",
    title: "Дастин Хендерсон",
    description: "Уникальная внешность Дастина обусловлена \nредким генетическим заболеванием актёра — \nключично-черепной дисплазией",
    image: Q_ImageCardsMainDustin_namespaceObject
  }, {
    tag: "Антагонист",
    title: "Ганнибал Лектер",
    description: "Прототип персонажа хирург-убийца \nАльфредо Балли Тревино, с которым писатель \nпознакомился в тюрьме в 1960-х",
    image: Q_ImageCardsMainHannibal_namespaceObject
  }, {
    tag: "Антагонист",
    title: "Пеннивайз",
    description: "Автор придумал персонажа когда \nспросил себя, кого боятся дети «больше, \nчем что-либо другое в мире»",
    image: Q_ImageCardsMainIt_namespaceObject
  }, {
    tag: "Протагонист",
    title: "Сабрина Спеллман",
    description: "У актрисы аллергия на кошек, \nпоэтому контакт с Салемом в кадре \nсвели к минимуму",
    image: Q_ImageCardsMainSabrina_namespaceObject
  }, {
    tag: "Протагонист",
    title: "Беверли Марш",
    description: "Персонаж поднимает проблему того, \nкак детская травма формирует \nсудьбу взрослой женщины",
    image: Q_ImageCardsMainBeverly_namespaceObject
  }];

  // Фразы по тегу
  var phraseByTag = {
    Антагонист: "В колоде завелась нечисть,<br>такое тоже бывает",
    Протагонист: "Похоже, нас все‑таки ждёт<br>хэппи-энд"
  };

  // Элементы страницы
  var startTitle = document.querySelector(".M_mainTextRandomizer");
  var startCardsBlock = document.querySelector(".RandomizerCards");
  var triggerCard = document.querySelector(".card-top"); // верхняя карточка

  if (!startTitle || !startCardsBlock || !triggerCard) {
    console.error("Не найдены нужные элементы на странице");
    return;
  }

  // Контейнер для результата
  var resultContainer = document.createElement("div");
  resultContainer.classList.add("randomizer-result");
  resultContainer.style.display = "none";
  startCardsBlock.parentNode.insertBefore(resultContainer, startCardsBlock.nextSibling);

  // Случайная карточка
  function getRandomCard() {
    return cardsData[Math.floor(Math.random() * cardsData.length)];
  }

  // Отрисовка результата
  function renderResult(card, phrase) {
    var tagWrapperClass = card.tag === "Антагонист" ? "A_CardTagAntagonist" : "A_CardTagProtagonist";
    var descriptionHtml = card.description.replace(/\n/g, "<br>");
    resultContainer.innerHTML = "\n      <div class=\"randomizer-header-phrase\">\n        <h2>".concat(phrase, "</h2>\n      </div>\n      <div class=\"randomizer-card-wrapper\">\n        <a class=\"O_Card\" data-tags=\"").concat(card.tag, "\">\n          <div class=\"Q_Image_Card\">\n            <img src=\"").concat(card.image, "\" alt=\"").concat(card.title, "\" />\n          </div>\n          <div class=\"M_CardArticleInfo\">\n            <h3 class=\"A_CardName\">").concat(card.title, "</h3>\n            <p class=\"A_CardNameDescription\">\n              ").concat(descriptionHtml, "\n            </p>\n            <div class=\"").concat(tagWrapperClass, "\">\n              <div class=\"A_CardTag\">").concat(card.tag, "</div>\n            </div>\n          </div>\n        </a>\n      </div>\n      <div class=\"randomizer-back\">\n        <button class=\"back-button\">\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</button>\n      </div>\n    ");
  }

  // Клик по верхней карточке
  triggerCard.addEventListener("click", function () {
    var card = getRandomCard();
    var phrase = phraseByTag[card.tag];
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
/******/ })()
;