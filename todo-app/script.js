const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUlElement = document.getElementById("todos");

//gathers the previous todo objects
const todos = JSON.parse(localStorage.getItem("todos"));
// console.log("todos", todos);

//adding a new todo to the local storage
if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  //prevents submit
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text; //sets the text content of the selected elements.
  }

  if (todoText) {
    const todoElement = document.createElement("li");

    if (todo && todo.completed) {
      todoElement.classList.add("completed");
    }

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
