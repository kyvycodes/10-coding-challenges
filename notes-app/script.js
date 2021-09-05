const editButton = document.querySelector(".edit");
const deleteButton = document.querySelector(".delete");
const notesDiv = document.querySelector(".notes");

const main = notesDiv.querySelector(".main");
const textArea = notesDiv.querySelector("textarea");

editButton.addEventListener("click", () => {
  main.classList.toggle("hidden");
  textArea.classList.toggle("hidden");
});

textArea.addEventListener("input", (e) => {
  const { value } = e.target;

  main.innerHtml = marked(value);
});
