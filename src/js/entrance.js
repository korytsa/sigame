const renderFirstPage = {
    firstPage() {
        const markup = `
            <div class="wrapper">
                <div class="entrance">
                    <h2 class="entrance__title">SIGame Online</h2>
                    <p class="entrance__name">Ваше имя</p>
                    <input class="entrance__input">
                </div>
                <div class="entrance__button">
                    <button class="entrance__btn">Вход</button>
                </div>
            </div>
            `;
        document.body.innerHTML = markup;
    },
    secondPage(){
        const pageTwo = `
        <div class="game_selection">
            <h2 class="game_selection__title">Выберите действие</h2>
            <ul>
                <li class="playWithBots">Играть с ботами</li>
            </ul>
        </div>
        `;
        document.body.innerHTML = pageTwo;
    },
    thirdPage(){
    const pageThree =  `
        <div class="wrapper">
        <div class="game_settings">
            <h2 class="game_settings__title">Новая игра </h2>
            <p>Название игры</p>
            <input type="text">
            <p>Игроки</p>
            
            <span class="game_settings__countTitle">Всего:
            <span class="game_settings__countValue">7</span></span>
            <input type="range" class="game_settings__range" id="myrange" min="2" max="10" step="1" >
            </div>
            <div class="game_settings__button">
                <button class="game_settings__btn">Начать игру</button>
            </div>
        </div>
        `;
        
        document.body.innerHTML = pageThree;
    }
}

const countPeople = document.getElementById("myrange");
let countValue = document.querySelector(".game_settings__countValue");
    countPeople.addEventListener("change", function() {
        countValue.innerHTML = this.value;
});


