/******/ (() => { // webpackBootstrap
document.addEventListener("DOMContentLoaded", function () {
  var filterTags = document.querySelectorAll(".A_FilterTag");
  var allArticlesContainer = document.querySelector(".C_AllArticles");

  // Один раз сохраняем исходный HTML контейнера
  var originalHTML = allArticlesContainer.innerHTML;

  // Собираем данные всех статей в массив (не зависит от дальнейших изменений DOM)
  var articlesData = [];
  var initialArticles = allArticlesContainer.querySelectorAll(".O_CardArticleBig, .O_CardArticle");
  initialArticles.forEach(function (article) {
    var href = article.getAttribute("href");
    var tags = article.getAttribute("data-tags");
    var img = article.querySelector("img");
    var imgSrc = img ? img.getAttribute("src") : "";
    var imgAlt = img ? img.getAttribute("alt") : "";
    var dateEl = article.querySelector(".A_Date");
    var date = dateEl ? dateEl.innerText.trim() : "";
    var titleEl = article.querySelector("h2"); // .A_ArticleName или .A_ArticleNameSmall
    var title = titleEl ? titleEl.innerText.trim() : "";
    articlesData.push({
      href: href,
      tags: tags,
      imgSrc: imgSrc,
      imgAlt: imgAlt,
      date: date,
      title: title
    });
  });
  function restoreOriginal() {
    allArticlesContainer.innerHTML = originalHTML;
    allArticlesContainer.style.gap = ""; // возвращаем исходный gap
  }
  function buildFilteredView(selectedTag) {
    // Оставляем только подходящие статьи
    var filtered = articlesData.filter(function (item) {
      if (!item.tags) return false;
      var itemTags = item.tags.split(",").map(function (t) {
        return t.trim();
      });
      return itemTags.includes(selectedTag);
    });

    // Определяем CSS-класс для тега категории
    var categoryClass = "";
    switch (selectedTag) {
      case "Анализ персонажа":
        categoryClass = "A_TagArticleCharacterAnalysis";
        break;
      case "Концептуальный разбор":
        categoryClass = "A_TagArticleConceptualAnalysis";
        break;
      case "Психология хоррора":
        categoryClass = "A_TagArticlePsychologyOfHorror";
        break;
      case "Социальная критика":
        categoryClass = "A_TagArticleSocialCriticism";
        break;
      case "Анатомия спецэффектов":
        categoryClass = "A_TagArticleAnatomyOfSpecialEffects";
        break;
    }

    // Очищаем контейнер и убираем лишний gap
    allArticlesContainer.innerHTML = "";
    allArticlesContainer.style.gap = "0";

    // Создаём обёртку для отфильтрованных карточек
    var filteredRow = document.createElement("div");
    filteredRow.classList.add("C_FilteredArticlesRow");

    // Для каждой статьи строим маленькую карточку O_CardArticle
    filtered.forEach(function (item) {
      var card = document.createElement("a");
      card.classList.add("O_CardArticle");
      card.href = item.href;
      card.innerHTML = "\n        <div class=\"Q_ImageSmall\">\n          <img src=\"".concat(item.imgSrc, "\" alt=\"").concat(item.imgAlt, "\" />\n        </div>\n        <div class=\"M_ArticleInfo\">\n          <div class=\"M_TagDateSmall\">\n            <div class=\"A_Date\">").concat(item.date, "</div>\n          </div>\n          <h2 class=\"A_ArticleNameSmall\">").concat(item.title, "</h2>\n          <div class=\"").concat(categoryClass, "\">\n            <p class=\"A_p_tag_small\">").concat(selectedTag, "</p>\n          </div>\n        </div>\n      ");
      filteredRow.appendChild(card);
    });
    allArticlesContainer.appendChild(filteredRow);
  }

  // Навешиваем обработчики на фильтры
  filterTags.forEach(function (tag) {
    tag.addEventListener("click", function () {
      var selectedTag = this.innerText.trim();

      // Если тег уже активен – сбрасываем фильтр
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        restoreOriginal();
        return;
      }

      // Деактивируем все теги, активируем текущий
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