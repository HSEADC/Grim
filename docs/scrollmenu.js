/******/ (() => { // webpackBootstrap
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".M_NavigationStory .A_ArticleNavLink");
  var sections = document.querySelectorAll(".O_BlockStoryText");
  function setActiveLink(link) {
    navLinks.forEach(function (l) {
      return l.classList.remove("active");
    });
    if (link) link.classList.add("active");
  }
  function updateActiveLink() {
    var currentId = "";
    var threshold = 100;
    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      if (rect.top <= threshold) {
        currentId = section.getAttribute("id");
      }
    });
    if (currentId) {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#".concat(currentId)) {
          link.classList.add("active");
        }
      });
    }
  }
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      setActiveLink(this);
    });
  });
  var ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener("scroll", onScroll, {
    passive: true
  });
  window.addEventListener("resize", updateActiveLink, {
    passive: true
  });
  function adjustScrollMargin() {
    var header = document.querySelector(".O_Header");
    if (header) {
      var headerHeight = header.offsetHeight;
      sections.forEach(function (section) {
        section.style.scrollMarginTop = headerHeight + -80 + "px";
      });
    } else {
      sections.forEach(function (section) {
        section.style.scrollMarginTop = "80px";
      });
    }
  }
  adjustScrollMargin();
  window.addEventListener("resize", adjustScrollMargin);
  updateActiveLink();
});
/******/ })()
;