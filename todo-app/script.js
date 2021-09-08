const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUlElement = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

form.addEventListener("submit", (e) => {
  //prevents submit
  e.preventDefault();
});

function addTodo() {
  const todoText = input.value;

  if (todoText) {
    const todoElement = document.createElement("li");
    todoElement.innerText = todoText;

    todosUlElement.appendChild(todoElement);

    todoElement.addEventListener("click", () => {
      todoElement.classList.toggle("completed");
      updateLS();
    });

    todoElement.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoElement.remove();
      updateLS();
    });

    //empty value input
    input.value = "";

    updateLS();
  }
}

function updateLS() {
  //dom item
  const todosElement = document.querySelectorAll("li");

  //list of notes
  const todos = [];

  todosElement.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
