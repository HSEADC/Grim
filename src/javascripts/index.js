import "../stylesheets/style.css";

document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector(".hamMenu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const closeBtn = document.querySelector(".closeMenu");
  const menuLinks = document.querySelectorAll(".A_navigationHeader_mobile");

  if (hamMenu && menuOverlay && closeBtn) {
    hamMenu.addEventListener("click", () => {
      menuOverlay.classList.add("active");
      document.body.classList.add("menu-open");
    });

    closeBtn.addEventListener("click", () => {
      menuOverlay.classList.remove("active");
      document.body.classList.remove("menu-open");
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });

    menuOverlay.addEventListener("click", (e) => {
      if (e.target === menuOverlay) {
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    });
  }

  const articleData = [
    {
      title: "Джойс Байерс: плохая мать или жертва обстоятельств?",
      url: "/grim.adc.ac/pages/articles/big_articles/joyce-st.html",
      description: "Почему осуждение Джойс Байерс несправедливо",
    },
    {
      title: "Философия Пилы: Почему Джон Крамер – не просто злодей.",
      url: "/grim.adc.ac/pages/articles/big_articles/philosophy-of-the-saw.html",
      description: "Разбираем искалеченную трагедией философию Джона Крамера",
    },
    {
      title: "Почему «Return to Silent Hill» оказался пустой оболочкой.",
      url: "/grim.adc.ac/pages/articles/big_articles/return-to-silent-hill.html",
      description: "Бездушная копия культовой игры",
    },
    {
      title: "Они не могли иначе: фатализм «Реинкарнации»",
      url: "/grim.adc.ac/pages/articles/big_articles/hereditary.html",
      description: "Трагедия отсутствия свободы воли",
    },
    {
      title: "«Бегущий человек» как антиутопия эпохи алгоритмов",
      url: "/grim.adc.ac/pages/articles/big_articles/running-man.html",
      description:
        "Антиутопия, где человеческое внимание стало валютой алгоритмов",
    },
    {
      title: "Почему мы боимся клоунов? Разбор феномена Пеннивайза.",
      url: "/grim.adc.ac/pages/articles/short_articles/it.html",
      description: "Почему мы боимся клоунов после «Оно»",
    },
    // Новые большие статьи (big_articles)
    {
      title: "Изнанка: создание монстров в «Очень странных делах»",
      url: "/grim.adc.ac/pages/articles/big_articles/upside-down.html",
      description:
        "Как смесь пластического грима, аниматроники и CGI создаёт уникальную атмосферу сериала",
    },
    {
      title: "Почему малые искажения лица пугают сильнее монстров",
      url: "/grim.adc.ac/pages/articles/big_articles/smile.html",
      description:
        "Современные VFX ломают доверие к лицу, превращая едва заметное искажение в источник тревоги",
    },
    {
      title: "Главная тема «Пилы» — не пытки, а ценность жизни",
      url: "/grim.adc.ac/pages/articles/big_articles/saw-two.html",
      description:
        "За жестокими ловушками скрывается идея осознания ценности собственной жизни",
    },
    {
      title: "Как «Звонок» создаёт тревогу без типичных скримеров",
      url: "/grim.adc.ac/pages/articles/big_articles/ring.html",
      description:
        "Фильм нагнетает страх не внезапностью, а предвкушением неизбежного",
    },

    // Новые короткие статьи (short_articles)
    {
      title: "Монстр, которого нельзя убить: почему Бабадук остаётся",
      url: "/grim.adc.ac/pages/articles/short_articles/babadook.html",
      description:
        "Бабадук — не враг, а часть внутреннего состояния, с которой приходится жить",
    },
    {
      title: "Страх как инструмент разрушения социальных связей",
      url: "/grim.adc.ac/pages/articles/short_articles/birdbox.html",
      description:
        "В «Птичьем коробе» страх последовательно разрушает связи между людьми",
    },
    {
      title: "Почему зло в Дерри повторяется: цикл травмы",
      url: "/grim.adc.ac/pages/articles/short_articles/derry.html",
      description:
        "Зло возвращается не только из-за сверхъестественного существа, но и из-за устройства общества",
    },
    {
      title: "Безумие неизбежно: изоляция и разрушение личности",
      url: "/grim.adc.ac/pages/articles/short_articles/lighthouse.html",
      description:
        "Изоляция становится активной силой, медленно разрушающей личность",
    },
    {
      title: "Индивидуализм против иллюзии сообщества",
      url: "/grim.adc.ac/pages/articles/short_articles/midsommar.html",
      description:
        "Столкновение двух моделей общества: одиночество против коллектива ценой личности",
    },
    {
      title: "Кто такая Сабрина: человек, ведьма или ни то ни другое",
      url: "/grim.adc.ac/pages/articles/short_articles/sabrina.html",
      description:
        "Сабрина балансирует между двумя мирами, не принадлежа полностью ни одному",
    },
    {
      title: "Почему «Return to Silent Hill» оказался пустой оболочкой",
      url: "/grim.adc.ac/pages/articles/short_articles/silent-hill.html",
      description:
        "Точное воспроизведение визуала игры не спасло фильм от провала",
    },
    {
      title: "Город сверху и город снизу: двойная реальность",
      url: "/grim.adc.ac/pages/articles/short_articles/twoderry.html",
      description:
        "Дерри — пространство с видимой повседневностью и скрытой, наполненной страхом, стороной",
    },
    {
      title: "Как фильм обманывает зрителя через монтаж и точку зрения",
      url: "/grim.adc.ac/pages/articles/short_articles/visit.html",
      description:
        "В «Визите» страх строится на искажённом отражении реальности через монтаж и ракурс",
    },
    {
      title: "Школа как модель общества: иерархии, ярлыки и давление",
      url: "/grim.adc.ac/pages/articles/short_articles/wednesday-school.html",
      description:
        "Академия Невермор воспроизводит деление на группы, ярлыки и скрытое давление норм",
    },
    {
      title: "Осознанная инаковость как форма силы в «Уэнсдей»",
      url: "/grim.adc.ac/pages/articles/short_articles/wednesday.html",
      description:
        "Уэнсдей отказывается подчиняться чужим ожиданиям и не считает свою инаковость проблемой",
    },
  ];

  function initSearch(containerSelector, alwaysOpen = false) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const searchIcon = container.querySelector(".W_header_search_icon");
    const searchInput = container.querySelector(".A_header_search_input");
    const searchResults = container.querySelector(".W_search_results_dropdown");
    let isOpen = alwaysOpen;

    if (!searchIcon || !searchInput || !searchResults) return;

    function showResults(results) {
      searchResults.innerHTML = "";
      if (results.length === 0) {
        searchResults.innerHTML =
          '<div class="M_search_result_item"><p class="text_medium_description_text">Ничего не найдено</p></div>';
      } else {
        results.slice(0, 5).forEach((item) => {
          const result = document.createElement("a");
          result.className = "M_search_result_item";
          result.href = item.url;
          result.innerHTML = `
            <h4 class="text_medium_description_text">${item.title}</h4>
            <p class="text_small_description_text">${item.description}</p>
          `;
          searchResults.appendChild(result);
        });
      }
      searchResults.classList.add("show");
    }

    function hideResults() {
      searchResults.classList.remove("show");
    }

    function openSearch() {
      container.classList.add("open");
      searchInput.focus();
      isOpen = true;
    }

    function closeSearch() {
      container.classList.remove("open");
      searchInput.value = "";
      hideResults();
      isOpen = false;
    }

    if (!alwaysOpen) {
      searchIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!isOpen) {
          openSearch();
        } else {
          closeSearch();
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && isOpen) {
          closeSearch();
        }
      });

      document.addEventListener("click", (e) => {
        if (isOpen && !container.contains(e.target)) {
          closeSearch();
        }
      });
    }

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      if (query.length > 0) {
        const filtered = articleData.filter(
          (article) =>
            article.title.toLowerCase().includes(query) ||
            article.description.toLowerCase().includes(query),
        );
        showResults(filtered);
      } else {
        hideResults();
      }
    });

    searchResults.addEventListener("click", (e) => e.stopPropagation());
  }

  initSearch(".desktop-search", false);
  initSearch(".mobile-search", true);
});
