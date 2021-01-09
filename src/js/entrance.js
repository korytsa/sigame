function firstPage(){
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
}
window.addEventListener('load', firstPage());

const entrance_confirm = document.querySelector('.entrance__btn');
entrance_confirm.addEventListener('click', function secondPage(){
    const pageTwo = `
    <div class="game_selection">
        <h2 class="game_selection__title">Выберите действие</h2>
        <ul>
            <li class="playWithBots">Играть с ботами</li>
        </ul>
    </div>
    `;
    document.body.innerHTML = pageTwo;
});

function thirdPage(){
    const pageThree =  `
        <div class="wrapper">
        <div class="game_settings">
            <h2 class="game_settings__title">Новая игра </h2>
            <p>Название игры</p>
            <input type="text">
            <p>Игроки</p>
            
            <span class="game_settings__countTitle">Всего:
            <span class="game_settings__countValue">3</span></span>
            <input type="range" class="game_settings__range" min="2" max="10" value="3">
            </div>
            <div class="game_settings__button">
                <button class="game_settings__btn">Начать игру</button>
            </div>
        </div>
        `;
    document.body.innerHTML = pageThree;
}