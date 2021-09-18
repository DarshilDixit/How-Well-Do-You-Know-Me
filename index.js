var readlineSync = require("readline-sync");
var chalk = require('chalk');
var score = 0;
var highScorers = [{
    name: "Darshil",
    score: "5",
  },
  {
    name: "Rahul",
    score: "4",
  },
  {
    name: "Sonakshi",
    score: "3",
  },
]

var userName = readlineSync.question(chalk.bgBlack("What's you name? "));
console.log(chalk.blue("Welcome " + userName + "! to --- DO YOU KNOW Darshil? ---QUIZ"));
console.log("------")


function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.bgBlack(question));
  console.log(chalk.blue("You entered " + userAnswer));

  if (userAnswer === answer) {
    console.log(chalk.green("You were right!"));
    score = score + 1;
  } else {
    console.log(chalk.red("You were worng!"));
    // score = score-1;  I Don't want to penallize user for not knowing me
  }
  console.log(chalk.magentaBright("Your score: " + score));
  console.log("------");
};


var questions = [{
    question: "How old am i? ",
    answer: "20",
  },
  {
    question: "Where do i live? ",
    answer: "kanpur",
  },
  {
    question: "What's my favorite food? ",
    answer: "raajmaa",
  },
  {
    question: "What's my favorite superhero? ",
    answer: "ironman",
  },
  {
    question: "What am i learning these days?  ",
    answer: "programming",
  },
];


for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];

  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.yellowBright("Yay! " + userName + ", Your final score: " + score));
console.log("---------------------------")

console.log(chalk.blue("Check out the high scores:- "));

for (var j = 0; j < highScorers.length; j++) {
  var currentHighscorer = highScorers[j];
  console.log(chalk.yellow(currentHighscorer.name), "-", chalk.green(currentHighscorer.score));
}

if (score >= currentHighscorer.score) {
  console.log("----------------------")
  console.log(chalk.magentaBright("Congratulations!!! " + userName + " You deserve a rank among high scores. Send me a Screenshot of your result so that i can update it here. "));
} else {
  console.log();
};