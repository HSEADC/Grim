/******/ (() => { // webpackBootstrap
document.addEventListener("DOMContentLoaded", function () {
  var filterTags = document.querySelectorAll(".A_FilterTag");
  var articles = document.querySelectorAll(".O_CardArticle, .O_CardArticleBig");
  filterTags.forEach(function (tag) {
    tag.addEventListener("click", function () {
      var selectedTag = this.innerText.trim(); // текст тега (например, "Анализ персонажа")

      // Если текущий тег уже активен — сбрасываем фильтр
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        articles.forEach(function (article) {
          return article.style.display = "";
        }); // показываем все статьи
      } else {
        // Иначе активируем этот тег и деактивируем все остальные
        filterTags.forEach(function (t) {
          return t.classList.remove("active");
        });
        this.classList.add("active");

        // Фильтруем статьи
        articles.forEach(function (article) {
          var articleTags = article.getAttribute("data-tags");
          if (articleTags && articleTags.split(",").map(function (t) {
            return t.trim();
          }).includes(selectedTag)) {
            article.style.display = "";
          } else {
            article.style.display = "none";
          }
        });
      }
    });
  });
});
/******/ })()
;