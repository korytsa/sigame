const changeContent = {
    mainScreen: document.querySelector('.game__main-area__main-screen'),
    subScreen: document.querySelector('.game__sub-screen__display'),
    clearMainScreen() {
        const mainScreen = changeContent.mainScreen;
        while (mainScreen.firstChild) {
            mainScreen.firstChild.remove();
        }
    },
    clearSubScreen() {
        const subScreen = changeContent.subScreen;
        while (subScreen.firstChild) {
            subScreen.firstChild.remove();
        }
    },
    // пока реализвация только текстовых вопросов
    insertMainScreenContent(content) {
        const mainScreen = changeContent.mainScreen;
        changeContent.clearMainScreen();
        
        const screenContent = document.createElement('p');
        screenContent.className = 'game__main-screen__text';
        screenContent.innerText = content;
        mainScreen.append(screenContent);
    },
    insertSubScreenContent(content) {
        const subScreen = changeContent.subScreen;
        changeContent.clearSubScreen();

        const screenContent = document.createElement('p');
        screenContent.className = 'game__sub-screen__display__text';
        screenContent.innerText = content;
        subScreen.append(screenContent);
    },
}
