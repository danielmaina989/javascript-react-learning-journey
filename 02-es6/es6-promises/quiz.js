const quizQuestions = [
    {
        question: "What is a Promise in ES6?",
        options: [
            "A function that always resolves",
            "An object representing the eventual completion or failure of an asynchronous operation",
            "A synchronous operation",
            "A method to handle synchronous code"
        ],
        answer: 1
    },
    {
        question: "Which method is used to handle a fulfilled Promise?",
        options: ["catch()", "then()", "finally()", "resolve()"],
        answer: 1
    },
    {
        question: "What does the 'catch()' method do in a Promise?",
        options: [
            "Handles the resolved value of a Promise",
            "Handles errors or rejections in a Promise",
            "Executes code after a Promise is settled",
            "Creates a new Promise"
        ],
        answer: 1
    },
    {
        question: "How do you create a new Promise?",
        options: [
            "new Promise(callback)",
            "Promise.create(callback)",
            "Promise.new(callback)",
            "new Promise((resolve, reject) => { /* logic */ })"
        ],
        answer: 3
    },
    {
        question: "What is the purpose of the 'finally()' method in Promises?",
        options: [
            "To handle only resolved Promises",
            "To execute code after a Promise is settled, regardless of its outcome",
            "To reject a Promise",
            "To chain multiple Promises"
        ],
        answer: 1
    }
];

export default quizQuestions;