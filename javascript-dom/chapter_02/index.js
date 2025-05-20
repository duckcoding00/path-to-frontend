// parent
let ul = document.querySelector("ul");
console.log(ul.parentNode);
console.log(ul.parentElement);

// child
console.log(ul.childNodes);
console.log(ul.childElementCount);
console.log(ul.firstChild);
console.log(ul.lastChild);

// styling to child
ul.childNodes[1].style.backgroundColor = "red";

console.log(ul.firstElementChild);
ul.lastElementChild.classList.add("is-size-3");

// sibling
console.log("sibling");
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
