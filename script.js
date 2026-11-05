// 1. Banque de 100 questions (Exemple structuré avec un grand ensemble de questions)
const questions = [
  // --- JavaScript & Web Fundamentals ---
  {
    question: "Which language runs in a web browser?",
    answers: [
      { text: "Java", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true }
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Central Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cascading Simple Sheets", correct: false },
      { text: "Cars SUVs Sailboats", correct: false }
    ]
  },
  {
    question: "What symbol is used for single-line comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "<!-- -->", correct: false },
      { text: "/* */", correct: false },
      { text: "#", correct: false }
    ]
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false },
      { text: "<url>", correct: false }
    ]
  },
  {
    question: "Inside which HTML element do we put the JavaScript code?",
    answers: [
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<codegrit>", correct: false }
    ]
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "msg('Hello World');", correct: false },
      { text: "alertBox('Hello World');", correct: false },
      { text: "alert('Hello World');", correct: true },
      { text: "msgBox('Hello World');", correct: false }
    ]
  },
  {
    question: "Which CSS property changes the text color?",
    answers: [
      { text: "color", correct: true },
      { text: "text-color", correct: false },
      { text: "font-color", correct: false },
      { text: "background-color", correct: false }
    ]
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Float", correct: true },
      { text: "Undefined", correct: false }
    ]
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function myFunction()", correct: true },
      { text: "create function myFunction()", correct: false },
      { text: "def myFunction()", correct: false },
      { text: "func myFunction()", correct: false }
    ]
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      { text: "-", correct: false },
      { text: "*", correct: false },
      { text: "=", correct: true },
      { text: "x", correct: false }
    ]
  },

  // --- Python & Data Science ---
  {
    question: "Which language is primarily used for data analysis and machine learning?",
    answers: [
      { text: "PHP", correct: false },
      { text: "Python", correct: true },
      { text: "HTML", correct: false },
      { text: "CSS", correct: false }
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Text Machine Language", correct: false },
      { text: "Hyper Transfer Main Language", correct: false },
      { text: "Home Tool Markup Language", correct: false }
    ]
  },
  {
    question: "Which SQL clause is used to filter records?",
    answers: [
      { text: "ORDER BY", correct: false },
      { text: "WHERE", correct: true },
      { text: "GROUP BY", correct: false },
      { text: "SELECT", correct: false }
    ]
  },
  {
    question: "Which keyword is used to define a constant variable in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "static", correct: false }
    ]
  },
  {
    question: "In Python, which function is used to output text to the console?",
    answers: [
      { text: "console.log()", correct: false },
      { text: "echo()", correct: false },
      { text: "print()", correct: true },
      { text: "System.out.println()", correct: false }
    ]
  },
  {
    question: "Which data structure operates on a First-In, First-Out (FIFO) basis?",
    answers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: true },
      { text: "Tree", correct: false },
      { text: "Graph", correct: false }
    ]
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    answers: [
      { text: "==", correct: false },
      { text: "===", correct: true },
      { text: "=", correct: false },
      { text: "!=", correct: false }
    ]
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image?",
    answers: [
      { text: "title", correct: false },
      { text: "src", correct: false },
      { text: "alt", correct: true },
      { text: "href", correct: false }
    ]
  },
  {
    question: "In CSS, how do you select an element with id 'header'?",
    answers: [
      { text: ".header", correct: false },
      { text: "#header", correct: true },
      { text: "*header", correct: false },
      { text: "header", correct: false }
    ]
  },
  {
    question: "Which programming language was developed by James Gosling at Sun Microsystems?",
    answers: [
      { text: "C++", correct: false },
      { text: "Java", correct: true },
      { text: "C#", correct: false },
      { text: "Ruby", correct: false }
    ]
  },

  // --- Advanced Web & CS Concepts ---
  {
    question: "What does DOM stand for in web development?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Mode", correct: false },
      { text: "Digital Ordinance Model", correct: false },
      { text: "Desktop Oriented Method", correct: false }
    ]
  },
  {
    question: "Which Git command records changes in the repository?",
    answers: [
      { text: "git push", correct: false },
      { text: "git commit", correct: true },
      { text: "git add", correct: false },
      { text: "git pull", correct: false }
    ]
  },
  {
    question: "In Python, which keyword is used to declare a function?",
    answers: [
      { text: "function", correct: false },
      { text: "def", correct: true },
      { text: "func", correct: false },
      { text: "create", correct: false }
    ]
  },
  {
    question: "Which array method removes the last element in JavaScript?",
    answers: [
      { text: "shift()", correct: false },
      { text: "pop()", correct: true },
      { text: "push()", correct: false },
      { text: "unshift()", correct: false }
    ]
  },
  {
    question: "Which CSS flexbox property aligns items horizontally in a row by default?",
    answers: [
      { text: "justify-content", correct: true },
      { text: "align-items", correct: false },
      { text: "flex-direction", correct: false },
      { text: "align-content", correct: false }
    ]
  },
  {
    question: "Which character represents the root directory in Linux systems?",
    answers: [
      { text: "/", correct: true },
      { text: "~", correct: false },
      { text: "\\", correct: false },
      { text: ".", correct: false }
    ]
  },
  {
    question: "Which HTTP method is typically used to request data from a server?",
    answers: [
      { text: "POST", correct: false },
      { text: "GET", correct: true },
      { text: "PUT", correct: false },
      { text: "DELETE", correct: false }
    ]
  },
  {
    question: "What format is commonly used to exchange data between client and server?",
    answers: [
      { text: "JSON", correct: true },
      { text: "PNG", correct: false },
      { text: "EXE", correct: false },
      { text: "MP3", correct: false }
    ]
  },
  {
    question: "Which data structure works on a Last-In, First-Out (LIFO) basis?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Array", correct: false },
      { text: "Linked List", correct: false }
    ]
  },
  {
    question: "Which Python data type stores an immutable sequence of elements?",
    answers: [
      { text: "List", correct: false },
      { text: "Tuple", correct: true },
      { text: "Dictionary", correct: false },
      { text: "Set", correct: false }
    ]
  }
  // Vous pouvez continuer d'ajouter des blocs similaires pour atteindre ou dépasser 100 questions.
];

// 2. DOM Elements
const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");

// 3. State Variables
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let isQuizFinished = false;

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  homeScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  
  // Tire 10 questions au hasard parmi tout le tableau (que ce soit 30 ou 100 questions)
  selectedQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
  
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  isQuizFinished = false;
  
  nextButton.innerText = "Next Question";
  scoreText.classList.add("hidden");
  scoreText.innerHTML = "";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = selectedQuestions[currentQuestionIndex];
  questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  const shuffledAnswers = [...currentQuestion.answers].sort(() => Math.random() - 0.5);

  shuffledAnswers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hidden");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  
  const correctObj = currentQuestion.answers.find(a => a.correct === true);
  const correctText = correctObj ? correctObj.text : "N/A";

  userAnswers.push({
    question: currentQuestion.question,
    selected: selectedBtn.textContent,
    correct: correctText,
    isCorrect: isCorrect
  });

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtonsElement.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  if (isQuizFinished) {
    startQuiz();
  } else {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
});

function showScore() {
  resetState();
  isQuizFinished = true;
  
  questionElement.textContent = "Quiz Completed!";
  
  let scoreHTML = `
    <div class="score-circle-container">
      <div class="score-circle">${score} / ${selectedQuestions.length}</div>
    </div>
    <div class="review-box">
  `;
  
  userAnswers.forEach((item, index) => {
    const safeQuestion = escapeHtml(item.question);
    const safeSelected = escapeHtml(item.selected);
    const safeCorrect = escapeHtml(item.correct);

    if (item.isCorrect) {
      scoreHTML += `<p style='color: #4CAF50; margin-bottom: 10px;'>✅ <strong>Q${index + 1}: ${safeQuestion}</strong><br>Your answer: ${safeSelected}</p>`;
    } else {
      scoreHTML += `<p style='color: #e57373; margin-bottom: 10px;'>❌ <strong>Q${index + 1}: ${safeQuestion}</strong><br>Your answer: ${safeSelected} <br><span style='color: #81c784;'>Correct answer: <strong>${safeCorrect}</strong></span></p>`;
    }
  });
  
  scoreHTML += "</div>";
  
  scoreText.innerHTML = scoreHTML;
  scoreText.classList.remove("hidden");
  
  nextButton.innerText = "Restart Quiz";
  nextButton.classList.remove("hidden");
}