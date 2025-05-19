const burgerIcon = document.querySelector("#nav-burger");
const menu = document.querySelector(`#nav-menu`);

burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});
