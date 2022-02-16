// New pseudocode for resubmission of project

var timeRemaining = 75;
var nextQuestion = 0;
var btnStartEl = document.getElementById("btnStart");
var parentEl = document.getElementById("parent-row");
var timer;
var score;

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

// Start quiz(){

//  Unload content from index.html "home" page
function unloadHome(){
    var homeEl = document.getElementById("home-container");
    homeEl.remove();
}

function displayTimer() {
    var timerEl = document.getElementById("timerDiv");
    timerEl.innerHTML = timeRemaining;
  }

function updateTimer(){
  //After all questions are answered OR timer runs out: endQuiz();
    if (timeRemaining == 0 || nextQuestion > myQuestions.length) {
      //  clearInterval();
       endQuiz();
     } 
     
     else {
       timeRemaining--;
       displayTimer();
     }
}

function startQuiz(){
    unloadHome();
    loadQuestion(nextQuestion);
    // start timer to decrement every second
    timer = setInterval(updateTimer, 1000);
}

function loadQuestion(nextQuestion){
    if (nextQuestion > 0) {
    unloadQuestion();
    }
    createQuestion(nextQuestion);
}

function createQuestion(nextQuestion){

     // Add new H1
  var newH1 = document.createElement("h1");
  newH1.setAttribute("id", "questionNumber");

  //  Add new H2
  var newH2 = document.createElement("h2");
  newH2.setAttribute("id", "questionText");

  // create div to hold buttons for styling
  var createDivEl = document.createElement("div");
  createDivEl.className= "btn-group-vertical";
  parentEl.appendChild(createDivEl);

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
  createDivEl.appendChild(newH1);

  newH2.textContent = myQuestions[nextQuestion].question;
  createDivEl.appendChild(newH2);

  btnOption1.textContent = myQuestions[nextQuestion].option.A;
  btnOption2.textContent = myQuestions[nextQuestion].option.B;
  btnOption3.textContent = myQuestions[nextQuestion].option.C;
  btnOption4.textContent = myQuestions[nextQuestion].option.D;

  btnOption1.setAttribute("id", "A");
  btnOption2.setAttribute("id", "B");
  btnOption3.setAttribute("id", "C");
  btnOption4.setAttribute("id", "D");

  createDivEl.appendChild(btnOption1);
  createDivEl.appendChild(btnOption2);
  createDivEl.appendChild(btnOption3);
  createDivEl.appendChild(btnOption4);

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
setTimeout( () => {clearEval()}, 5000);
}

function endQuiz() {
    unloadQuestion();
    
    // stop timer from decrementing any further
    clearInterval(timer);
    updateTimer();

    loadScoreForm();
}

function loadScoreForm() {
    // Display "All done!" message, display score and ask user to enter initials.
  var allDoneEl = document.createElement("h1");
  allDoneEl.textContent = "All done!";
  allDoneEl.className = "mt-5 justify-content-center col-sm-12 col-lg-12";

  var yourFinalScoreEl = document.createElement("h2");
  yourFinalScoreEl.textContent = "Your final score is " + timeRemaining +  ".";
  yourFinalScoreEl.className = "mt-5 justify-content-center text-center";

  var instructionsEl = document.createElement("h2");
  instructionsEl.textContent = "Please enter your initials:";
  instructionsEl.className ="mt-5 justify-content-center text-center";
  instructionsEl.id = "instructions";

  var inputEl = document.createElement("input");

  var submitBtnEl = document.createElement("button");
  submitBtnEl.textContent = "Submit";
  submitBtnEl.id ="submitBtn";

  var children = [allDoneEl, yourFinalScoreEl, instructionsEl, inputEl, submitBtnEl];

  for (var i = 0; i < children.length; i++ ){
    parentEl.appendChild(children[i]);
  }

  submitBtnEl.addEventListener("click", function(e) {

    // Prevent browser from refreshing on submit
    e.preventDefault();
    // Save the user's initials and final score as an object
    let score = {
      name: inputEl.value,
      score: timeRemaining
    };

    // Save user's score to local storage
    storeScore(score);
    // Display high scores
    displayHighScores(score);
    
  });
};

function storeScore(score){
  // Score of quiz is based on time remaining
  score = timeRemaining;
  // If no scores are currently being saved in the leader board
  if (!localStorage.scores){
    // Create an empty array to store the scores in
    let scores = [];
    // Push the current score to the empty array
    scores.push(score);
    // Stringify the array and set it with the key "scores" in local storage
    localStorage.setItem('scores', JSON.stringify(scores));
  } else {
    // If there are currently scores stored in the array, parse the scores and save new score with existing array
    let scoresArray = JSON.parse(localStorage.scores);
    // Add the new score to beginning of the array
    scoresArray.unshift(score);
    // Stringify the new array and save it in place of the previous array.
    localStorage.scores = JSON.stringify(scoresArray);
  }
 
}

// function saveInitials(){
//   var inputEl = document.createElement("input"); 
//   var initials = inputEl;
//   localStorage.setItem("initials", JSON.stringify(initials));
// }

// function scoreForm(){
//   saveInitials();
//   storeScore();
// }

function displayHighScores(score){
// Remove h1/h2 and just display leader board
parentEl.style.display = 'none';
main.innerHTML = '';

// Create a div to store the scores
let scoresContainer = document.createElement('div');
parentEl.append(scoresContainer);

  // If there are scores saved
  if (localStorage.length){
    // Load scores by parsing scores from localStorage
    let scores = JSON.parse(localStorage.scores || 'No Scores to Display');
    // Loop through scores in the array
    for (let i = 0; i < scores.length; i ++){
      // Display initials and scores
      let text = `${scores[i].name}` + `${scores[i].score}`;
      // Display text (initials and score) in a p element dynamically
      let scoreItem = document.createElement('p');
      scoreItem.textContent = text;
      // Append to the list of scores
      scoresContainer.appendChild(scoreItem);
    }
  }
  localStorage.getItem("initials", score);
}

// Additional functions:
//  displayHighScores = get info from local storage and generate on to html
//  createButtons for clearing info from local storage, option to return to start page to play again

btnStartEl.addEventListener("click", startQuiz);