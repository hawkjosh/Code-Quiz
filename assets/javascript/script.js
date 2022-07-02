// TODO → Incorporate decrement function to timeLeft when incorrect answers are selected.

// TODO → Add function to keep track of score and locally store user data to display as a list on the high scores element.

// BUG → Even when all questions are answered before time expires, results element is switching to 'did not finish' message once countdown timer reaches zero. Figure out how to clearInterval or stop timer once last question is answered.

// Array of questions content → Question, Ans1, Ans2, Ans3, Ans4
let questionsInfo = [
  [
    'Which symbol is used to separate JavaScript statements?',
    'A ▸ Colon ( : )',
    'B ▸ Comma ( , )',
    'C ▸ Semicolon ( ; )',
    'D ▸ Underscore ( _ )'
  ],
  [
    'JavaScript arrays are written with ________________.',
    'A ▸ Square Brackets [ ]',
    'B ▸ Curly Brackets { }',
    'C ▸ Parentheses ( )',
    'D ▸ Double Quotes " "'
  ],
  [
    'Which JavaScript method is used to write on the browser console?',
    'A ▸ console.write()',
    'B ▸ console.log()',
    'C ▸ console.output()',
    'D ▸ console.print()'
  ],
  [
    'JavaScript code can be written ________________.',
    'A ▸ externally in a .js file',
    'B ▸ directly in the .html file',
    'C ▸ externally in a .js file or directly in the .html file',
    'D ▸ externally in a .css file'
  ],
  [
    'Which is the correct syntax to call an external JavaScript file in HTML?',
    'A ▸ <link rel="scriptsheet" href="file_name.js" />',
    'B ▸ <script link="file_name.js"></script>',
    'C ▸ <script href="file_name.js"></script>',
    'D ▸ <script src="file_name.js"></script>'
  ]
];

// Hide/Show DOM targets
const timerElement = document.getElementById('timer-element');
const startElement = document.getElementById('start-element');
const questionElement = document.getElementById('question-element');
const resultsElement = document.getElementById('results-element');
const highscoresElement = document.getElementById('highscores-element');

// Manipulate content and button DOM targets
const timer = document.getElementById('timer');
const questionText = document.getElementById('question-text');
const answerChoices = document.querySelectorAll('.answer-btn');
const resultsMsg = document.getElementById('results-msg');
const resultsText = document.getElementById('results-text');
const highscoresList = document.getElementById('highscores-list');
const startBtn = document.getElementById('start-btn');
const answerSelect = document.getElementById('answer-choices');
const restartBtn = document.getElementById('restart-btn');
const highscoresBtn = document.getElementById('highscores-btn');
const backBtn = document.getElementById('back-btn');
const quitBtn = document.getElementById('quit-btn');

// Global scope variables
let timeLeft = 60;
let currIndex = 0;

// Event handlers
startBtn.addEventListener('click', startQuiz);
answerSelect.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', startQuiz);
highscoresBtn.addEventListener('click', highscoresView);
backBtn.addEventListener('click', backtoResults);
quitBtn.addEventListener('click', resetAll);

// Function to start the quiz
function startQuiz() {
  resetAll();
  startTimer();
  startQuestion();
}

// Function to insert first question content
function startQuestion() {
  resetAll();
  timerElement.classList.remove('hide');
  startElement.classList.add('hide');
  questionElement.classList.remove('hide');
  questionText.textContent = questionsInfo[currIndex][0];
  for (i = 0; i < questionsInfo[currIndex].length; i++) {
    answerChoices[i].textContent = questionsInfo[currIndex][i + 1];
  }
  return;
}

// Function to cycle thru index and insert next questions content, then show the results element after last question is answered.
function nextQuestion() {
  currIndex++;
  for (i = 0; i < questionsInfo.length; i++) {
    if (currIndex < questionsInfo.length) {
    questionText.textContent = questionsInfo[currIndex][0];
    for (i = 0; i < questionsInfo[currIndex].length; i++) {
      answerChoices[i].textContent = questionsInfo[currIndex][i + 1];
    }
    } else {
      questionElement.classList.add('hide');
      timerElement.classList.add('hide');
      resultsElement.classList.remove('hide');
      resultsMsg.textContent = '🙂 CONGRATS, YOU FINISHED';
      resultsText.classList.add('hide');
    }
  }
}

// Function to show the high scores element
function highscoresView() {
  resultsElement.classList.add('hide');
  highscoresElement.classList.remove('hide');
}

// Function to return to the results element from the high scores element
function backtoResults() {
  resultsElement.classList.remove('hide');
  highscoresElement.classList.add('hide');
}

// Function to reset all settings to default state
function resetAll() {
  timerElement.classList.add('hide');
  timer.textContent = 'Time Remaining: 60 seconds';
  startElement.classList.remove('hide');
  questionElement.classList.add('hide');
  resultsElement.classList.add('hide');
  highscoresElement.classList.add('hide');
  timeLeft = 60;
  currIndex = 0;
  }

// Function to start the timer element, then show results element when time expires
function startTimer() {
  let beginTime = setInterval(function() {
    timeLeft--;
    timer.textContent = 'Time Remaining: ' + timeLeft + ' seconds';
    if (timeLeft === 0) {
      clearInterval(beginTime);
      timer.textContent = 'Times up!';
      questionElement.classList.add('hide');
      resultsElement.classList.remove('hide');
      resultsMsg.textContent = '☹️ YOU DID NOT FINISH';
      resultsText.classList.add('hide');
      }
  }, 100);
}