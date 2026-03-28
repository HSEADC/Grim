/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var hamMenu = document.querySelector(".hamMenu");
  var menuOverlay = document.querySelector(".menu-overlay");
  var closeBtn = document.querySelector(".closeMenu");
  var menuLinks = document.querySelectorAll(".A_navigationHeader_mobile");
  if (hamMenu && menuOverlay && closeBtn) {
    hamMenu.addEventListener("click", function () {
      menuOverlay.classList.add("active");
      document.body.classList.add("menu-open");
    });
    closeBtn.addEventListener("click", function () {
      menuOverlay.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
    menuOverlay.addEventListener("click", function (e) {
      if (e.target === menuOverlay) {
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    });
  }
  var articleData = [{
    title: "Джойс Байерс: плохая мать или жертва обстоятельств?",
    url: "/Grim/pages/articles/big_articles/joyce-st.html",
    description: "Почему осуждение Джойс Байерс несправедливо"
  }, {
    title: "Философия Пилы: Почему Джон Крамер – не просто злодей.",
    url: "/Grim/pages/articles/big_articles/philosophy-of-the-saw.html",
    description: "Разбираем искалеченную трагедией философию Джона Крамера"
  }, {
    title: "Почему «Return to Silent Hill» оказался пустой оболочкой.",
    url: "/Grim/pages/articles/big_articles/return-to-silent-hill.html",
    description: "Бездушная копия культовой игры"
  }, {
    title: "Они не могли иначе: фатализм «Реинкарнации»",
    url: "/Grim/pages/articles/big_articles/hereditary.html",
    description: "Трагедия отсутствия свободы воли"
  }, {
    title: "«Бегущий человек» как антиутопия эпохи алгоритмов",
    url: "/Grim/pages/articles/big_articles/running-man.html",
    description: "Антиутопия, где человеческое внимание стало валютой алгоритмов"
  }, {
    title: "Почему мы боимся клоунов? Разбор феномена Пеннивайза.",
    url: "/Grim/pages/articles/short_articles/it.html",
    description: "Почему мы боимся клоунов после «Оно»"
  }];
  function initSearch(containerSelector) {
    var alwaysOpen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var container = document.querySelector(containerSelector);
    if (!container) return;
    var searchIcon = container.querySelector(".W_header_search_icon");
    var searchInput = container.querySelector(".A_header_search_input");
    var searchResults = container.querySelector(".W_search_results_dropdown");
    var isOpen = alwaysOpen;
    if (!searchIcon || !searchInput || !searchResults) return;
    function showResults(results) {
      searchResults.innerHTML = "";
      if (results.length === 0) {
        searchResults.innerHTML = '<div class="M_search_result_item"><p class="text_medium_description_text">Ничего не найдено</p></div>';
      } else {
        results.slice(0, 5).forEach(function (item) {
          var result = document.createElement("a");
          result.className = "M_search_result_item";
          result.href = item.url;
          result.innerHTML = "\n            <h4 class=\"text_medium_description_text\">".concat(item.title, "</h4>\n            <p class=\"text_small_description_text\">").concat(item.description, "</p>\n          ");
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
    if (!alwaysOpen) {
      searchIcon.addEventListener("click", function (e) {
        e.stopPropagation();
        if (!isOpen) {
          openSearch();
        } else {
          closeSearch();
        }
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && isOpen) {
          closeSearch();
        }
      });
      document.addEventListener("click", function (e) {
        if (isOpen && !container.contains(e.target)) {
          closeSearch();
        }
      });
    }
    searchInput.addEventListener("input", function () {
      var query = searchInput.value.trim().toLowerCase();
      if (query.length > 0) {
        var filtered = articleData.filter(function (article) {
          return article.title.toLowerCase().includes(query) || article.description.toLowerCase().includes(query);
        });
        showResults(filtered);
      } else {
        hideResults();
      }
    });
    searchResults.addEventListener("click", function (e) {
      return e.stopPropagation();
    });
  }
  initSearch(".desktop-search", false);
  initSearch(".mobile-search", true);
});
/******/ })()
;