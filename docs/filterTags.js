/******/ (() => { // webpackBootstrap
document.addEventListener("DOMContentLoaded", function () {
  var filterTags = document.querySelectorAll(".A_FilterTag");
  var cards = document.querySelectorAll(".O_Card");
  filterTags.forEach(function (tag) {
    tag.addEventListener("click", function () {
      var selectedTag = this.innerText.trim();
      if (this.classList.contains("active")) {
        // Если тег уже активен — сбрасываем фильтр
        this.classList.remove("active");
        cards.forEach(function (card) {
          return card.style.display = "";
        });
      } else {
        // Иначе активируем этот тег, деактивируем другие
        filterTags.forEach(function (t) {
          return t.classList.remove("active");
        });
        this.classList.add("active");
        cards.forEach(function (card) {
          var cardTags = card.getAttribute("data-tags");
          if (cardTags && cardTags.split(",").map(function (t) {
            return t.trim();
          }).includes(selectedTag)) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      }
    });
  });
});
/******/ })()
;