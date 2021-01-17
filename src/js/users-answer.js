const inputField = {
    submit() {
        let changeAnswerInput = document.querySelector('.game__main-area__answer-input');
        const mainArea = document.querySelector('.game__main-area');

        changeAnswerInput.addEventListener('keydown', function(e) {
            if (e.keyCode === 13) {
                const answer = document.createElement("div");
                answer.className =  "game__main-area__answer";
                mainArea.append(answer);

                let answerValue = document.createElement("p");
                answerValue.className = "game__main-area__answer__value";
                answerValue.id = "snackbar";
                answerValue.innerText = changeAnswerInput.value;
                answer.append(answerValue);
                
                // console.log(qwerty);

                answerValue.className = "show";
                setTimeout(function(){ answerValue.className = answerValue.className.replace("show", ""); }, 3000);
            }
        });
    }
}

const line = {
    renderQuestion() {
        const mainScreen = document.querySelector('.game__main-area__main-screen');

        const firstLine = document.createElement("p");
        firstLine.className = "line__first";
        mainScreen.append(firstLine);

        const center = document.createElement('div');
        center.className = "line__center"
        mainScreen.append(center);

        const secondLine = document.createElement("div");
        secondLine.className = "line__second";
        center.append(secondLine);

        const container = document.createElement('div');
        container.className = 'line__container';
        center.appendChild(container);

        const letterContainer = document.createElement('p');
        letterContainer.className = 'line__letter-container';
        letterContainer.innerText = 'Example!';
        container.appendChild(letterContainer);

        const fourthLine = document.createElement("div");
        fourthLine.className = "line__fourth";
        center.append(fourthLine);

        const thirdLine = document.createElement("p");
        thirdLine.className = "line__third";
        mainScreen.append(thirdLine);

        letterContainer.style.display = "none";

        for (var i = 0; i < letterContainer.textContent.length; i++) {
        (function(i) {
            setTimeout(function() {
                var texts = document.createTextNode(letterContainer.textContent[i])
                var span = document.createElement('span');
                span.appendChild(texts);

                span.classList.add("line__letter");
                container.appendChild(span);

            }, 115 * i);}(i));
        }
    }
}
export {line};
export {inputField};