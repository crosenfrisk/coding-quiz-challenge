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

// Set timer to display on page, then countdown begins with startQuiz();
function displayTimer() {
    var timerEl = document.getElementById("timerDiv");
    timerEl.innerHTML = timeRemaining;
  }

// Timer will decrement each second until time runs out or have additional time
// removed if answer is wrong in the evaluateAnswer() function;
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

// Clicking button on home screen will lead to the "next page" where we remove the hardcoded html elements
// and then load the questions using loadQuestion() function.
function startQuiz(){
    unloadHome();
    loadQuestion(nextQuestion);
    // start timer to decrement every second
    timer = setInterval(updateTimer, 1000);
}

// Function will load questions from myQuestions array one at a time
// using unloadQuestion to remove the current question and move to the next.
function loadQuestion(nextQuestion){
    if (nextQuestion > 0) {
    unloadQuestion();
    }
    createQuestion(nextQuestion);
}

// Dynamically generates the html of each question, appending it to the #parent-row container of main section.
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

// Removes the previous question in order to load the next question.
function unloadQuestion(){
    // removes question contents from quiz page
    parentEl.replaceChildren();
}

// Determines whether the answer is correct or incorrect based on criteria in myQuestions[]
// if incorrect, deduct additional time as penalty.
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

// Removes correct/incorrect from display 
function clearEval(){
    var evaluationEl = document.getElementById("evaluation");
    evaluationEl.setAttribute('style', "display: none");
}

// Creates element to display and then the time out to remove.
function displayEval(evaluation) {
var evaluationEl = document.getElementById("evaluation");
evaluationEl.textContent = evaluation;

evaluationEl.setAttribute("style", "");
setTimeout( () => {clearEval()}, 5000);
}

// Quiz will end after all questions have been answered OR time has run out.
function endQuiz() {
    unloadQuestion();
    
    // stop timer from decrementing any further
    clearInterval(timer);
    updateTimer();

    loadScoreForm();
}

// Load Score Form will display after quiz has ended.
function loadScoreForm() {
    // Display "All done!" message
    // Display score and ask user to enter initials to save score to local storage.
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
    let score = timeRemaining;

    // Save user's score to local storage
    storeScore(score, inputEl.value);
    // Display high scores
    displayHighScores(score);
    
  });
};

// Save score and initials to local storage for persistence and recall on View High Scores page.
function storeScore(score, initials){
  // Score of quiz is based on time remaining.
  
  // If no scores are currently being saved in the leader board

  if (!localStorage.getItem('scores')){
    
    // create an empty array to store the scores in
    let scores = [];
    
    // Push the current score to the empty array
    scores.push(initials + ": " + score);

    // then stringify the array and save it with the key "scores" in local storage.
    localStorage.setItem('scores', JSON.stringify(scores));

  } else {

    // If there are currently scores stored in the array, parse the scores and save new score with existing array.
    let scoresArray = JSON.parse(localStorage.scores);

    // Add the new score to beginning of the array.
    scoresArray.unshift(initials + ": " + score);

    // Stringify the new array and save it in place of the previous array.
    localStorage.setItem('scores', JSON.stringify(scoresArray));
  }
}

// Clicking the "View High Scores" button will load high scores to page.
document.getElementById('view-high-scores').addEventListener('click', displayHighScores);

// Displaying high scores happens after the user inputs their initials and saves their score.
function displayHighScores(score){
  // Remove View High Scores from upper left and timer div from upper right, clear other text.
  document.querySelector('.container').style.display = 'none';
  document.querySelector('#highScores').style.display = ''
  document.querySelector('.view-high-scores').style.display = 'none';
  document.querySelector('.timer').style.display = 'none';

  // Create a div to display the scores
  // let scoresContainerEl = document.createElement('div');
  // parentEl.append(scoresContainerEl);

  const highScores = JSON.parse(localStorage.getItem('scores'));
  // If there are scores saved
  
  // find the child/ren of .container-scores if it/they exist
  if (highScores && typeof highScores === 'object'){
    // Load scores by parsing scores from localStorage

    // Loop through scores in the array
    for (let i = 0; i < highScores.length; i ++){
      // Display initials and scores
      let text = highScores[i];      // Display text (initials and score) in a p element dynamically
      let scoreItem = document.createElement('li');
      scoreItem.textContent = text;
      // Append to the list of scores
      document.querySelector('.container-scores').appendChild(scoreItem);      
    }
  } else {
    // if there are no scores to display return "no scores"
    document.querySelector('.container-scores').innerHTML = 'No Scores to Display';
  }

    // Dynamically add buttons below scores to go back to home page or clear loaded scores on click.
  
    // var goBackBtn = document.createElement('button');
    // goBackBtn.className ="goBack";
    // goBackBtn.setAttribute("style", "inline");
  
    // var clearScoreBtn = document.createElement('button');
    // clearScoreBtn.className ="clearScoreBtn";
    // clearScoreBtn.setAttribute("style", "inline");

    // scoresContainerEl.append(goBackBtn);
    // scoresContainerEl.append(clearScoreBtn);

}

function clearScores(score){
  localStorage.setItem('scores', '[]');
  const parent = document.querySelector(".container-scores")
while (parent.lastChild) {
    parent.lastChild.remove()
}
}

document.getElementById('clearScoreBtn').addEventListener('click', clearScores);

btnStartEl.addEventListener("click", startQuiz);