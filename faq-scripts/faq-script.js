const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__list");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});
