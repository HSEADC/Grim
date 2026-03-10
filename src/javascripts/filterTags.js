document.addEventListener("DOMContentLoaded", function () {
  const filterTags = document.querySelectorAll(".A_FilterTag");
  const cards = document.querySelectorAll(".O_Card");

  filterTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      const selectedTag = this.innerText.trim();

      if (this.classList.contains("active")) {
        // Если тег уже активен — сбрасываем фильтр
        this.classList.remove("active");
        cards.forEach((card) => (card.style.display = ""));
      } else {
        // Иначе активируем этот тег, деактивируем другие
        filterTags.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        cards.forEach((card) => {
          const cardTags = card.getAttribute("data-tags");
          if (
            cardTags &&
            cardTags
              .split(",")
              .map((t) => t.trim())
              .includes(selectedTag)
          ) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      }
    });
  });
});
