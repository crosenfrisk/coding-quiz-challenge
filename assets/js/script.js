//  CODING QUIZ QUESTIONS

// Start Quiz button from index.html brings to quiz.html where timer starts and questions initiate. use btnStartEl for event listener at bottom of page.
    var btnStartEl = document.querySelector('btnStart');
// Timer begins at a set time, and counts down to zero. Penalties from wrong guesses deduct an additional 10 seconds from the clock.
    var timeRemaining = 75;
    var timerEl = document.getElementById('timerdiv');    
    var timerId = setInterval(countdown, 1000);
 
    function countdown() {
        if (timeRemaining == -1) {
            clearTimeout(timerId);
            alert('Game Over!');
          } else {
            timerEl.innerHTML = timeRemaining;
            timeRemaining--;
          }
        }

// Display questions one at a time. User selects answer from options a, b, c, d. Whether answer is correct or not, questions advance. Incorrect answers receive penalty in reduction of allotted time by 10 seconds.

var questionTextEl = document.getElementById('questionText');
var questionNumber = -1;

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
        questionNumber += 1;
        var q = myQuestions[questionNumber];
        var options = Object.entries(q.option)
        
       questionTextEl.innerHTML= q.question;

        for (var i = 0; i < options.length; i++) {
            var option =document.getElementById('option' + (i+1))
            option.innerHTML= options[i][0]+ " : " + options[i][1];

        //     option.addEventListener('click', startQuiz);
        //     if (option != correctAnswer) {
        //     penalty();
        // };
            
        }

    };

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
            question: "What is the difference between && and ||? *",
            option: {
                A: "The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true.",
                B: "The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true.",
                C: "The logical operator && returns true if one expression is true while the logical operator || returns true if both expressions returntrue true.",
                D: "The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
            },
            correctAnswer: "D"
          }
      ];

      var penalty = function() {
        if (selectedOption != correctAnswer){
        timeRemaining - 10;
        }
    }

if (window.location.pathname.includes("quiz.html")) {
    countdown();
    startQuiz();
}