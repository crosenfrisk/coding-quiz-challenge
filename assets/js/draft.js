// New pseudocode for resubmission of project

// 1. Start quiz(){
//      a.  Unload content from index.html "home" page
//      b.  Call loadQuestion(nextQuestion)
//      c.  Timer starts --
//}

// 2. loadQuestion(){
//      a.  unloadQuestion(){if question > 0}
//      b.  createQuestion() {++ nextQuestion}
//}

//  3. evalAnswer(){
//      a.  display eval (correct, incorrect)    
//      b.  adjust timer for incorrect -10
//      c.  if (timer > 0 && nextQuestion < myQuestions.length) { loadQuestion(nextQuestion)}
//      d. else {(endQuiz()}
//}

// Additional functions:
//  unloadHome = remove specific home elements
//  unloadQuestion = remove buttons by ids
//  createQuestion =   create buttons from myQuestions[]
//  displayEval = display correct/incorrect based on myQuestions.answer
//  adjustTimer = penalty if incorrect, subtract 10 seconds from timer
//  endQuiz = if quiz is over, unload questions and load score form
//  scoreForm = input from user saved to local storage
//  displayHighScores = get info from local storage and generate on to html
//  createButtons for clearing info from local storage, option to return to start page to play again