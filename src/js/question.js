import {changeContent} from './change-screen-content';
import {questionPack} from './questions-list';

let mainScreen;
let subScreen;

const question = {
    indicateScreens() {
        mainScreen = document.querySelector('.game__main-area__main-screen');
        subScreen = document.querySelector('.game__sub-screen__display');
    },
    showScore(questionList, questionNumber) {
        question.indicateScreens();
        const score = questionList[questionNumber].points;
        changeContent.insertScreenContent(mainScreen, score);
        changeContent.insertScreenContent(subScreen, `${questionList[0].theme}: ${score}`);
    },
    showDescription(questionList, questionNumber) {
        changeContent.insertScreenContent(mainScreen, questionList[questionNumber].question);
    },
    showTimer() {

    },
    unblockInput() {

    },
    blockInput(){

    },
    showQuestion(questionNumber) {
        setTimeout(() => {
            question.showScore(questionPack, questionNumber);
        }, 4000);
        setTimeout(() => {
            // add animation
            question.showDescription(questionPack, questionNumber);
        }, 8000);
        setTimeout(() => {
            question.showTimer()
        }, 12000);
    },
    // при нажатии энтер вызвать функцию checkAnswer, 
    // если ентер не нажат, вызвать функию timeUp
    checkAnswer(questionList, answerValue) {
        if (answerValue === questionList[1].answer) {
            // question.changeScore('+');
            // вызов следующего вопроса
            return true;
        }
        return false;
    },
    timeUp() {
        question.changeScore('-');
        // вызов следующего вопроса
    },
    changeScore(operand){
        const questionScore = questionPack[1].points;
        if (operand === '-') {
            playerScore.innerText -= questionScore;
        } else {
            playerScore.innerText = +(playerScore.innerText) + questionScore;
        }
    },
}

export {question as questionMethods};