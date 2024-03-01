
    // const quizData = <%= JSON.stringify(quiz) %>
    // const quiz = data; // Отримання всього об'єкта тесту
    // const questions = quiz.questions; // Отримання списку питань
    // const questionElement = document.getElementById("question");
    // const answerButton = document.getElementById("answer-buttons");
    // const nextButton = document.getElementById("next-btn");
    
    // let currentQuestionIndex = 0;
    // let score = 0;
    
    // function startQuiz() {
    //     currentQuestionIndex = 0;
    //     score = 0;
    //     nextButton.innerHTML = "Next";
    //     showQuestion();
    // }
    
    // function showQuestion() {
    //     resetState();
    //     const currentQuestion = questions[currentQuestionIndex];
    //     const questionNo = currentQuestionIndex + 1;
    //     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    //     currentQuestion.answers.forEach(answer => {
    //         const button = document.createElement("button");
    //         button.innerHTML = answer.text;
    //         button.classList.add("btn");
    //         answerButton.appendChild(button);
    //         if (answer.correct) { // Перевірка на правильність відповіді
    //             button.dataset.correct = answer.correct;
    //         }
    //         button.addEventListener("click", selectAnswer);
    //     });
    // }
    
    // function resetState() {
    //     nextButton.style.display = "none";
    //     while (answerButton.firstChild) {
    //         answerButton.removeChild(answerButton.firstChild);
    //     }
    // }
    
    // function selectAnswer(e) {
    //     const selectBtn = e.target;
    //     const isCorrect = selectBtn.dataset.correct === "true";
    //     if (isCorrect) {
    //         selectBtn.classList.add("correct");
    //         score++;
    //     } else {
    //         selectBtn.classList.add("incorrect");
    //     }
    //     Array.from(answerButton.children).forEach(button => {
    //         if (button.dataset.correct === "true") {
    //             button.classList.add("correct");
    //         }
    //         button.disabled = true;
    //     });
    //     nextButton.style.display = "block";
    // }
    
    // function showScore() {
    //     resetState();
    //     questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    //     nextButton.innerHTML = "Play Again";
    //     nextButton.style.display = "block";
    // }
    
    // function handleNextButton() {
    //     currentQuestionIndex++;
    //     if (currentQuestionIndex < questions.length) {
    //         showQuestion();
    //     } else {
    //         showScore();
    //     }
    // }
    
    // nextButton.addEventListener("click", () => {
    //     if (currentQuestionIndex < questions.length) {
    //         handleNextButton();
    //     } else {
    //         startQuiz();
    //     }
    // });
    
    // startQuiz();
    
        

    


