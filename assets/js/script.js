//  JAVASCRIPT CODING QUIZ

// Start Quiz button from index.html brings to quiz.html where timer starts and questions initiate.

// Timer begins at a set time, and counts down to zero. Penalties from wrong guesses deduct an additional 10 seconds from the clock.
//  after all questions are answered OR timer runs out
        // "Game over!"" message displays
        //  User adds initials and leaderboard is updated.

    var timeRemaining = 75;
    var timerEl = document.getElementById('timerdiv');    

    function countdown() {
        // startTimer();
        if (timeRemaining == -1) {
            clearTimeout(timerId);
            alert('Game Over!');
            window.prompt('Please enter your initials to add your score to the leaderboard!');
          } else {
            timerEl.innerHTML = timeRemaining;
            timeRemaining--;
          }
        }

// Display questions one at a time. User selects answer from options a, b, c, d. Whether answer is correct or not, questions advance. 

var questionTextEl = document.getElementById('questionText');
var questionNumberEl = document.getElementById('questionNumber');
var questionNumber = -1;

function displayQuiz(event) {
    questionNumber += 1;
    var q = myQuestions[questionNumber];
    var options = Object.entries(q.option)
    var correctAnswer = myQuestions[questionNumber].correctAnswer
        
    questionTextEl.innerHTML= q.question;

    for (var i = 0; i < options.length; i++) {
        console.log('option' + (i+1))
        var option =document.getElementById('option' + (i+1))
        option.innerHTML= options[i][0]+ " : " + options[i][1];

        option.addEventListener('click', function  (event) {
             if (event.target.textContent[0] != correctAnswer) {
                 timeRemaining -= 10
            }
            displayQuiz(); 
            }
        )
    }
};


// when (options.length-1 == i) {
//     endQuiz();
// }

// function endQuiz(event) {
//     if (timeRemaining === 0 || options.length -1 == i) {
//     window.alert("The quiz has now ended. Let's see how you did!");
//     var playerInitials = window.prompt('Please enter your initials:')
  
//     // check localStorage for high score, if it's not there, use 0
//     var highScore = localStorage.getItem("highscore");
//     if (timerEl === null) {
//       highScore = 0;
//     }
//     // if player has more money than the high score, player has new high score!
//     if (timerEl > highScore) {
//       localStorage.setItem("highscore", timerEl);
//       localStorage.setItem("name", playerInitials);
  
//       alert(playerInitials + " now has the high score of " + timerEl + "!");
//     } 
//     else {
//       alert(playerInitials + " did not beat the high score of " + highScore + ". Maybe next time!");
//     }
  
//     // ask player if they'd like to play again
//     var quizAgainConfirm = window.confirm("Would you like to try the quiz again?");
  
//     if (quizAgainConfirm) {
//       displayQuiz();
//     } 
//     else {
//       window.alert("Thank you for completing our JavaScript quiz.Come back soon!");
//     }
//   };

// Quiz Questions and Answer Options:

    var myQuestions = [ 
        {
            questionNumber: 1,
            question: "Inside the HTML document, where do you place your JavaScript code?",
            option: {
                A: "Inside the `link` element",
                B: "Inside the `script` element",
                C: "Inside the `head` element",
                D: "In the `footer` element"
          },
          correctAnswer: "D"
        },
        {
            questionNumber: 2,
            question: "What operator is used to assign a value to a declared variable?",
            option: {
                A: "Question mark (?)",
                B:"Double-equal (==)",
                C: "Equal sign (=)",
                D: "Colon (:)"
          },
          correctAnswer: "C"
        },
        {
            questionNumber: 3,
            question: "What are the six primitive data types in JavaScript?",
            option: {
                A:  "sentence, float, data, bigInt, symbol, undefined",
                B: "string, num, falsy, bigInt, symbol, undefined",
                C:  "sentence, int, truthy, bigInt, symbol, undefined",
                D: "string, number, boolean, bigInt, symbol, undefined",
            },
            correctAnswer: "D"
        },
        {
            questionNumber: 4,
            question: "What is the difference between && and ||? ",
            option: {
                A: "The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true.",
                B: "The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true.",
                C: "The logical operator && returns true if one expression is true while the logical operator || returns true if both expressions returntrue true.",
                D: "The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
            },
            correctAnswer: "D"
          }
      ];


    // function enterHighScore() {
            // user enters initials
                // score is saved
                    // all scores are returned and displayed
    // }

    if (window.location.pathname.includes("quiz.html")) {
        var timerId = setInterval(countdown, 1000);
        displayQuiz();
        // endQuiz();
    }

    // if (window.location.pathname.includes("highscores.html")) {
    //     loadHighScores();
    // }

    // btnStartEl.addEventListener('click', startQuiz, countdown);