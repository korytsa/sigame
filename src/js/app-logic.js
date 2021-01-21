import {renderGame} from './render-game-screen';
import {changeContent} from './change-screen-content';
import {questionMethods} from './question';
// import {questionsThemeNature} from './questions-list';

// 1,2,3 страницы, затем игра

renderGame.renderGamePage();

const mainScreen = document.querySelector('.game__main-area__main-screen');
const subScreen = document.querySelector('.game__sub-screen__display');
// 
const playersList = document.querySelectorAll('.game__player-list__card');
let playerScore = playersList[0].childNodes[1].childNodes[1];
// 

questionMethods.showQuestion()


