import {questionPack} from './questions-list'

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
        const subArea = document.querySelector('.game__sub-area');
        const input = document.createElement("input");
        input.className =  "gamesub-areainput";
        subArea.append(input);

        const changeAnswerArea = document.querySelector('.gamemain-areaanswer-btn');
        let changeAnswerInput = document.querySelector('.gamemain-area__answer-input');
        changeAnswerArea.addEventListener('click', function(){
            changeAnswerArea.style.display = 'none';
            changeAnswerInput.style.display = 'block';
        });
    }
}

export {changeContent};