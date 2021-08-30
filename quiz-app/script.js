//what we need - data, array of quizzes, question answers and correct answer
const quizData = [
  {
    question: "how old am I?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "Javascript",
    c: "C",
    d: "Python",
    correct: "b",
  },
  {
    question: "Who is the president of US?",
    a: "Beyonce",
    b: "Kehlani",
    c: "Biden",
    d: "Jhene",
    correct: "c",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Helicopters Terminals Motorboats Lamborghinis",
    c: "Hyper Markup Logistics",
    d: "Hyper Markup Language",
    correct: "a",
  },
  {
    question: "What year was JS launched?",
    a: "1996",
    b: "2005",
    c: "1999",
    d: "none of the above",
    correct: "d",
  },
];

const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerElements = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionElement.innerHTML = currentQuizData.question;

  a_text.innerHTML = currentQuizData["a"];
  b_text.innerHTML = currentQuizData["b"];
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      console.log("id", answerElement.id);
      answer = answerElement.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerElements.forEach((answerElement) => {
    answerElement.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> Great Job! You answered correctly ${score}/${quizData.length} questions </h2> <button onclick='location.reload()'>Try again..</button>`;
    }
  }
});
