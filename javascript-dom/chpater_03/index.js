// event listener
const btn1 = document.querySelector("#btn-1");

btn1.addEventListener("click", () => {
  alert("test event listener");
});

const box1 = document.querySelector("#box-1");

box1.addEventListener("mouseover", () => {
  box1.classList.remove("has-background-danger");
  box1.classList.add("has-background-primary");
});

box1.addEventListener("mouseout", () => {
  box1.classList.remove("has-background-primary");
  box1.classList.add("has-background-danger");
});

// box 2
const p1 = document.querySelector(".p-1");
const p2 = document.querySelector(".p-2");
const btn2 = document.querySelector("#btn-2");
let isShowing = false;
btn2.addEventListener("click", () => {
  if (!isShowing) {
    p1.classList.remove("is-active");
    p1.classList.add("is-hidden");

    p2.classList.remove("is-hidden");
    p2.classList.add("is-active");
    isShowing = true;
  } else {
    p2.classList.remove("is-active");
    p2.classList.add("is-hidden");

    p1.classList.remove("is-hidden");
    p1.classList.add("is-active");
    isShowing = false;
  }
});
