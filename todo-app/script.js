const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  //prevents submit
  e.preventDefault();

  const todoText = input.value;

  if (todoText) {
    const todoElement = document.createElement("li");
    todoElement.innerText = todoText;

    todos.appendChild(todoElement);
  }
});
