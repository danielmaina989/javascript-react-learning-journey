// Define a Question class
class Question {
    constructor(questionText, options, correctAnswer) {
        this.questionText = questionText;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    // Method to check if the given answer is correct
    isCorrectAnswer(answer) {
        return answer === this.correctAnswer;
    }

    // Method to display the question and options
    displayQuestion() {
        console.log(this.questionText);
        this.options.forEach((option, index) => {
            console.log(`${index + 1}: ${option}`);
        });
    }
}

// Example usage
const sampleQuestion = new Question(
    "What is the capital of France?",
    ["Berlin", "Madrid", "Paris", "Rome"],
    "Paris"
);

sampleQuestion.displayQuestion();
console.log("Is 'Paris' the correct answer?", sampleQuestion.isCorrectAnswer("Paris"));
console.log("Is 'Berlin' the correct answer?", sampleQuestion.isCorrectAnswer("Berlin"));