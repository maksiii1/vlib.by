document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header__list");

  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
  });

  const dropdownToggles = document.querySelectorAll("a.header__dropdown");
  const dropdowns = document.querySelectorAll(".header__item.dropdown");
  const hasSubmenus = document.querySelectorAll(".has-submenu");

  function closeAllMenus() {
    menu.classList.remove("active");
    burger.classList.remove("active");
    dropdowns.forEach((dd) => dd.classList.remove("active"));
    hasSubmenus.forEach((submenu) => submenu.classList.remove("active"));
  }

  dropdownToggles.forEach((toggle) => {
    const dropdown = toggle.closest(".dropdown");

    toggle.addEventListener("click", (e) => {
      if (window.innerWidth <= 1130) {
        e.preventDefault();
        // Закрыть все dropdown кроме текущего
        dropdowns.forEach((dd) => {
          if (dd !== dropdown) dd.classList.remove("active");
        });
        // Тогглим текущий dropdown
        dropdown.classList.toggle("active");
      }
    });
  });

  hasSubmenus.forEach((submenu) => {
    const link = submenu.querySelector("a");
    if (!link) return;

    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 1130) {
        e.preventDefault();
        const parentDropdown = submenu.closest(".dropdown");
        if (parentDropdown) {
          const siblings = parentDropdown.querySelectorAll(".has-submenu");
          siblings.forEach((sibling) => {
            if (sibling !== submenu) sibling.classList.remove("active");
          });
        }
        submenu.classList.toggle("active");
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      closeAllMenus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1130) {
      closeAllMenus();
    }
  });
});
