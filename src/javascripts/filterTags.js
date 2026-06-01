document.addEventListener("DOMContentLoaded", function () {
  const filterTags = document.querySelectorAll(".A_FilterTag");
  const cards = document.querySelectorAll(".O_Card");
  const allCardsContainer = document.querySelector(".C_AllCards");
  const randomizer = document.querySelector(".S_Randomizer");

  const originalRows = document.querySelectorAll(".C_CardsRow");
  const originalHTML = allCardsContainer.innerHTML;

  function restoreOriginal() {
    allCardsContainer.innerHTML = originalHTML;

    window.cards = document.querySelectorAll(".O_Card");
  }

  function buildFilteredView(selectedTag) {
    const visibleCards = Array.from(cards).filter((card) => {
      const tags = card.getAttribute("data-tags");
      if (!tags) return false;
      return tags
        .split(",")
        .map((t) => t.trim())
        .includes(selectedTag);
    });

    allCardsContainer.innerHTML = "";

    const filteredRow = document.createElement("div");
    filteredRow.classList.add("C_FilteredCardsRow");

    visibleCards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.style.display = "";
      filteredRow.appendChild(clone);
    });

    allCardsContainer.appendChild(filteredRow);
    allCardsContainer.appendChild(randomizer.cloneNode(true));
  }

  filterTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      const selectedTag = this.innerText.trim();

      if (this.classList.contains("active")) {
        this.classList.remove("active");
        restoreOriginal();
        return;
      }

      filterTags.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      buildFilteredView(selectedTag);
    });
  });
});
