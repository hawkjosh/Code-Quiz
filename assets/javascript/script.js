// var questionTitle = document.getElementById('question-title');
// var choicesEl = document.getElementById('choices');
// var firstChoiceEl = document.getElementById('choice-1');
// var secondChoiceEl = document.getElementById('choice-2');
// var thirdChoiceEl = document.getElementById('choice-3');
// var fourthChoiceEl = document.getElementById('choice-4');

// for (var i = 0; i < choiceEl.length; i++) {
//   choiceEl[i].setAttribute('style', 'color: red; background: blue; border: 2px solid red');
// }

var questionsList = [
  {
    title: 'Which symbol is used to separate JavaScript statements?',
    answers: ['Semicolon (;)', 'Colon (:)', 'Comma (,)', 'Underscore (_)'],
    correctAnswer: 'Semicolon (;)'
  },
  {
    title: 'JavaScript arrays are written with __________.',
    answers: ['Curly Brackets {}', 'Square Brackets []', 'Parentheses ()', 'Double Quotes ""'],
    correctAnswer: 'Square Brackets []'
  },
  {
    title: 'Which JavaScript method is used to write on the browser console?',
    answers: ['console.write()', 'console.output()', 'console.log()', 'console.print()'],
    correctAnswer: 'console.log()'
  },
  {
    title: 'JavaScript code can be written __________.',
    answers: ['externally in a .js file', 'directly in the .html file', 'externally in a .css file', 'externally in a .js file and/or directly in the .html file'],
    correctAnswer: 'externally in a .js file and/or directly in the .html file'
  },
  {
    title: 'Which is the correct syntax to call an external JavaScript file in the HTML document?',
    answers: ['<script src="file_name.js"></script>', '<link rel="scriptsheet" href="file_name.js" />', '<script link="file_name.js"></script>', '<script href="file_name.js"></script>'],
    correctAnswer: '<script src="file_name.js"></script>'
  }
];

// Defined new variables for HTML elements
var body = document.body;
var titleEl = document.createElement('h1');
var instructionsEl = document.createElement('p');
var startBtn = document.createElement('button');
var questionTitle = document.createElement('h2');
var answerArea = document.createElement('div');
var answer1El = document.createElement('button');
var answer2El = document.createElement('button');
var answer3El = document.createElement('button');
var answer4El = document.createElement('button');
var timerArea = document.createElement('div');
var timerTitle = document.createElement('h2');
var timerCount = document.createElement('span');

// Input textContent into newly defined variables for HTML elements
titleEl.textContent = 'Coding Quiz Game';
instructionsEl.textContent = 'The game will begin when you click the start button below. You have 60 seconds to answer all of the questions. Each incorrect answer will result in 15 seconds being removed from your remaining time. Try to get through all of the questions before time expires. Good luck!';
startBtn.textContent = 'Start';
questionTitle.textContent = questionsList[0].title;
answer1El.textContent = questionsList[0].answers[0];
answer2El.textContent = questionsList[0].answers[1];
answer3El.textContent = questionsList[0].answers[2];
answer4El.textContent = questionsList[0].answers[3];
timerTitle.textContent = 'Timer';
timerCount.textContent = '';

// Placed into HTML document
body.appendChild(titleEl);
body.appendChild(instructionsEl);
body.appendChild(startBtn);
body.appendChild(questionTitle);
body.appendChild(answerArea);
answerArea.appendChild(answer1El);
answerArea.appendChild(answer2El);
answerArea.appendChild(answer3El);
answerArea.appendChild(answer4El);
body.appendChild(timerArea);
timerArea.appendChild(timerTitle);
timerArea.appendChild(timerCount);

timerTitle.setAttribute('display', 'hidden');

// ⭐NOTES⭐ The startGame function is called when the start button is clicked
function startGame() {
  var timeLeft = 60;
  var timeInterval = setInterval(function() {
    timeLeft--;
    timerCount.textContent = timeLeft + ' seconds remaining';
    if(timeLeft === 0) {
      clearInterval(timeInterval);
      timerTitle.textContent = 'TIMES UP!!';
    }
  }, 1000);
  // ⭐NOTES⭐ Prevents start button from being clicked when round is in progress
  startBtn.disabled = true;
}

startBtn.addEventListener("click", startGame);

// for(i = 0; i < questionsList.length; i++) {
//   questionTitle.textContent = questionsList[i].title;
// }

// for(i = 0; i < questionsList.length; i++) {
//   questionTitle.textContent = questionsList[i].title;
// }

// for(i = 0; i < questionsList.length; i++) {
//   choicesEl.textContent = questionsList[i].answers;
// }