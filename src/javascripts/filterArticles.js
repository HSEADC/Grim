document.addEventListener("DOMContentLoaded", function () {
  const filterTags = document.querySelectorAll(".A_FilterTag");
  const allArticlesContainer = document.querySelector(".C_AllArticles");

  // Один раз сохраняем исходный HTML контейнера
  const originalHTML = allArticlesContainer.innerHTML;

  // Собираем данные всех статей в массив (не зависит от дальнейших изменений DOM)
  const articlesData = [];
  const initialArticles = allArticlesContainer.querySelectorAll(
    ".O_CardArticleBig, .O_CardArticle",
  );
  initialArticles.forEach((article) => {
    const href = article.getAttribute("href");
    const tags = article.getAttribute("data-tags");
    const img = article.querySelector("img");
    const imgSrc = img ? img.getAttribute("src") : "";
    const imgAlt = img ? img.getAttribute("alt") : "";
    const dateEl = article.querySelector(".A_Date");
    const date = dateEl ? dateEl.innerText.trim() : "";
    const titleEl = article.querySelector("h2"); // .A_ArticleName или .A_ArticleNameSmall
    const title = titleEl ? titleEl.innerText.trim() : "";

    articlesData.push({ href, tags, imgSrc, imgAlt, date, title });
  });

  function restoreOriginal() {
    allArticlesContainer.innerHTML = originalHTML;
    allArticlesContainer.style.gap = ""; // возвращаем исходный gap
  }

  function buildFilteredView(selectedTag) {
    // Оставляем только подходящие статьи
    const filtered = articlesData.filter((item) => {
      if (!item.tags) return false;
      const itemTags = item.tags.split(",").map((t) => t.trim());
      return itemTags.includes(selectedTag);
    });

    // Определяем CSS-класс для тега категории
    let categoryClass = "";
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
    const filteredRow = document.createElement("div");
    filteredRow.classList.add("C_FilteredArticlesRow");

    // Для каждой статьи строим маленькую карточку O_CardArticle
    filtered.forEach((item) => {
      const card = document.createElement("a");
      card.classList.add("O_CardArticle");
      card.href = item.href;

      card.innerHTML = `
        <div class="Q_ImageSmall">
          <img src="${item.imgSrc}" alt="${item.imgAlt}" />
        </div>
        <div class="M_ArticleInfo">
          <div class="M_TagDateSmall">
            <div class="A_Date">${item.date}</div>
          </div>
          <h2 class="A_ArticleNameSmall">${item.title}</h2>
          <div class="${categoryClass}">
            <p class="A_p_tag_small">${selectedTag}</p>
          </div>
        </div>
      `;

      filteredRow.appendChild(card);
    });

    allArticlesContainer.appendChild(filteredRow);
  }

  // Навешиваем обработчики на фильтры
  filterTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      const selectedTag = this.innerText.trim();

      // Если тег уже активен – сбрасываем фильтр
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        restoreOriginal();
        return;
      }

      // Деактивируем все теги, активируем текущий
      filterTags.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      buildFilteredView(selectedTag);
    });
  });
});
