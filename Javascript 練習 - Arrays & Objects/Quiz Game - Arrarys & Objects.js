const questions = [
    {
        category: "Math",
        question: "What is 2 + 2?",
        choices: ["3", "4", "5"],
        answer: "4"
    },
    {
        category: "Science",
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "O2", "CO2"],
        answer: "H2O"
    },
    {
        category: "History",
        question: "Who was the first President of the United States?",
        choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
        answer: "George Washington"
    },
    {
        category: "Geography",
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris"],
        answer: "Paris"
    },
    {
        category: "Literature",
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Charles Dickens", "Mark Twain"],
        answer: "William Shakespeare"
    }
];

function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResults (selectedQuestion, computerChoice) {
    if (selectedQuestion.answer === computerChoice) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${selectedQuestion.answer}`;
    }
}

const selectedQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);
console.log(getResults(selectedQuestion, computerChoice));








