const btnInput = document.querySelector("#btn-input");
const todo = document.querySelector(".todo");
const input = document.querySelector("#input");

btnInput.addEventListener("click", addTodo);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  const todoList = input.value.trim();

  if (todoList !== "") {
    const todoItem = document.createElement("div");
    todoItem.classList.add(
      "box",
      "is-shadowless",
      "mb-2",
      "is-flex",
      "is-align-items-center",
      "is-justify-content-space-between"
    );

    const todoText = document.createElement("span");
    todoText.classList.add("is-size-5");
    todoText.textContent = todoList;

    const actionsDiv = document.createElement("div");

    const doneBtn = document.createElement("button");
    doneBtn.classList.add(
      "button",
      "is-small",
      "is-primary",
      "is-outlined",
      "mr-2"
    );
    doneBtn.textContent = "done";

    doneBtn.addEventListener("click", () => {
      if (todoText.style.textDecoration === "line-through") {
        todoText.style.textDecoration = "none";
        todoText.style.opacity = "1";
      } else {
        todoText.style.textDecoration = "line-through";
        todoText.style.opacity = "0.5";
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add(
      "button",
      "is-small",
      "is-danger",
      "is-outlined",
      "mr-2"
    );
    deleteBtn.textContent = "delete";

    deleteBtn.addEventListener("click", () => {
      todoItem.remove();
    });

    actionsDiv.appendChild(doneBtn);
    actionsDiv.appendChild(deleteBtn);

    todoItem.appendChild(todoText);
    todoItem.appendChild(actionsDiv);

    todo.appendChild(todoItem);

    input.value = "";
    input.focus();
  }
}
