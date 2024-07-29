// Updated quiz data with 10 random questions
const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correctIndex: 0
    },
    {
        question: "Who wrote 'Harry Potter'?",
        answers: ["J.K. Rowling", "Stephen King", "George Orwell", "Tolkien"],
        correctIndex: 0
    },
    {
        question: "What year did the Titanic sink?",
        answers: ["1912", "1923", "1901", "1935"],
        correctIndex: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Venus", "Mercury", "Jupiter"],
        correctIndex: 0
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correctIndex: 0
    },
    {
        question: "Which of these is not a primary color?",
        answers: ["Purple", "Red", "Blue", "Yellow"],
        correctIndex: 0
    },
    {
        question: "What is the largest mammal in the world?",
        answers: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
        correctIndex: 0
    },
    {
        question: "Who is credited with discovering gravity?",
        answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctIndex: 0
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        correctIndex: 0
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: ["Japan", "China", "Vietnam", "South Korea"],
        correctIndex: 0
    }
];

const quizContainer = document.getElementById('quiz');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const timeDisplay = document.getElementById('time');
const alertCountDisplay = document.getElementById('alertCount');

let currentQuestion = 0;
let alerts = 0;
let timeLeft = 60; // 1 minute in seconds

// Function to display current question
function displayQuestion(questionIndex) {
    const question = quizData[questionIndex];
    quizContainer.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            ${question.answers.map((answer, index) => `
                <li>
                    <label>
                        <input type="radio" name="answer" value="${index}" required>
                        ${answer}
                    </label>
                </li>
            `).join('')}
        </ul>
    `;
}

// Function to handle next button click
nextButton.addEventListener('click', function() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        displayQuestion(currentQuestion);
        restartTimer();
    }
});

// Function to handle previous button click
prevButton.addEventListener('click', function() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion(currentQuestion);
        restartTimer();
    }
});

// Function to handle quiz submission
submitButton.addEventListener('click', function() {
    // Implement quiz submission logic (checking answers, etc.)
    // For simplicity, let's just display an alert here
    alert("Quiz Submitted!");
});

// Function to update timer every second
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    timeDisplay.textContent = `${minutes}:${seconds}`;
    
    if (timeLeft === 0) {
        // Auto-submit quiz when time runs out
        alert("Time's up for this question!");
        submitButton.click(); // Simulate click on submit button
    } else {
        timeLeft--;
    }
}

// Function to restart timer for each question
function restartTimer() {
    timeLeft = 60; // Reset timer to 1 minute for each question
}

// Update timer every second
setInterval(updateTimer, 1000);

// Example function to detect user's focus on screen
function detectFocus() {
    // Implement Teachable Machine or other webcam-based detection here
    // For demo purposes, increment alerts for every detected issue
    alerts++;
    alertCountDisplay.textContent = alerts;
    if (alerts >= 3) {
        alert("Too many alerts. Quiz will now stop.");
        submitButton.click(); // Simulate click on submit button
    }
}

// Example: Call detectFocus every 30 seconds
setInterval(detectFocus, 30000);

// Display first question on page load
displayQuestion(currentQuestion);
