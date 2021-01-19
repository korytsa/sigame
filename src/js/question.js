import {changeContent} from './change-screen-content';
import {questionPack} from './questions-list';

// 
const mainScreen = document.querySelector('.game__main-area__main-screen');
const subScreen = document.querySelector('.game__sub-screen__display');

const playersList = document.querySelectorAll('.game__player-list__card');
let playerScore = playersList[0].childNodes[1].childNodes[1];
// 

const question = {
    showScore(questionList) {
        const score = questionList[1].points;
        changeContent.insertScreenContent(mainScreen, score);
        changeContent.insertScreenContent(subScreen, `${questionList[0].theme}: ${score}`);
    },
    showDescription(questionList) {
        changeContent.insertScreenContent(mainScreen, questionList[1].question);
    },
    showTimer() {

    },
    unblockInput() {

    },
    blockInput(){

    },
    showQuestion() {
        setTimeout(() => {
            question.showScore(questionPack);
        }, 4000);
        setTimeout(() => {
            // add animation
            question.showDescription(questionPack);
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