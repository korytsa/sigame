import {renderGame} from './render-game-screen';
import {changeContent} from './change-screen-content';
// import {questionsThemeNature} from './questions-list';

// 1,2,3 страницы, затем игра

renderGame.renderGamePage();

const mainScreen = document.querySelector('.game__main-area__main-screen');
const subScreen = document.querySelector('.game__sub-screen__display');

setTimeout(() => {
    changeContent.insertScreenContent(mainScreen, changeContent.theme);
    changeContent.insertScreenContent(subScreen, changeContent.author);
}, 5000);

// функция вызова 1 вопроса, вызов второго вопроса и тд
