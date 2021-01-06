const renderGamePage = () => {
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
}

renderGamePage()

// сделать отдельную функцию для прорисовки каждого элемента