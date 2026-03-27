// import "../stylesheets/style.css";

// document.addEventListener("DOMContentLoaded", () => {
//   const hamMenu = document.querySelector(".hamMenu");
//   const menuOverlay = document.querySelector(".menu-overlay");
//   const closeBtn = document.querySelector(".closeMenu");
//   const menuLinks = document.querySelectorAll(".A_navigationHeader_mobile");

//   if (hamMenu && menuOverlay && closeBtn) {
//     hamMenu.addEventListener("click", () => {
//       menuOverlay.classList.add("active");
//       document.body.classList.add("menu-open");
//     });

//     closeBtn.addEventListener("click", () => {
//       menuOverlay.classList.remove("active");
//       document.body.classList.remove("menu-open");
//     });

//     menuLinks.forEach((link) => {
//       link.addEventListener("click", () => {
//         menuOverlay.classList.remove("active");
//         document.body.classList.remove("menu-open");
//       });
//     });

//     menuOverlay.addEventListener("click", (e) => {
//       if (e.target === menuOverlay) {
//         menuOverlay.classList.remove("active");
//         document.body.classList.remove("menu-open");
//       }
//     });
//   }

//   const articleData = [
//     {
//       title: "Джойс Байерс: плохая мать или жертва обстоятельств?",
//       url: "pages/articles/big_articles/joyce-st.html",
//       description: "Почему осуждение Джойс Байерс несправедливо",
//     },
//     {
//       title: "Философия Пилы: Почему Джон Крамер – не просто злодей.",
//       url: "pages/articles/big_articles/philosophy-of-the-saw.html",
//       description: "Разбираем искалеченную трагедией философию Джона Крамера",
//     },
//     {
//       title: "Почему «Return to Silent Hill» оказался пустой оболочкой.",
//       url: "pages/articles/big_articles/return-to-silent-hill.html",
//       description: "Бездушная копия культовой игры",
//     },
//     {
//       title: "Они не могли иначе: фатализм «Реинкарнации»",
//       url: "pages/articles/big_articles/hereditary.html",
//       description: "Трагедия отсутствия свободы воли",
//     },
//     {
//       title: "«Бегущий человек» как антиутопия эпохи алгоритмов",
//       url: "pages/articles/big_articles/running-man.html",
//       description:
//         "Антиутопия, где человеческое внимание стало валютой алгоритмов",
//     },
//     {
//       title: "Почему мы боимся клоунов? Разбор феномена Пеннивайза.",
//       url: "pages/articles/short_articles/it.html",
//       description: "Почему мы боимся клоунов после «Оно»",
//     },
//   ];

//   function initSearch(containerSelector, alwaysOpen = false) {
//     const container = document.querySelector(containerSelector);
//     if (!container) return;

//     const searchIcon = container.querySelector(".W_header_search_icon");
//     const searchInput = container.querySelector(".A_header_search_input");
//     const searchResults = container.querySelector(".W_search_results_dropdown");
//     let isOpen = alwaysOpen;

//     if (!searchIcon || !searchInput || !searchResults) return;

//     function showResults(results) {
//       searchResults.innerHTML = "";
//       if (results.length === 0) {
//         searchResults.innerHTML =
//           '<div class="M_search_result_item"><p class="text_medium_description_text">Ничего не найдено</p></div>';
//       } else {
//         results.slice(0, 5).forEach((item) => {
//           const result = document.createElement("a");
//           result.className = "M_search_result_item";
//           result.href = item.url;
//           result.innerHTML = `
//             <h4 class="text_medium_description_text">${item.title}</h4>
//             <p class="text_small_description_text">${item.description}</p>
//           `;
//           searchResults.appendChild(result);
//         });
//       }
//       searchResults.classList.add("show");
//     }

//     function hideResults() {
//       searchResults.classList.remove("show");
//     }

//     function openSearch() {
//       container.classList.add("open");
//       searchInput.focus();
//       isOpen = true;
//     }

//     function closeSearch() {
//       container.classList.remove("open");
//       searchInput.value = "";
//       hideResults();
//       isOpen = false;
//     }

//     if (!alwaysOpen) {
//       searchIcon.addEventListener("click", (e) => {
//         e.stopPropagation();
//         if (!isOpen) {
//           openSearch();
//         } else {
//           closeSearch();
//         }
//       });

//       document.addEventListener("keydown", (e) => {
//         if (e.key === "Escape" && isOpen) {
//           closeSearch();
//         }
//       });

//       document.addEventListener("click", (e) => {
//         if (isOpen && !container.contains(e.target)) {
//           closeSearch();
//         }
//       });
//     }

//     searchInput.addEventListener("input", () => {
//       const query = searchInput.value.trim().toLowerCase();
//       if (query.length > 0) {
//         const filtered = articleData.filter(
//           (article) =>
//             article.title.toLowerCase().includes(query) ||
//             article.description.toLowerCase().includes(query),
//         );
//         showResults(filtered);
//       } else {
//         hideResults();
//       }
//     });

//     searchResults.addEventListener("click", (e) => e.stopPropagation());
//   }

//   initSearch(".desktop-search", false);
//   initSearch(".mobile-search", true);
// });

import "../stylesheets/style.css";

// ---------------------------------------------------------------------
// 1. Определение базового пути проекта
// ---------------------------------------------------------------------
function getBasePath() {
  if (window.location.pathname.includes("/Grim/")) {
    return "/Grim/";
  }
  return "/";
}

// ---------------------------------------------------------------------
// 2. Массив статей (пути относительные, от корня проекта)
// ---------------------------------------------------------------------
const articleData = [
  {
    title: "Джойс Байерс: плохая мать или жертва обстоятельств?",
    url: "pages/articles/big_articles/joyce-st.html",
    description: "Почему осуждение Джойс Байерс несправедливо",
  },
  {
    title: "Философия Пилы: Почему Джон Крамер – не просто злодей.",
    url: "pages/articles/big_articles/philosophy-of-the-saw.html",
    description: "Разбираем искалеченную трагедией философию Джона Крамера",
  },
  {
    title: "Почему «Return to Silent Hill» оказался пустой оболочкой.",
    url: "pages/articles/big_articles/return-to-silent-hill.html",
    description: "Бездушная копия культовой игры",
  },
  {
    title: "Они не могли иначе: фатализм «Реинкарнации»",
    url: "pages/articles/big_articles/hereditary.html",
    description: "Трагедия отсутствия свободы воли",
  },
  {
    title: "«Бегущий человек» как антиутопия эпохи алгоритмов",
    url: "pages/articles/big_articles/running-man.html",
    description:
      "Антиутопия, где человеческое внимание стало валютой алгоритмов",
  },
  {
    title: "Почему мы боимся клоунов? Разбор феномена Пеннивайза.",
    url: "pages/articles/short_articles/it.html",
    description: "Почему мы боимся клоунов после «Оно»",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector(".hamMenu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const closeBtn = document.querySelector(".closeMenu");
  const menuLinks = document.querySelectorAll(".A_navigationHeader_mobile");

  if (hamMenu && menuOverlay && closeBtn) {
    hamMenu.addEventListener("click", () => {
      menuOverlay.classList.add("active");
      document.body.classList.add("menu-open");
    });

    closeBtn.addEventListener("click", () => {
      menuOverlay.classList.remove("active");
      document.body.classList.remove("menu-open");
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });

    menuOverlay.addEventListener("click", (e) => {
      if (e.target === menuOverlay) {
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    });
  }

  // ---------------------------------------------------------------------
  // 3. Функция инициализации поиска (полная версия с изменениями)
  // ---------------------------------------------------------------------
  function initSearch(containerSelector, alwaysOpen = false) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const searchIcon = container.querySelector(".W_header_search_icon");
    const searchInput = container.querySelector(".A_header_search_input");
    const searchResults = container.querySelector(".W_search_results_dropdown");
    let isOpen = alwaysOpen;

    if (!searchIcon || !searchInput || !searchResults) return;

    function showResults(results) {
      searchResults.innerHTML = "";
      const base = getBasePath(); // получаем базовый путь

      if (results.length === 0) {
        searchResults.innerHTML =
          '<div class="M_search_result_item"><p class="text_medium_description_text">Ничего не найдено</p></div>';
      } else {
        results.slice(0, 5).forEach((item) => {
          const result = document.createElement("a");
          result.className = "M_search_result_item";
          result.href = base + item.url; // собираем полный путь
          result.innerHTML = `
            <h4 class="text_medium_description_text">${item.title}</h4>
            <p class="text_small_description_text">${item.description}</p>
          `;
          searchResults.appendChild(result);
        });
      }
      searchResults.classList.add("show");
    }

    function hideResults() {
      searchResults.classList.remove("show");
    }

    function openSearch() {
      container.classList.add("open");
      searchInput.focus();
      isOpen = true;
    }

    function closeSearch() {
      container.classList.remove("open");
      searchInput.value = "";
      hideResults();
      isOpen = false;
    }

    // Для десктопа (не alwaysOpen) обрабатываем клик по иконке
    if (!alwaysOpen) {
      searchIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!isOpen) {
          openSearch();
        } else {
          closeSearch();
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && isOpen) {
          closeSearch();
        }
      });

      document.addEventListener("click", (e) => {
        if (isOpen && !container.contains(e.target)) {
          closeSearch();
        }
      });
    }

    // Обработка ввода (для всех)
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      if (query.length > 0) {
        const filtered = articleData.filter(
          (article) =>
            article.title.toLowerCase().includes(query) ||
            article.description.toLowerCase().includes(query),
        );
        showResults(filtered);
      } else {
        hideResults();
      }
    });

    // Не закрывать список при клике на него
    searchResults.addEventListener("click", (e) => e.stopPropagation());
  }

  // Инициализация поиска для десктопа и мобильной версии
  initSearch(".desktop-search", false);
  initSearch(".mobile-search", true);
});
