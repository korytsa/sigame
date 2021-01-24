import {changeContent} from './change-screen-content';
import {questionPack} from './questions-list';
import {line} from './users-answer';
import {inputField} from './users-answer';
import {questionMethods} from './question';


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
        }, 4000);
        setTimeout(() => {
            question.showDescription(questionPack, questionNumber);
        }, 8000);
        setTimeout(() => {
            question.unblockInput();
        }, 12000);
        setTimeout(() => {
            question.timeUp();
        }, 16000);

    },
    checkAnswer(questionPack, answerValue) {
        const questionDescroption = document.querySelector('.line__letter-container').innerText;
        const playerScore = document.querySelector('.game__player-list__score');

        let trueAnswer;
        let questionScore;
        
        questionPack.find((el) => {
            if (el.question === questionDescroption) {
                trueAnswer = el.answer;
                questionScore = el.points;
            }
        })

        const questionIndex = questionPack.findIndex((el) => {
            if (el.question === questionDescroption ) {
                return true;
            }
            return false;
        });


        if (answerValue === trueAnswer) {
            changeContent.insertScreenContent(subScreen, 'Правильный ответ');
            playerScore.innerText = +(playerScore.innerText) + questionScore;
        } else {
            changeContent.insertScreenContent(subScreen, `Вы ответили неправильно, правильный ответ: 
            ${trueAnswer}`);
            playerScore.innerText -= questionScore;
        }
        setTimeout(() => {
            questionMethods.showQuestion((+questionIndex) + 1);
        }, 4000);
    },
    timeUp() {
        question.blockInput();
        const questionDescroption = document.querySelector('.line__letter-container').innerText;
        const playerScore = document.querySelector('.game__player-list__score');

        let trueAnswer;
        let questionScore;
        
        questionPack.find((el) => {
            if (el.question === questionDescroption) {
                trueAnswer = el.answer;
                questionScore = el.points;
            }
        })

        const questionIndex = questionPack.findIndex((el) => {
            if (el.question === questionDescroption ) {
                return true;
            }
            return false;
        });

        changeContent.insertScreenContent(subScreen, `Время вышло, правильный ответ: 
        ${trueAnswer}`);
        playerScore.innerText -= questionScore;

        setTimeout(() => {
            questionMethods.showQuestion((+questionIndex) + 1);
        }, 4000);
    },
}

export {question as questionMethods};