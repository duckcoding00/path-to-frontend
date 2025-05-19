const buttonModal = document.querySelector("#openButton");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal-background");

buttonModal.addEventListener("click", () => {
  modal.classList.add("is-active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("is-active");
});
