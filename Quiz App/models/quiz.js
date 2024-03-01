const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    text: {
        type: String,
        // required: true
    },
    correct: {
        type: Boolean,
        // required: true
    }
});

const QuestionSchema = new Schema({
    question: {
        type: String,
        // required: true
    },
    answers: [AnswerSchema]
});

const QuizSchema = new Schema({
    name: {
        type: String,
        // required: true
    },
    questions: [QuestionSchema]
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;

