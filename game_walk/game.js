'use strict';
let game = {
    init() {
        console.log('Ваше местоположение на игровом поле в виде "о" ');
        console.log('Для того чтобы начать игру введите game.run() и нажмите Enter');
    },
    run() {
        renderer.render();
        let arrAvailablePosition = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let position = parseInt(prompt('Чтобы начать ходить введите числа: 1, 2, 3, 4, 6, 7, 8 или 9'));
            if (isNaN(position)) {
                console.log("Игра окончена.");
                break;
            } else if (arrAvailablePosition.includes(position)) {
                move.getNextPosition(position);
                renderer.clear();
                renderer.render();
            } else {
                console.log("Введите число из предложенных.")
            }

        }

    },

}
game.init();