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

    todoElement.addEventListener("click", () => {
      todoElement.classList.toggle("completed");
    });

    todoElement.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoElement.remove();
    });

    //empty value input
    input.value = "";

    updateLS();
  }
});

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
