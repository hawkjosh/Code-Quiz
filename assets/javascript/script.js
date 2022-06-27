var questionArea = document.getElementById('question-title');
var choicesArea = document.getElementById('choices');

var questions = [
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

for(i = 0; i < questions.length; i++) {
  questionArea.textContent = questions[i].title;
}

for(i = 0; i < questions.length; i++) {
  choicesArea.textContent = questions[i].answers;
}