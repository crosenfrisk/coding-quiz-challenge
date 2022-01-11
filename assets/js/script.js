//  JAVASCRIPT CODING QUIZ

//  Player can view and clear leader-board, or return to the start screen to play again.

var timeRemaining = 75;
var timerEl = document.getElementById("timerDiv");
var btnStartEl = document.getElementById("btnStart");


var incorrectAnswerEl = document.querySelector('.incorrect');
var correctAnswerEl = document.querySelector('.correct');

//  Start Quiz button starts timer at 75 seconds and counts down to zero, meanwhile questions initiate.

function countdown() {
  //   Start timer
  var timerId = setInterval(displayTimeRemaining, 1000);
  removeWelcomePage();
  displayQuiz();
}

function displayTimeRemaining() {
  timerEl.innerHTML = timeRemaining;
  // conditions for ending quiz:

  if (timeRemaining == 0) {
     // ^ insert: || questionNumber+1 > myQuestions.length || questionNumber === 'end') -- add "end" to quiz.js
    clearInterval();

    //  After all questions are answered OR timer runs out: "Game over!"" message displays
    // Call function for endQuiz() // which will send player to high scores / initial input page.
  } else {
    timeRemaining--;
  }
  setTimeout(incorrectAnswerEl.setAttribute('style', "display: none"), 5000)
  setTimeout(correctAnswerEl.setAttribute('style', "display: none"), 5000)
}

function removeWelcomePage() {
  // Remove H1, H2, and Start Buttons; remove "view high scores."

  var oldH1 = document.querySelector("#bold-statement");
  var oldH2 = document.querySelector("#smaller-text");
  var startBtn = document.querySelector("#btnStart");
  var viewHighScores = document.querySelector("#view-high-scores");

  oldH1.remove();
  oldH2.remove();
  startBtn.remove();
  viewHighScores.remove();
}

function displayQuiz() {
  //  Location for new H1 and H2
  var headers = document.querySelector("#headers");

  // Add new H1
  var newH1 = document.createElement("h1");
  newH1.setAttribute("id", "questionNumber");

  //  Add new H2
  var newH2 = document.createElement("h2");
  newH2.setAttribute("id", "questionText");

  // Location for option buttons
  var optionContainerEl = document.querySelector("#option-container");

  // Add button "option" elements (that hold questions)
  var btnOption1 = document.createElement("button");
  var btnOption2 = document.createElement("button");
  var btnOption3 = document.createElement("button");
  var btnOption4 = document.createElement("button");

  btnOption1.className = "btn btn-primary mt-5 btn-lg";
  btnOption2.className = "btn btn-primary mt-5 btn-lg";
  btnOption3.className = "btn btn-primary mt-5 btn-lg";
  btnOption4.className = "btn btn-primary mt-5 btn-lg";

  cycleQuestionsAndOptions(
    0,
    newH1,
    newH2,
    optionContainerEl,
    btnOption1,
    btnOption2,
    btnOption3,
    btnOption4
  );
  
}

function evaluateAnswer(event, correctAnswer, pramQuestionNumber){
  
  if (event.target.textContent[pramQuestionNumber] != correctAnswer) {
    //  Penalties from wrong answers deduct an additional 10 seconds from the clock.
    timeRemaining -= 10;
    // display incorrect
    incorrectAnswerEl.setAttribute("style", "");
    } else {
      // display correct
    correctAnswerEl.setAttribute("style", "");
    }
    // call to advance?
    // cycleQuestionsAndOptions();
}

function cycleQuestionsAndOptions(
    // Display questions one at a time. User selects answer from options a, b, c, d. Whether answer is correct or not, questions advance.
    // Where/do I add a for() loop here to cycle through questions?
    // for (var i =0; i < myQuestions.length; I++){
    //  ...
    // }
  pramQuestionNumber,
  newH1,
  newH2,
  optionContainerEl,
  btnOption1,
  btnOption2,
  btnOption3,
  btnOption4
) {
  newH1.textContent =
    "Question # " + myQuestions[pramQuestionNumber].questionNumber;
  headers.appendChild(newH1);

  newH2.textContent = myQuestions[pramQuestionNumber].question;
  headers.appendChild(newH2);

  btnOption1.textContent = myQuestions[pramQuestionNumber].option.A;
  btnOption2.textContent = myQuestions[pramQuestionNumber].option.B;
  btnOption3.textContent = myQuestions[pramQuestionNumber].option.C;
  btnOption4.textContent = myQuestions[pramQuestionNumber].option.D;

  btnOption1.setAttribute("id", "option" + 1);
  btnOption2.setAttribute("id", "option" + 2);
  btnOption3.setAttribute("id", "option" + 3);
  btnOption4.setAttribute("id", "option" + 4);

  optionContainerEl.appendChild(btnOption1);
  optionContainerEl.appendChild(btnOption2);
  optionContainerEl.appendChild(btnOption3);
  optionContainerEl.appendChild(btnOption4);

  var correctAnswer = myQuestions[pramQuestionNumber].correctAnswer;
  // console.log(correctAnswer, "hello?");

  btnOption2.addEventListener("click", (event) => {
    evaluateAnswer(event, correctAnswer, pramQuestionNumber);
  });
  btnOption3.addEventListener("click", (event) => {
    evaluateAnswer(event, correctAnswer, pramQuestionNumber);
  });
  btnOption1.addEventListener("click", (event) => {
    evaluateAnswer(event, correctAnswer, pramQuestionNumber);
  });
  btnOption4.addEventListener("click", (event) => {
    evaluateAnswer(event, correctAnswer, pramQuestionNumber);
  });
}


  // var questionTextEl = document.getElementById("#questionText");
  // var questionNumberEl = document.getElementById("#questionNumber");
  // var questionNumber = -1;
  // console.log(pramQuestionNumber);
  // questionNumber += 1;
  //   var q = myQuestions[questionNumber];
  //   var options = Object.entries(q.option);
  //   var correctAnswer = myQuestions[questionNumber].correctAnswer;
  //   questionTextEl.innerHTML = q.question;
  //   for (var i = 0; i < options.length; i++) {
  //     var option = document.getElementById("option" + (i + 1));
  // option.innerHTML = options[i][0] + " : " + options[i][1];
  //     option.addEventListener("click", function (event) {
  //       if (event.target.textContent[0] != correctAnswer) {
  //         timeRemaining -= 10;
  //       }
  //       cycleQuestionsAndOptions();
  //     });

// Display "correct"  or "incorrect" after page advances to next question; deduct time from timer if incorrect.

//     var displayCorrect = document.createElement("p");
//     displayCorrect.textContent = "Correct!";
//     displayCorrect.className= "correct-or-incorrect";

//     optionContainerEl.addEventListener("click", displayCorrect);

//     var displayIncorrect = document.createElement("p");
//     displayIncorrect.textContent = "Incorrect!";
//     displayIncorrect.className="correct-or-incorrect";
//     optionContainerEl.appendChild(displayIncorrect);
// }

// if (options.length-1 == i) {
//     endQuiz();
// }

// function endQuiz(event){
  //  Player adds initials and leader-board is updated.
//     var endQuizContainerEl = document.getElementById('h1');
//     var endQuizMessageEl = document.getElementById('h2');
//     var playerInitialsEl = document.createElement('input');
//     var submitButtonEl = document.getElementById('btnStart');

//     if (timeRemaining === 0 || options.length-1 == i){
//         endQuizContainerEl.textContent = "The Quiz is Over!"
//         endQuizMessageEl.textContent = "Please enter your initials to save your score:";
//         document.body.main.append(playerInitialsEl); //?
//         submitButtonEl.textContent = "Submit";
//     }

//  Check localStorage for high score, if it's not there, use 0
//  var highScore = localStorage.getItem("highscore");
//  var alertNewHighScore = playerInitials + " now has the high score of " + timerEl + "!");
//  if (timerEl === null) {
//  highScore = 0;
//  }

// If player has more time than the high score, player has new high score!
//  if (timerEl > highScore) {
//  localStorage.setItem("highscore", timerEl);
//  localStorage.setItem("name", playerInitials);
//  }
//  else {
// var alert = playerInitials + " did not beat the high score of " + highScore + ". Maybe next time!";
//  }

//     Ask player if they'd like to play again
//     var quizAgainConfirm = create div with question "Would you like to try the quiz again?"

//     if (quizAgainConfirm) {
//       displayQuiz();
//     }
//     else {
//       create div that says "Thank you for completing our JavaScript quiz.Come back soon!")
//     }
//   };

// }

// function enterHighScore() {
  //  Player adds initials and leader-board is updated.
// user enters initials
// var userFormEl = document.querySelector("#user-form");
// var nameInputEl = document.querySelector("#user-input");

//  Score is equivalent to time remaining. If timer reaches zero, score is zero; suggest player try again to improve their score.
// score is saved
// all scores are returned and displayed
// }

btnStartEl.addEventListener("click", countdown);
// create event listener for viewhighscores on click.
