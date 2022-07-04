// NOTES → Array of questions content information
let questionsInfo = [
  {
    question: 'Which symbol is used to separate JavaScript statements?',
    choiceA: 'A ▸ Colon ( : )',
    choiceB: 'B ▸ Comma ( , )',
    choiceC: 'C ▸ Semicolon ( ; )',
    choiceD: 'D ▸ Underscore ( _ )',
    correct: 'C'
  },
  {
    question: 'JavaScript arrays are written with ________________.',
    choiceA: 'A ▸ Square Brackets [ ]',
    choiceB: 'B ▸ Curly Brackets { }',
    choiceC: 'C ▸ Parentheses ( )',
    choiceD: 'D ▸ Double Quotes " "',
    correct: 'A'
  },
  {
    question: 'Which JavaScript method is used to write on the browser console?',
    choiceA: 'A ▸ console.write()',
    choiceB: 'B ▸ console.log()',
    choiceC: 'C ▸ console.output()',
    choiceD: 'D ▸ console.print()',
    correct: 'B'
  },
  {
    question: 'JavaScript code can be written ________________.',
    choiceA: 'A ▸ externally in a .js file',
    choiceB: 'B ▸ directly in the .html file',
    choiceC: 'C ▸ externally in a .js file or directly in the .html file',
    choiceD: 'D ▸ externally in a .css file',
    correct: 'C'
  },
  {
    question: 'Which is the correct syntax to call an external JavaScript file in HTML?',
    choiceA: 'A ▸ &lt;link rel="scriptsheet" href="file_name.js" /&gt;',
    choiceB: 'B ▸ &lt;script link="file_name.js"&gt&lt;/script&gt',
    choiceC: 'C ▸ &lt;script href="file_name.js"&gt&lt;/script&gt',
    choiceD: 'D ▸ &lt;script src="file_name.js"&gt&lt;/script&gt',
    correct: 'D'
  }
];

// NOTES → DOM targets → display areas
const timerDisplay = document.getElementById('timer-display');
const initialDisplay = document.getElementById('initial-display');
const questionDisplay = document.getElementById('question-display');
const answerClick = document.getElementById('answers-display');
const resultsDisplay = document.getElementById('results-display');
const highscoresDisplay = document.getElementById('highscores-display');

// NOTES → DOM targets → buttons and content
const timer = document.getElementById('timer');

// const initialTitle = document.getElementById('initial-title');
// const initialText = document.getElementById('initial-text');
const startBtn = document.getElementById('start-btn');

const question = document.getElementById('question');
const choicesBtn = document.querySelectorAll('.choices-btn');
const choiceA = document.getElementById('choice-a');
const choiceB = document.getElementById('choice-b');
const choiceC = document.getElementById('choice-c');
const choiceD = document.getElementById('choice-d');

const resultsTitle = document.getElementById('results-title');
const resultsText = document.getElementById('results-text');
const restartBtn = document.getElementById('restart-btn');
const highscoresBtn = document.getElementById('highscores-btn');
const quitBtn = document.getElementById('quit-btn');

// const highscoresTitle = document.getElementById('highscores-title');
const highscoresText = document.getElementById('highscores-text');
const backBtn = document.getElementById('back-btn');

// NOTES → Global scope variables
let timeLeft = 60;
let currIndex = 0;
let lastIndex = questionsInfo.length -1;
let beginTime;

// NOTES → Event handlers
startBtn.addEventListener('click', startQuiz);
answerClick.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', startQuiz);
highscoresBtn.addEventListener('click', highscoresView);
backBtn.addEventListener('click', backToResults);
quitBtn.addEventListener('click', resetAll);

// NOTES → Function to start the quiz
function startQuiz() {
  startQuestion();
  startCount();
  // startQuestion();
}

// NOTES → Function to allow global interaction with setInterval
function startCount() {
  resetAll();
  beginTime = setInterval(startTimer, 1000);
  initialDisplay.classList.add('hide');
  timerDisplay.classList.remove('hide');
  timer.innerHTML = 'Time Remaining: 60 seconds';
  questionDisplay.classList.remove('hide');
}

// NOTES → Function to start the timer and show results display when time expires
function startTimer() {
  timeLeft--;
  timer.innerHTML = 'Time Remaining: ' + timeLeft + ' seconds';
}

// NOTES → Function to set questions content for the starting index
function startQuestion() {
  let q = questionsInfo[0];
  question.innerHTML = q.question;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

// TODO → Score is not showing up in resultsText after restart from did not finish...
// NOTES → Function to set questions content for the next index
function nextQuestion() {
  if (currIndex < lastIndex && timeLeft > 12) {
    currIndex++;
    let q = questionsInfo[currIndex];
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
  } else if (currIndex < lastIndex && timeLeft <= 12) {
      clearInterval(beginTime);
      timer.innerHTML = 'TIMES UP!';
      questionDisplay.classList.add('hide');
      resultsDisplay.classList.remove('hide');
      resultsTitle.innerHTML = 'SORRY, YOU DID NOT FINISH ☹️';
      resultsText.classList.add('hide');
      highscoresBtn.classList.add('hide');
    } else {
        clearInterval(beginTime);
        questionDisplay.classList.add('hide');
        timerDisplay.classList.add('hide');
        resultsDisplay.classList.remove('hide');
        resultsTitle.innerHTML = 'CONGRATS, YOU FINISHED 🙂';
        resultsText.textContent = 'Your score is ' + timeLeft + '!';
      }
}

// TODO → Figure out how to get the timer background color to change back to normal after momentary change from choice
// NOTES → Function to check correct answer, decrements timeLeft 10 seconds if wrong, changes timer background based on choice
function checkAnswer(ans) {
  if (questionsInfo[currIndex].correct !== ans) {
    timeLeft-=12;
    timer.setAttribute('style', 'color: white; background: red; transition: 1s');
  } else {
      timer.setAttribute('style', 'color: white; background: green; border-color: green; transition: 1s');
  }
}

// TODO → Integrate high scores prompt into results screen if score is registered.
// function highscoresPrompt() {
//   let userInitials = prompt('Enter your initials for the high scores list!');
//   if (userInitials === '') {
//     prompt('No need to be modest, you deserve to be on the high scores list! Please enter your initials.');
//   } else {
//       return;
//   }
// }

// NOTES → Function to show high scores display
function highscoresView() {
  resultsDisplay.classList.add('hide');
  highscoresDisplay.classList.remove('hide');
}

// NOTES → Function to return to results display from high scores display
function backToResults() {
  resultsDisplay.classList.remove('hide');
  highscoresDisplay.classList.add('hide');
}

// NOTES → Function to reset settings back to the default state
function resetAll() {
  timerDisplay.classList.add('hide');
  timer.innerHTML = 'Time Remaining: 60 seconds';
  initialDisplay.classList.remove('hide');
  questionDisplay.classList.add('hide');
  resultsDisplay.classList.add('hide');
  highscoresDisplay.classList.add('hide');
  timeLeft = 60;
  currIndex = 0;
}