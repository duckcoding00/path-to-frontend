const btn = document.querySelector(".button");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal-background");
const modalCls = document.querySelector(".modal-close");

btn.addEventListener("click", () => {
  modal.classList.add("is-active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("is-active");
});

modalCls.addEventListener("click", () => {
  modal.classList.remove("is-active");
});
