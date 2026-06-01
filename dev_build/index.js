/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/style.css */ "./src/stylesheets/style.css");

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0VBQ3BDQSxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDO0FBQ3BDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU3R1ZHkvLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzIiwid2VicGFjazovL1N0dWR5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1N0dWR5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vU3R1ZHkvLi9zcmMvamF2YXNjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL3N0eWxlc2hlZXRzL3N0eWxlLmNzc1wiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGhhbU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbU1lbnVcIik7XHJcbiAgY29uc3QgbWVudU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtb3ZlcmxheVwiKTtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VNZW51XCIpO1xyXG4gIGNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuQV9uYXZpZ2F0aW9uSGVhZGVyX21vYmlsZVwiKTtcclxuXHJcbiAgaWYgKGhhbU1lbnUgJiYgbWVudU92ZXJsYXkgJiYgY2xvc2VCdG4pIHtcclxuICAgIGhhbU1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgbWVudU92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibWVudS1vcGVuXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgbWVudU92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS1vcGVuXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWVudUxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG1lbnVPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS1vcGVuXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1lbnVPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQgPT09IG1lbnVPdmVybGF5KSB7XHJcbiAgICAgICAgbWVudU92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LW9wZW5cIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXJ0aWNsZURhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcItCU0LbQvtC50YEg0JHQsNC50LXRgNGBOiDQv9C70L7RhdCw0Y8g0LzQsNGC0Ywg0LjQu9C4INC20LXRgNGC0LLQsCDQvtCx0YHRgtC+0Y/RgtC10LvRjNGB0YLQsj9cIixcclxuICAgICAgdXJsOiBcIi9HcmltL3BhZ2VzL2FydGljbGVzL2JpZ19hcnRpY2xlcy9qb3ljZS1zdC5odG1sXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcItCf0L7Rh9C10LzRgyDQvtGB0YPQttC00LXQvdC40LUg0JTQttC+0LnRgSDQkdCw0LnQtdGA0YEg0L3QtdGB0L/RgNCw0LLQtdC00LvQuNCy0L5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcItCk0LjQu9C+0YHQvtGE0LjRjyDQn9C40LvRizog0J/QvtGH0LXQvNGDINCU0LbQvtC9INCa0YDQsNC80LXRgCDigJMg0L3QtSDQv9GA0L7RgdGC0L4g0LfQu9C+0LTQtdC5LlwiLFxyXG4gICAgICB1cmw6IFwiL0dyaW0vcGFnZXMvYXJ0aWNsZXMvYmlnX2FydGljbGVzL3BoaWxvc29waHktb2YtdGhlLXNhdy5odG1sXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcItCg0LDQt9Cx0LjRgNCw0LXQvCDQuNGB0LrQsNC70LXRh9C10L3QvdGD0Y4g0YLRgNCw0LPQtdC00LjQtdC5INGE0LjQu9C+0YHQvtGE0LjRjiDQlNC20L7QvdCwINCa0YDQsNC80LXRgNCwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCLQn9C+0YfQtdC80YMgwqtSZXR1cm4gdG8gU2lsZW50IEhpbGzCuyDQvtC60LDQt9Cw0LvRgdGPINC/0YPRgdGC0L7QuSDQvtCx0L7Qu9C+0YfQutC+0LkuXCIsXHJcbiAgICAgIHVybDogXCIvR3JpbS9wYWdlcy9hcnRpY2xlcy9iaWdfYXJ0aWNsZXMvcmV0dXJuLXRvLXNpbGVudC1oaWxsLmh0bWxcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwi0JHQtdC30LTRg9GI0L3QsNGPINC60L7Qv9C40Y8g0LrRg9C70YzRgtC+0LLQvtC5INC40LPRgNGLXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCLQntC90Lgg0L3QtSDQvNC+0LPQu9C4INC40L3QsNGH0LU6INGE0LDRgtCw0LvQuNC30LwgwqvQoNC10LjQvdC60LDRgNC90LDRhtC40LjCu1wiLFxyXG4gICAgICB1cmw6IFwiL0dyaW0vcGFnZXMvYXJ0aWNsZXMvYmlnX2FydGljbGVzL2hlcmVkaXRhcnkuaHRtbFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCLQotGA0LDQs9C10LTQuNGPINC+0YLRgdGD0YLRgdGC0LLQuNGPINGB0LLQvtCx0L7QtNGLINCy0L7Qu9C4XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCLCq9CR0LXQs9GD0YnQuNC5INGH0LXQu9C+0LLQtdC6wrsg0LrQsNC6INCw0L3RgtC40YPRgtC+0L/QuNGPINGN0L/QvtGF0Lgg0LDQu9Cz0L7RgNC40YLQvNC+0LJcIixcclxuICAgICAgdXJsOiBcIi9HcmltL3BhZ2VzL2FydGljbGVzL2JpZ19hcnRpY2xlcy9ydW5uaW5nLW1hbi5odG1sXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwi0JDQvdGC0LjRg9GC0L7Qv9C40Y8sINCz0LTQtSDRh9C10LvQvtCy0LXRh9C10YHQutC+0LUg0LLQvdC40LzQsNC90LjQtSDRgdGC0LDQu9C+INCy0LDQu9GO0YLQvtC5INCw0LvQs9C+0YDQuNGC0LzQvtCyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCLQn9C+0YfQtdC80YMg0LzRiyDQsdC+0LjQvNGB0Y8g0LrQu9C+0YPQvdC+0LI/INCg0LDQt9Cx0L7RgCDRhNC10L3QvtC80LXQvdCwINCf0LXQvdC90LjQstCw0LnQt9CwLlwiLFxyXG4gICAgICB1cmw6IFwiL0dyaW0vcGFnZXMvYXJ0aWNsZXMvc2hvcnRfYXJ0aWNsZXMvaXQuaHRtbFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCLQn9C+0YfQtdC80YMg0LzRiyDQsdC+0LjQvNGB0Y8g0LrQu9C+0YPQvdC+0LIg0L/QvtGB0LvQtSDCq9Ce0L3QvsK7XCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRTZWFyY2goY29udGFpbmVyU2VsZWN0b3IsIGFsd2F5c09wZW4gPSBmYWxzZSkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaEljb24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5XX2hlYWRlcl9zZWFyY2hfaWNvblwiKTtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuQV9oZWFkZXJfc2VhcmNoX2lucHV0XCIpO1xyXG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLldfc2VhcmNoX3Jlc3VsdHNfZHJvcGRvd25cIik7XHJcbiAgICBsZXQgaXNPcGVuID0gYWx3YXlzT3BlbjtcclxuXHJcbiAgICBpZiAoIXNlYXJjaEljb24gfHwgIXNlYXJjaElucHV0IHx8ICFzZWFyY2hSZXN1bHRzKSByZXR1cm47XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1Jlc3VsdHMocmVzdWx0cykge1xyXG4gICAgICBzZWFyY2hSZXN1bHRzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHNlYXJjaFJlc3VsdHMuaW5uZXJIVE1MID1cclxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiTV9zZWFyY2hfcmVzdWx0X2l0ZW1cIj48cCBjbGFzcz1cInRleHRfbWVkaXVtX2Rlc2NyaXB0aW9uX3RleHRcIj7QndC40YfQtdCz0L4g0L3QtSDQvdCw0LnQtNC10L3QvjwvcD48L2Rpdj4nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdHMuc2xpY2UoMCwgNSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICByZXN1bHQuY2xhc3NOYW1lID0gXCJNX3NlYXJjaF9yZXN1bHRfaXRlbVwiO1xyXG4gICAgICAgICAgcmVzdWx0LmhyZWYgPSBpdGVtLnVybDtcclxuICAgICAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cInRleHRfbWVkaXVtX2Rlc2NyaXB0aW9uX3RleHRcIj4ke2l0ZW0udGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0X3NtYWxsX2Rlc2NyaXB0aW9uX3RleHRcIj4ke2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgYDtcclxuICAgICAgICAgIHNlYXJjaFJlc3VsdHMuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBzZWFyY2hSZXN1bHRzLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVSZXN1bHRzKCkge1xyXG4gICAgICBzZWFyY2hSZXN1bHRzLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9wZW5TZWFyY2goKSB7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgc2VhcmNoSW5wdXQuZm9jdXMoKTtcclxuICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZVNlYXJjaCgpIHtcclxuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIGhpZGVSZXN1bHRzKCk7XHJcbiAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYWx3YXlzT3Blbikge1xyXG4gICAgICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgaWYgKCFpc09wZW4pIHtcclxuICAgICAgICAgIG9wZW5TZWFyY2goKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2xvc2VTZWFyY2goKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIgJiYgaXNPcGVuKSB7XHJcbiAgICAgICAgICBjbG9zZVNlYXJjaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoaXNPcGVuICYmICFjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICBjbG9zZVNlYXJjaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKHF1ZXJ5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IGFydGljbGVEYXRhLmZpbHRlcihcclxuICAgICAgICAgIChhcnRpY2xlKSA9PlxyXG4gICAgICAgICAgICBhcnRpY2xlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpIHx8XHJcbiAgICAgICAgICAgIGFydGljbGUuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzaG93UmVzdWx0cyhmaWx0ZXJlZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGlkZVJlc3VsdHMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2VhcmNoUmVzdWx0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgaW5pdFNlYXJjaChcIi5kZXNrdG9wLXNlYXJjaFwiLCBmYWxzZSk7XHJcbiAgaW5pdFNlYXJjaChcIi5tb2JpbGUtc2VhcmNoXCIsIHRydWUpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbU1lbnUiLCJxdWVyeVNlbGVjdG9yIiwibWVudU92ZXJsYXkiLCJjbG9zZUJ0biIsIm1lbnVMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwicmVtb3ZlIiwiZm9yRWFjaCIsImxpbmsiLCJlIiwidGFyZ2V0IiwiYXJ0aWNsZURhdGEiLCJ0aXRsZSIsInVybCIsImRlc2NyaXB0aW9uIiwiaW5pdFNlYXJjaCIsImNvbnRhaW5lclNlbGVjdG9yIiwiYWx3YXlzT3BlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbnRhaW5lciIsInNlYXJjaEljb24iLCJzZWFyY2hJbnB1dCIsInNlYXJjaFJlc3VsdHMiLCJpc09wZW4iLCJzaG93UmVzdWx0cyIsInJlc3VsdHMiLCJpbm5lckhUTUwiLCJzbGljZSIsIml0ZW0iLCJyZXN1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHJlZiIsImNvbmNhdCIsImFwcGVuZENoaWxkIiwiaGlkZVJlc3VsdHMiLCJvcGVuU2VhcmNoIiwiZm9jdXMiLCJjbG9zZVNlYXJjaCIsInZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwia2V5IiwiY29udGFpbnMiLCJxdWVyeSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiYXJ0aWNsZSIsImluY2x1ZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==