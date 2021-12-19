//  CODING QUIZ QUESTIONS

// Start Quiz button from index.html brings to quiz.html where timer starts and questions initiate. use btnStartEl for event listener at bottom of page.
    var btnStartEl = document.querySelector('btnStart');
// Timer begins at a set time, and counts down to zero. Penalties from wrong guesses deduct an additional 10 seconds from the clock.
    var timeRemaining = 75;
    var timerElement = document.getElementById('timerdiv');    
    var timerId = setInterval(countdown, 1000);
 
// Display questions one at a time. User selects answer from options a, b, c, d. Whether answer is correct or not, questions advance. Incorrect answers receive penalty in reduction of allotted time by 10 seconds.


//  (*options are displayed for user to choose from
//  user selects an option
//  if correct
    //  congratulate and move on to next question
//  if incorrect, inform incorrect, 
    //  subtract time from timer as pentalty and then move on to next question
// process repeats*)
//  after all questions are answered OR timer runs out
    // "Game over!"" message displays
    // when (questionsAnswered == 
// user enters initials
    // score is saved
    // all scores are returned and displayed



   

    // var btnOption1El = document.getElementById('btn-option1');
    // var btnOption2El = document.getElementById('btn-option2');
    // var btnOption3El = document.getElementById('btn-option3');
    // var btnOption4El = document.getElementById('btn-option4');


    function startQuiz(event) {
        var q = myQuestions[index];
        myQuestions.innerHTML= q.question;

        if (option != correctAnswer) {
            penalty();
        };
        return askQuestion();
    };

    var myQuestions = [ 
        {
            questionNumber: "1",
            question: "Inside the HTML document, where do you place your JavaScript code?",
            option: {
                a: "Inside the <link> element",
                b: "Inside the <script> element",
                c: "Inside the <head> element",
                d: "In the <footer> element"
          },
          correctAnswer: "d"
        },
        {
            questionNumber: "2",
            question: "What operator is used to assign a value to a declared variable?",
            option: {
                a: "Question mark (?)",
                b:"Double-equal (==)",
                c: "Equal sign (=)",
                d: "Colon (:)"
          },
          correctAnswer: "c"
        },
        {
            questionNumber: "3",
            question: "What are the six primitive data types in JavaScript?",
            option: {
                a:  "sentence, float, data, bigInt, symbol, undefined",
                b: "string, num, falsy, bigInt, symbol, undefined",
                c:  "sentence, int, truthy, bigInt, symbol, undefined",
                d: "string, number, boolean, bigInt, symbol, undefined",
            },
            correctAnswer: "d"
        },
        {
            questionNumber: "4",
            question: "What is the difference between && and ||? *",
            option: {
                a: "The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true.",
                b: "The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true.",
                c: "The logical operator && returns true if one expression is true while the logical operator || returns true if both expressions returntrue true.",
                d: "The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
            },
            correctAnswer: "d"
          }
      ];
   
    function countdown() {
    if (timeRemaining == -1) {
        clearTimeout(timerId);
        alert('Game Over!');
      } else {
        timerElement.innerHTML = timeRemaining;
        timeRemaining--;
      }
    }

    var penalty = function() {
        if (selectedOption != correctAnswer){
        timeRemaining - 10;
        }
    }

btnStartEl.addEventListener('click', startQuiz, countdown);