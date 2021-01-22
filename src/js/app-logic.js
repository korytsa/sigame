import {renderGame} from './render-game-screen';
import {changeContent} from './change-screen-content';
import {questionMethods} from './question';
import {questionPack} from './questions-list';
import {renderPages} from './entrance';

renderPages.firstPage();

const renderSecondPage = () => {
    // сохранить имя пользователя
    const nextPageBtn = document.querySelector('.entrance__btn');
    nextPageBtn.addEventListener('click', renderPages.secondPage);
}

renderSecondPage();


// добавить имя пользователя
// renderGame.renderGamePage(); 

// questionMethods.showQuestion(1);



