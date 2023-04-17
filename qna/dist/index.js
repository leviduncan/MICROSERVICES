"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const DATABASE_URL = 'mongodb://mongoqna/qna';
const port = 8001;
mongoose_1.default.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log('Connected to DB');
})
    .catch((err) => {
    console.log('Error connecting to DB');
});
app.get('/', (req, res) => {
    res.send('Welcome to the QnA service');
});
app.get('/ask', (req, res) => {
    res.json({
        question: "What is the meaning of life?",
        answer: "42",
    });
});
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});
