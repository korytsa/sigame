const pageThree = `
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