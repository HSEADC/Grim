/******/ (() => { // webpackBootstrap
document.addEventListener("DOMContentLoaded", function () {
  var filterTags = document.querySelectorAll(".A_FilterTag");
  var cards = document.querySelectorAll(".O_Card");
  var allCardsContainer = document.querySelector(".C_AllCards");
  var randomizer = document.querySelector(".S_Randomizer");
  var originalRows = document.querySelectorAll(".C_CardsRow");
  var originalHTML = allCardsContainer.innerHTML;
  function restoreOriginal() {
    allCardsContainer.innerHTML = originalHTML;
    window.cards = document.querySelectorAll(".O_Card");
  }
  function buildFilteredView(selectedTag) {
    var visibleCards = Array.from(cards).filter(function (card) {
      var tags = card.getAttribute("data-tags");
      if (!tags) return false;
      return tags.split(",").map(function (t) {
        return t.trim();
      }).includes(selectedTag);
    });
    allCardsContainer.innerHTML = "";
    var filteredRow = document.createElement("div");
    filteredRow.classList.add("C_FilteredCardsRow");
    visibleCards.forEach(function (card) {
      var clone = card.cloneNode(true);
      clone.style.display = "";
      filteredRow.appendChild(clone);
    });
    allCardsContainer.appendChild(filteredRow);
    allCardsContainer.appendChild(randomizer.cloneNode(true));
  }
  filterTags.forEach(function (tag) {
    tag.addEventListener("click", function () {
      var selectedTag = this.innerText.trim();
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        restoreOriginal();
        return;
      }
      filterTags.forEach(function (t) {
        return t.classList.remove("active");
      });
      this.classList.add("active");
      buildFilteredView(selectedTag);
    });
  });
});
/******/ })()
;