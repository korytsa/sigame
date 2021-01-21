import {changeContent} from './change-screen-content';
import {questionPack} from './questions-list';
import {line} from './users-answer';
import {inputField} from './users-answer';


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
        line.renderQuestion(questionList[questionNumber].question)
    },
    unblockInput(questionNumber) {
        changeContent.changeAnswer();
        inputField.submit(questionNumber);
    },
    blockInput(){
        const changeAnswerArea = document.querySelector('.game__main-area__answer-btn');
        changeAnswerArea.removeEventListener('click', changeContent.showInput);
    },
    showQuestion(questionNumber) {
        setTimeout(() => {
            question.showScore(questionPack, questionNumber);
        }, 2000);
        setTimeout(() => {
            question.showDescription(questionPack, questionNumber);
        }, 4000);
        setTimeout(() => {
            question.unblockInput();
        }, 6000);
        setTimeout(() => {
            question.timeUp();
        }, 12000);

    },
    // при нажатии энтер вызвать функцию checkAnswer, 
    // если ентер не нажат, вызвать функию timeUp
    checkAnswer(questionPack, answerValue) {
        const questionDescroption = document.querySelector('.line__letter-container').innerText;

        let trueAnswer;
        questionPack.find((el) => {
            if (el.question === questionDescroption) {
                trueAnswer = el.answer;
            }
        })

        if (answerValue === trueAnswer) {
            console.log('вы правы');
            // question.changeScore('+');
            // вызов следующего вопроса
            // return true;
        } else {
            console.log('вы не правы')
            // вывести что не прав
            // return false;
        }


    },
    timeUp() {
        question.blockInput();
        // question.changeScore('-');
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