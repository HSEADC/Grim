import "../stylesheets/style.css";

document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".A_header_search_input");
  const currentPath = window.location.pathname;

  navButtons.forEach((button) => {
    if (button.getAttribute("href") === currentPath) {
      button.style.background = "var(--grey)";
    }
  });

  const articleData = [
    {
      title: "Статья",
      url: "/articles/big articles/joyce-st",
      description: "Джойс Байерс: плохая мать или жертва обстоятельств?",
    },
    {
      title: "Статья",
      url: "/articles/big articles/joyce-st",
      description: "Джойс Байерс: плохая мать или жертва обстоятельств?",
    },
  ];

  const searchIcon = document.querySelector(".W_header_search_icon");
  const searchInput = document.querySelector(".A_header_search_input");
  const searchResults = document.querySelector(".W_search_results_dropdown");
  let isOpen = false;

  if (!searchIcon || !searchInput || !searchResults) return;

  searchIcon.addEventListener("click", (e) => {
    e.stopPropagation();

    if (!isOpen) {
      searchInput.style.width = "280px";
      searchInput.style.padding = "0 12px";
      searchInput.style.opacity = "1";
      searchInput.style.border = "none";
      searchInput.style.right = "30px";
      searchInput.focus();
      searchIcon.style.background = "var(--black)"; // или любой цвет при открытии
      isOpen = true;
    } else {
      closeSearch();
    }
  });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    if (query.length > 0) {
      const filteredResults = articleData.filter((article) => {
        const lowerQuery = query.toLowerCase();
        return (
          article.title.toLowerCase().includes(lowerQuery) ||
          article.description.toLowerCase().includes(lowerQuery)
        );
      });
      showResults(filteredResults);
    } else {
      hideResults();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) {
      closeSearch();
    }
  });

  document.addEventListener("click", (e) => {
    if (isOpen && !e.target.closest(".M_header_search_bar")) {
      closeSearch();
    }
  });

  function showResults(results) {
    searchResults.innerHTML = "";

    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="M_search_result_item">
          <p class="text_medium_description_text">Ничего не найдено</p>
        </div>
      `;
    } else {
      results.slice(0, 5).forEach((item) => {
        const result = document.createElement("a");
        result.className = "M_search_result_item";
        result.href = item.url;
        result.innerHTML = `
          <h4 class="text_medium_description_text">${item.title}</h4>
          <p class="text_small_description_text">${item.description}</p>
        `;
        searchResults.appendChild(result);
      });
    }

    searchResults.style.display = "block";
    setTimeout(() => (searchResults.style.opacity = "1"), 10);
  }

  function hideResults() {
    searchResults.style.opacity = "0";
    setTimeout(() => (searchResults.style.display = "none"), 200);
  }

  function closeSearch() {
    searchInput.style.width = "0";
    searchInput.style.padding = "0";
    searchInput.style.opacity = "0";
    searchInput.style.border = "none";
    searchInput.value = "";
    searchInput.style.right = "30px";

    searchIcon.style.background = "var(--black)";

    hideResults();
    isOpen = false;
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Получаем элементы
//   const hamMenu = document.querySelector(".hamMenu");
//   const closeMenu = document.querySelector(".closeMenu");
//   const menuOverlay = document.querySelector(".menu-overlay");

//   // Проверяем, есть ли элементы на странице
//   if (!hamMenu || !closeMenu || !menuOverlay) {
//     console.log("Не все элементы меню найдены на странице");
//     return;
//   }

//   // Открываем меню
//   hamMenu.addEventListener("click", function (e) {
//     e.stopPropagation(); // Останавливаем всплытие события
//     menuOverlay.classList.add("active");
//     document.body.style.overflow = "hidden"; // Блокируем скролл страницы
//   });

//   // Закрываем меню
//   closeMenu.addEventListener("click", function () {
//     menuOverlay.classList.remove("active");
//     document.body.style.overflow = ""; // Разблокируем скролл
//   });

//   // Закрываем меню при клике на ссылку
//   const menuLinks = document.querySelectorAll(".C_menuItems .A_H1");
//   menuLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       menuOverlay.classList.remove("active");
//       document.body.style.overflow = "";
//     });
//   });

//   // Закрываем меню при клике вне его
//   menuOverlay.addEventListener("click", (e) => {
//     if (e.target === menuOverlay) {
//       menuOverlay.classList.remove("active");
//       document.body.style.overflow = "";
//     }
//   });
// });
