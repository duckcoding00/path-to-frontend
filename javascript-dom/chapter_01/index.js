// get by id
// const title = document.getElementById("title-heading");
//console.log(title);

// get by class name
const listItem = document.getElementsByClassName("list-item");
//console.log(listItem);

// get by tag name
const tagItem = document.getElementsByTagName("li");
//console.log(tagItem);

// get by queryselector (first)
const container = document.querySelector("div");
//console.log(container);

// get by queryselector all
const divs = document.querySelectorAll("div");
//console.log(divs);
// array

const titles = document.querySelectorAll("#title-heading");

titles.forEach((title) => {
  title.style.color = "red";
});

const listItems = document.querySelectorAll(".list-item");
//console.log(listItems);
listItems.forEach((item) => {
  item.style.fontSize = "1rem";
});

// create element
const ul = document.querySelector("ul");
const li = document.createElement("li");

li.innerText = "New Movie";

// insert to ul
ul.append(li);

// set and remove atribute
// li.setAttribute("class", "is-size-5");
// li.removeAttribute("class");

// classes
titles.forEach((title) => {
  title.classList.remove("is-size-5");
  title.classList.add("is-size-5");
  console.log(title.classList.contains("is-size-5"));
});

li.remove();
