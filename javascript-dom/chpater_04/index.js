document.querySelector("#sports").addEventListener("click", (e) => {
  const target = e.target;

  if (target.matches("li")) {
    console.log(target.getAttribute("id") + " is clicked");

    if (target.classList.contains("has-background-danger")) {
      target.classList.remove("has-background-danger");
    } else {
      target.classList.add("has-background-danger");
    }
  }
});

const sport = document.querySelector("#sports");
const li = document.createElement("li");

li.innerHTML = "Badminton";
li.setAttribute("id", "badminton");
sport.append(li);
