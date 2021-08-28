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

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionElement.innerHTML = currentQuizData.question;

  a_text.innerHTML = currentQuizData["a"];
  b_text.innerHTML = currentQuizData["b"];
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("you have finished the quiz");
  }
});
