document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(
    ".M_NavigationStory .A_ArticleNavLink",
  );
  const sections = document.querySelectorAll(".O_BlockStoryText");

  function setActiveLink(link) {
    navLinks.forEach((l) => l.classList.remove("active"));
    if (link) link.classList.add("active");
  }

  function updateActiveLink() {
    let currentId = "";
    const threshold = 100;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= threshold) {
        currentId = section.getAttribute("id");
      }
    });

    if (currentId) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      setActiveLink(this);
    });
  });

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateActiveLink, { passive: true });

  function adjustScrollMargin() {
    const header = document.querySelector(".O_Header");
    if (header) {
      const headerHeight = header.offsetHeight;
      sections.forEach((section) => {
        section.style.scrollMarginTop = headerHeight + -80 + "px";
      });
    } else {
      sections.forEach((section) => {
        section.style.scrollMarginTop = "80px";
      });
    }
  }

  adjustScrollMargin();
  window.addEventListener("resize", adjustScrollMargin);

  updateActiveLink();
});
