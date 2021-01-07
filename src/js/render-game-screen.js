import {botList} from './bots-list';

const renderGame =  {
    greeting: 'Для ответа на вопрос нажимайте красную кнопку после загорания рамки на экране',
    rules: 'Упрощенная',
    presenter: {
        img: 'assets/bots/Aristotle.jpg',
        name: 'Аристотель',
    },
    player: {
        img: 'assets/img/player.png',
        name: 'Player',
    },
    quantityPlayers: 5,
    renderGamePage() {
        const gameWrapper = document.createElement("div");
        gameWrapper.className = "game";
        document.body.append(gameWrapper)

        const mainArea = document.createElement("div");
        mainArea.className = "game__main-area";
        gameWrapper.append(mainArea);

        const mainScreen = document.createElement("div");
        mainScreen.className =  "game__main-area__main-screen";
        mainArea.append(mainScreen);

        const subScreen = document.createElement("div");
        subScreen.className =  "game__main-area__sub-screen";
        mainArea.append(subScreen);

        const playerList = document.createElement("div");
        playerList.className =  "game__main-area__player-list";
        mainArea.append(playerList);

        const answerBtn = document.createElement("div");
        answerBtn.className =  "game__main-area__answer-btn";
        mainArea.append(answerBtn);

        const subArea = document.createElement("div");
        subArea.className = "game__sub-area";
        gameWrapper.append(subArea);

        const header = document.createElement("div");
        header.className =  "game__sub-area__header";
        subArea.append(header);

        const log = document.createElement("div");
        log.className =  "game__sub-area__log";
        subArea.append(log);

        const input = document.createElement("input");
        input.className =  "game__sub-area__input";
        subArea.append(input);

        const footer = document.createElement("div");
        footer.className =  "game__sub-area__footer";
        subArea.append(footer);

        renderGame.renderMainScreen();
        renderGame.renderSubScreen();
        renderGame.renderPlayerList();
    },
    renderMainScreen() {
        const mainScreen = document.querySelector('.game__main-area__main-screen');
        const mainScreenText = document.createElement('p');
        mainScreenText.className = 'game__main-screen__text';
        mainScreenText.innerText = renderGame.greeting;
        mainScreen.append(mainScreenText);
    },
    renderSubScreen() {
        const subScreen = document.querySelector('.game__main-area__sub-screen');
        const subScreenWrapper = document.createElement('div');
        subScreenWrapper.className = 'game__sub-screen__wrapper';
        subScreen.append(subScreenWrapper);

        const presenter = document.createElement('div');
        presenter.className = 'game__sub-screen__presenter';
        subScreenWrapper.append(presenter)

        const presenterName = document.createElement('p');
        presenterName.className = 'game__sub-screen__presenter-name'
        presenterName.innerText = renderGame.presenter.name;
        presenter.append(presenterName);

        const presenterImg = document.createElement('img');
        presenterImg.src = renderGame.presenter.img;
        presenterImg.className = 'game__sub-screen__presenter-img';
        presenter.append(presenterImg);

        const display = document.createElement('div');
        display.className = 'game__sub-screen__display';
        subScreenWrapper.append(display);
        const displayText = document.createElement('p');
        displayText.innerText = `Правила игры: ${renderGame.rules}`;
        display.append(displayText);
    },
    renderPlayerList() {
        const playerList = document.querySelector('.game__main-area__player-list');

        for (let i = 0; i < renderGame.quantityPlayers; i++) {
            const playerCard = document.createElement('div');
            playerCard.className = 'game__player-list__card';
            playerList.append(playerCard);

            const playerAvatarWrapepr = document.createElement('div')
            playerAvatarWrapepr.className = 'game__player-list__avatar-wrapper';
            playerCard.append(playerAvatarWrapepr);
            const playerAvatar = document.createElement('img');
            playerAvatar.className = 'game__player-list__avatar';
            playerAvatar.src = botList[i].src;
            playerAvatarWrapepr.append(playerAvatar);

            const playerInfo = document.createElement('div');
            playerInfo.className = 'game__player-list__info';
            playerCard.append(playerInfo);

            const playerName = document.createElement('div');
            playerName.className = 'game__player-list__name';
            playerName.innerText = botList[i].name;
            playerInfo.append(playerName);

            const playerScore = document.createElement('div');
            playerScore.className = 'game__player-list__score';
            playerScore.innerText = 0;
            playerInfo.append(playerScore);
        }

        const currentPlayer = playerList.firstChild;
        const currentPlayerAvatar = currentPlayer.firstChild.firstChild;
        const currentPlayerName = currentPlayer.lastChild.firstChild;
        currentPlayerAvatar.src = renderGame.player.img;
        currentPlayerName.innerText = renderGame.player.name;
        


    }
}

renderGame.renderGamePage();
