import {questionPack} from './questions-list';
import {inputField} from './users-answer';

const changeContent = {
    clearScreen(currentScreen) {
        while (currentScreen.firstChild) {
            currentScreen.firstChild.remove();
        }
    },
    // пока реализвация только текстовых вопросов
    insertScreenContent(currentScreen, content) {
        changeContent.clearScreen(currentScreen);

        const screenContent = document.createElement('p');
        if (currentScreen.className === 'game__main-area__main-screen') {
            screenContent.className = 'game__main-screen__text';
        } else {
            screenContent.className = 'game__sub-screen__display__text';
        }
        screenContent.innerText = content;
        currentScreen.append(screenContent);
    },
    theme: `Тема: ${questionPack[0].theme}`,
    author: `Автор темы: ${questionPack[0].author}`,
    changeAnswer(){
        const mainArea = document.querySelector('.game__main-area');
        const changeAnswerArea = document.querySelector('.game__main-area__answer-btn');

        const changeAnswerInput = document.createElement("input");
        changeAnswerInput.className =  "game__main-area__answer-input";
        mainArea.append(changeAnswerInput);

        changeAnswerArea.addEventListener('click', function(){
            changeAnswerArea.style.display = 'none';
            changeAnswerInput.style.display = 'block';
            inputField.submit();
        });
    }
}

export {changeContent};