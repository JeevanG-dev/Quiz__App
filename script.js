const questions = [
  {
    question: "What is the capital city of Nepal?",
    answers: [
      { text: "Kathmandu", correct: true },
      { text: "Delhi", correct: false },
      { text: "Pokhera", correct: false },
      { text: "london", correct: false },
    ],
  },
  {
    question: "What is the fullform of SSR?",
    answers: [
      { text: "Socket side rendering", correct: false },
      { text: "Smart source rendering", correct: false },
      { text: "Server side rendering", correct: true },
      { text: "None of Above", correct: false },
    ],
  },
  {
    question: "What is the national foode of Nepal?",
    answers: [
      { text: "momo", correct: false },
      { text: "Daal Bhat", correct: true },
      { text: "Sukuti", correct: false },
      { text: "Choila", correct: false },
    ],
  },
  {
    question: "Where did sushi originate?",
    answers: [
      { text: "Kathmandu", correct: false },
      { text: "Thailand", correct: false },
      { text: "Korea", correct: false },
      { text: "Japan", correct: true },
    ],
  },
  {
    question: "What meat is used in a shepherd's pie?",
    answers: [
      { text: "Lamb", correct: true },
      { text: "Beef", correct: false },
      { text: "Chicken", correct: false },
      { text: "Goat", correct: false },
    ],
  },
  {
    question: "Which country is credited with inventing ice cream?",
    answers: [
      { text: "UK", correct: false },
      { text: "China", correct: true },
      { text: "USA", correct: false },
      { text: "Scotland", correct: false },
    ],
  },
];

const questionArea = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestions();
}

function showQuestions() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionArea.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answers) => {
    let button = document.createElement("button");

    button.innerHTML = answers.text;
    button.classList.add("btn");
    answersButtons.appendChild(button);

    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answersButtons.firstChild) {
    answersButtons.removeChild(answersButtons.firstChild);
  }
}

function selectAnswer(e) {
  let selectedBtn = e.target;

  if (selectedBtn.dataset.correct === "true") {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answersButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }

    button.disabled = true;
  });

  nextBtn.style.display = "block";
}

function showScore() {

    resetState()
  questionArea.innerHTML =
    `Your Score is ` + score + " out of " + questions.length;
    nextBtn.innerHTML = "Start new Game"
  nextBtn.style.display = "block"

}

function handleOnClick() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleOnClick();
  } else {
    startQuiz();
  }
});

startQuiz();
