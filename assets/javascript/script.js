// Assigned variables to target specific elements from the html document
let timerContainer = document.getElementById('timer-container');
let timerDisplay = document.getElementById('timer-display');
let introContainer = document.getElementById('intro-container');
let questionsContainer = document.getElementById('questions-container');
let startBtn = document.getElementById('start-btn');
let choicesBtn = document.querySelectorAll('.choices-btn');
let resultsContainer = document.getElementById('results-container');
let resultsMessage = document.getElementById('results-msg');
let resultsText = document.getElementById('results-text');
let restartBtn = document.getElementById('restart-btn');
let highScoreBtn = document.getElementById('highscore-btn');
let highScoreContainer = document.getElementById('highscore-container');
let quitBtn = document.getElementById('quit-btn');

// Added click events for buttons
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
// choicesBtn.addEventListener('click', nextQuestion);
highScoreBtn.addEventListener('click', highScore);
quitBtn.addEventListener('click', quitGame);

function startTimer() {
  timeLeft = 60;
  let timeInterval = setInterval(function() {
    timeLeft--;
    timerDisplay.textContent = 'Time Remaining: ' + timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerDisplay.textContent = 'Times up!';
      questionsContainer.classList.add('hide');
      resultsContainer.classList.remove('hide');
      resultsText.classList.add('hide');
      resultsMessage.textContent = 'YOU DID NOT FINISH ☹️';
    }
  }, 10);
}

function startGame() {
  startTimer();
  timerContainer.classList.remove('hide');
  introContainer.classList.add('hide');
  questionsContainer.classList.remove('hide');
  resultsContainer.classList.add('hide');
}

// function nextQuestion() {

// }

function highScore() {
  timerContainer.classList.add('hide');
  resultsContainer.classList.add('hide');
  highScoreContainer.classList.remove('hide');
}

function quitGame() {
  // BUG → This works on the Results screen, but is not working on High Scores screen.
  window.location.reload();
}

let questionsList = [
  {
    num: 1,
    question: 'Which symbol is used to separate JavaScript statements?',
    answer: 'Semicolon (;)',
    choices: [
      'Semicolon (;)',
      'Colon (:)',
      'Comma (,)',
      'Underscore (_)'
    ]
  },
  {
    num: 2,
    question: 'JavaScript arrays are written with ______.',
    answer: 'Square Brackets []',
    choices: [
      'Curly Brackets {}',
      'Square Brackets []',
      'Parentheses ()',
      'Double Quotes ""'
    ]
  },
  {
    num: 3,
    question: 'Which JavaScript method is used to write on the browser console?',
    answer: 'console.log()',
    choices: [
      'console.write()',
      'console.output()',
      'console.log()',
      'console.print()'
  ]
  },
  {
    num: 4,
    question: 'JavaScript code can be written ______.',
    answer: 'externally in a .js file or directly in the .html file',
    choices: [
      'externally in a .js file',
      'directly in the .html file',
      'externally in a .css file',
      'externally in a .js file or directly in the .html file'
    ]
  },
  {
    num: 5,
    question: 'Which is the correct syntax to call an external JavaScript file in the HTML document?',
    answer: '<script src="file_name.js"></script>',
    choices: [
      '<script src="file_name.js"></script>',
      '<link rel="scriptsheet" href="file_name.js" />',
      '<script link="file_name.js"></script>',
      '<script href="file_name.js"></script>'
    ]
  }
]