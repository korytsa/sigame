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

export {inputField};