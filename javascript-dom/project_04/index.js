const btnStr = document.querySelector("#btnStr");
const btnStp = document.querySelector("#btnStp");

let second = 0;
let minute = 0;
let hour = 0;

let leadingSecond = 0;
let leadingMinute = 0;
let leadingHour = 0;
function stopWatch() {
  second++;

  if (second / 60 === 1) {
    second = 0;
    minute++;

    if (minute / 60 === 1) {
      minute = 0;
      hour++;
    }
  }

  if (second < 10) {
    leadingSecond = "0" + second.toString();
  } else {
    leadingSecond = second;
  }
  if (minute < 10) {
    leadingMinute = "0" + minute.toString();
  } else {
    leadingMinute = minute;
  }
  if (hour < 10) {
    leadingHour = "0" + hour.toString();
  } else {
    leadingHour = hour;
  }

  document.getElementById("time").innerHTML =
    leadingHour + ":" + leadingMinute + ":" + leadingSecond;
}

let timeInterval = null;
let isStoped = false;

btnStr.addEventListener("click", () => {
  if (!isStoped) {
    timeInterval = window.setInterval(stopWatch, 1000);
    document.getElementById("btnStr").classList.remove("is-danger");
    document.getElementById("btnStr").classList.add("is-warning");
    document.getElementById("btnStr").innerHTML = "pause";

    isStoped = true;
  } else {
    window.clearInterval(timeInterval);
    document.getElementById("btnStr").classList.remove("is-warning");
    document.getElementById("btnStr").classList.add("is-danger");
    document.getElementById("btnStr").innerHTML = "play";

    isStoped = false;
  }
});

btnStp.addEventListener("click", () => {
  window.clearInterval(timeInterval);
  second = 0;
  minute = 0;
  hour = 0;

  if (btnStr.classList.contains("is-warning")) {
    btnStr.classList.remove("is-warning");
    btnStr.classList.add("is-danger");
    btnStr.innerHTML = "play";
  }

  document.getElementById("time").innerHTML = "00:00:00";
});
