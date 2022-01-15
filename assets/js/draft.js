// New pseudocode for resubmission of project

var timeRemaining = 75;
var nextQuestion = 0;
var btnStartEl = document.getElementById("btnStart");
var parentEl = document.getElementById("parent-row");

// Quiz Questions and Answer Options:

var myQuestions = [
    {
      questionNumber: 1,
      question:
        "Inside the HTML document, where do you place your JavaScript code?",
      option: {
        A: "A : Inside the `link` element",
        B: "B : Inside the `script` element",
        C: "C : Inside the `head` element",
        D: "D : In the `footer` element",
      },
      correctAnswer: "D",
    },
    {
      questionNumber: 2,
      question: "What operator is used to assign a value to a declared variable?",
      option: {
        A: "A : Question mark (?)",
        B: "B : Double-equal (==)",
        C: "C : Equal sign (=)",
        D: "D : Colon (:)",
      },
      correctAnswer: "C",
    },
    {
      questionNumber: 3,
      question: "What are the six primitive data types in JavaScript?",
      option: {
        A: "A : sentence, float, data, bigInt, symbol, undefined",
        B: "B : string, num, falsy, bigInt, symbol, undefined",
        C: "C : sentence, int, truthy, bigInt, symbol, undefined",
        D: "D : string, number, boolean, bigInt, symbol, undefined",
      },
      correctAnswer: "D",
    },
    {
      questionNumber: 4,
      question: "What is the difference between && and ||? ",
      option: {
        A: "A : The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true.",
        B: "B : The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true.",
        C: "C : The logical operator && returns true if one expression is true while the logical operator || returns true if both expressions return true true.",
        D: "D : The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
      },
      correctAnswer: "D",
    },
  ];

var currentQuestion = myQuestions[nextQuestion];

// 1. Start quiz(){

//  Unload content from index.html "home" page
function unloadHome(){
    var homeEl = document.getElementById("home-container");
    console.log(homeEl);
    homeEl.remove();
}

function displayTimer() {
    var timerEl = document.getElementById("timerDiv");
    timerEl.innerHTML = timeRemaining;
  }

function updateTimer(){
    if (timeRemaining == 0) {
       clearInterval();
   
       //  After all questions are answered OR timer runs out: "Game over!"" message displays
       // Call function for endQuiz() // which will send player to high scores / initial input page.
     } else {
       timeRemaining--;
       displayTimer();
     }
}

//      b.  Call loadQuestion(nextQuestion)
//      c.  Timer starts --
function startQuiz(){
    unloadHome();
    loadQuestion(nextQuestion);
    var timer = setInterval(updateTimer, 1000);
}

function loadQuestion(nextQuestion){
    console.log("entering loadquestion", nextQuestion);
    if (nextQuestion > 0) {
        console.log("inside if statement");
    unloadQuestion();
    }

    createQuestion(nextQuestion);
    console.log("next qu =", nextQuestion);
}

function createQuestion(nextQuestion){
    console.log("inside createQuestion");
    console.log(currentQuestion);

     // Add new H1
  var newH1 = document.createElement("h1");
  newH1.setAttribute("id", "questionNumber");

  //  Add new H2
  var newH2 = document.createElement("h2");
  newH2.setAttribute("id", "questionText");

  // Add button "option" elements (that hold questions)
  var btnOption1 = document.createElement("button");
  var btnOption2 = document.createElement("button");
  var btnOption3 = document.createElement("button");
  var btnOption4 = document.createElement("button");

  btnOption1.className = "btn btn-primary mt-5 btn-lg";
  btnOption2.className = "btn btn-primary mt-5 btn-lg";
  btnOption3.className = "btn btn-primary mt-5 btn-lg";
  btnOption4.className = "btn btn-primary mt-5 btn-lg";

// content for newH1
  newH1.textContent =
    "Question # " + myQuestions[nextQuestion].questionNumber;
  parentEl.appendChild(newH1);

  newH2.textContent = myQuestions[nextQuestion].question;
  parentEl.appendChild(newH2);

  btnOption1.textContent = myQuestions[nextQuestion].option.A;
  btnOption2.textContent = myQuestions[nextQuestion].option.B;
  btnOption3.textContent = myQuestions[nextQuestion].option.C;
  btnOption4.textContent = myQuestions[nextQuestion].option.D;

  btnOption1.setAttribute("id", "A");
  btnOption2.setAttribute("id", "B");
  btnOption3.setAttribute("id", "C");
  btnOption4.setAttribute("id", "D");

  parentEl.appendChild(btnOption1);
  parentEl.appendChild(btnOption2);
  parentEl.appendChild(btnOption3);
  parentEl.appendChild(btnOption4);

  btnOption2.addEventListener("click", (event) => {
    evaluateAnswer(event);
  });
  btnOption3.addEventListener("click", (event) => {
    evaluateAnswer(event);
  });
  btnOption1.addEventListener("click", (event) => {
    evaluateAnswer(event);
  });
  btnOption4.addEventListener("click", (event) => {
    evaluateAnswer(event);
  });
  
}

function unloadQuestion(){
    // removes question contents from quiz page
    parentEl.replaceChildren();
}

function evaluateAnswer(event){
    
    if (currentQuestion.correctAnswer === event.target.id){
        displayEval("Correct");
    }

    else {
        displayEval("Incorrect");
        // adjust timer for incorrect -10
        timeRemaining -=10;
    }

    nextQuestion += 1;

    if (timeRemaining > 0 && nextQuestion < myQuestions.length) { 
        // load next question
        loadQuestion(nextQuestion)
    }
    else {
        endQuiz()
    };
}

function clearEval(){
    var evaluationEl = document.getElementById("evaluation");
    evaluationEl.setAttribute('style', "display: none");
}

function displayEval(evaluation) {
var evaluationEl = document.getElementById("evaluation");
evaluationEl.textContent = evaluation;

evaluationEl.setAttribute("style", "");
setTimeout( () => {clearEval()}, 3000);
}

function endQuiz() {
    console.log("inside endQuiz");
    unloadQuestion();
    loadScoreForm();
}

function loadScoreForm() {
    console.log("load-score");
}

// Additional functions:

//  endQuiz = if quiz is over, unload questions and load score form
//  scoreForm = input from user saved to local storage
//  displayHighScores = get info from local storage and generate on to html
//  createButtons for clearing info from local storage, option to return to start page to play again

btnStartEl.addEventListener("click", startQuiz);