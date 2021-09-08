const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  //prevents submit
  e.preventDefault();

  const todo = input.value;
  const todos = [];

  if (todo) {
    todos.push(todo);
  }
});
