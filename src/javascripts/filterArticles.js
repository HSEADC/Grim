document.addEventListener("DOMContentLoaded", function () {
  const filterTags = document.querySelectorAll(".A_FilterTag");

  const articles = document.querySelectorAll(
    ".O_CardArticle, .O_CardArticleBig",
  );

  filterTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      const selectedTag = this.innerText.trim();

      if (this.classList.contains("active")) {
        this.classList.remove("active");
        articles.forEach((article) => (article.style.display = ""));
      } else {
        filterTags.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        articles.forEach((article) => {
          const articleTags = article.getAttribute("data-tags");
          if (
            articleTags &&
            articleTags
              .split(",")
              .map((t) => t.trim())
              .includes(selectedTag)
          ) {
            article.style.display = "";
          } else {
            article.style.display = "none";
          }
        });
      }
    });
  });
});
