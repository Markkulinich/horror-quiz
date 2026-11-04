document.addEventListener('DOMContentLoaded', () => {
    
    
const questions = [
        {
            question: "Як гладити кота правильно?",
            answers: ["за шерстю", "проти шерсті", "вертикально", "за годинниковою стрілкою"],
            correct: 0
        },
        {
            question: "як гладити кота?",
            answers: ["за шерстю", "під час обіду", "завтра", "коли він спить"],
            correct: 0
        },
        {
            question: "ЯКе було минуле запитання?",
            answers: ["Який тип даних є числом в JS", "Як гладити кота", "Що треба робити при пожежі?", "Нічого"],
            correct: 1
        },
        {
            question: "яки питання на вашу думку сюди підійшло?",
            answers: ["", "", "", "питання про кота"],
            correct: 3
        },
        {
            question: "скільки разів в день треба годувати кота?",
            answers: ["67", "-9", "1", "3"],
            correct: 3
        },
         {
            question: "я не знаю про що запитати?",
            answers: ["", "", "", "?"],
            correct: 3
        },
          {
            question: "тож як гладити кота правильно?",
            answers: ["згадуйте відповідь", "згадуйте відповідь", "згадуйте відповідь", "згадуйте відповідь"],
            correct: 0
        },
        {
            question: "яке було друге питання всього квізу?",
            answers: ["тож як гладити кота правильно?", "як гладити кота", "як гладити кота?", "коли він спить"],
            correct: 2
        },
        {
            question: "ЯКе було минуле запитання?",
            answers: ["Який тип даних є числом в JS", "Як гладити кота", "Що треба робити при пожежі?", "Нічого"
            ,"тож як гладити кота правильно?", "як гладити кота", "як гладити кота?", "коли він спить"],
            correct: 3
        },
        {
            question: "вам подобається цей квіз?",
            answers: ["т_к", "_ак", "__к", "та_","т_к", "_ак", "__к", "та_","т_к", "_ак", "__к", "та_"],
            correct: 6
        },
        {
            question: "ви хочете продовжити квіз?",
            answers: ["я не знаю", "?", "так", "ні"],
            correct: 2
        },
         {
            question: "чи це останнє питання?",
            answers: ["ні", "ні", "ні", "ні"],
            correct: 100
        },
    ];
    
    const startScreen = document.querySelector('#start-screen');
    const quizScreen = document.querySelector('#quiz-screen');
    const resultScreen = document.querySelector('#result-screen');
    
    const startBtn = document.querySelector('#start-btn');
    const restartBtn = document.querySelector('#restart-btn');
    
    const resultText = document.querySelector('.result-text');
    
    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');
    let questionIndex = 0;
    let score = 0;
    let timer = 15;
    const timerDisplay = document.querySelector('#timer');
    let interval;
    
    
    function showQuestion(question) {
        
        clearInterval(interval);
        startTimer();
        
        answersContainer.innerHTML = '';
        questionText.innerText = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement('button');
            button.innerText = question.answers[i];
            button.classList.add('answer-btn');
            button.addEventListener('click', () => checkAnswer(button, i));
            answersContainer.appendChild(button);

        }
    }
    
    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion(questions[questionIndex]);
        } else {
            showResult();
        }
    }
    
    // clearInterval(interval); startTimer(); showResult();
    function checkAnswer(button, i){
        if (i == questions[questionIndex].correct) {
            score++;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
        
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;
        });
        setTimeout(nextQuestion, 1000);
    }
    
    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }
    
    startBtn.addEventListener('click', startGame);
    
    function showResult() {
        const accuracy = Math.round((score / questions.length) * 100);
        resultText.innerText = `Твій результат: ${score}/${questions.length} (${accuracy}%)`;
        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');
        const finalScore = document.querySelector('#final-score');
        finalScore.innerText = score;
    }
    
    function startTimer() {
        timer = 15;
        timerDisplay.innerText = `Час: ${timer}с`;
        interval = setInterval(() => {
            timer--;
            timerDisplay.innerText = `Час: ${timer}с`;
            if (timer <= 0) {
                clearInterval(interval);
                nextQuestion();
            }
        }, 1000);
    }
    
    restartBtn.addEventListener('click', () => {
        startGame();
        resultScreen.classList.add('hide');
    });



});
