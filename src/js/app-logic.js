import {renderGame} from './render-game-screen';
import {changeContent} from './change-screen-content';
import {questionMethods} from './question';
import {questionPack} from './questions-list';

// 1,2,3 страницы, затем игра

renderGame.renderGamePage();

questionMethods.showQuestion(1);

// вызов второго вопроса
// questionMethods.showQuestion(2)


