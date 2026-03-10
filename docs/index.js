/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var navButtons = document.querySelectorAll(".A_header_search_input");
  var currentPath = window.location.pathname;
  navButtons.forEach(function (button) {
    if (button.getAttribute("href") === currentPath) {
      button.style.background = "var(--grey)";
    }
  });
  var articleData = [{
    title: "Статья",
    url: "/articles/big articles/joyce-st",
    description: "Джойс Байерс: плохая мать или жертва обстоятельств?"
  }, {
    title: "Статья",
    url: "/articles/big articles/joyce-st",
    description: "Джойс Байерс: плохая мать или жертва обстоятельств?"
  }];
  var searchIcon = document.querySelector(".W_header_search_icon");
  var searchInput = document.querySelector(".A_header_search_input");
  var searchResults = document.querySelector(".W_search_results_dropdown");
  var isOpen = false;
  if (!searchIcon || !searchInput || !searchResults) return;
  searchIcon.addEventListener("click", function (e) {
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
  searchInput.addEventListener("input", function () {
    var query = searchInput.value.trim();
    if (query.length > 0) {
      var filteredResults = articleData.filter(function (article) {
        var lowerQuery = query.toLowerCase();
        return article.title.toLowerCase().includes(lowerQuery) || article.description.toLowerCase().includes(lowerQuery);
      });
      showResults(filteredResults);
    } else {
      hideResults();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen) {
      closeSearch();
    }
  });
  document.addEventListener("click", function (e) {
    if (isOpen && !e.target.closest(".M_header_search_bar")) {
      closeSearch();
    }
  });
  function showResults(results) {
    searchResults.innerHTML = "";
    if (results.length === 0) {
      searchResults.innerHTML = "\n        <div class=\"M_search_result_item\">\n          <p class=\"text_medium_description_text\">\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E</p>\n        </div>\n      ";
    } else {
      results.slice(0, 5).forEach(function (item) {
        var result = document.createElement("a");
        result.className = "M_search_result_item";
        result.href = item.url;
        result.innerHTML = "\n          <h4 class=\"text_medium_description_text\">".concat(item.title, "</h4>\n          <p class=\"text_small_description_text\">").concat(item.description, "</p>\n        ");
        searchResults.appendChild(result);
      });
    }
    searchResults.style.display = "block";
    setTimeout(function () {
      return searchResults.style.opacity = "1";
    }, 10);
  }
  function hideResults() {
    searchResults.style.opacity = "0";
    setTimeout(function () {
      return searchResults.style.display = "none";
    }, 200);
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
/******/ })()
;