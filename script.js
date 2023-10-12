'use strict';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const isNum = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = () => {
    let rNumber = getRandomInt(100);
    console.log('rNumber: ', rNumber);
    let nAttempts = 10;
    const game = () => {
        nAttempts--;
        if (nAttempts < 0) {
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
                start();
            } else {
                alert('До свидания');
                return;
            };
        } else {
            const num = prompt('"Угадай число от 1 до 100" (Для выхода оставьте строку пустой)');
            if (num === null) {
                alert('До свидания');
                return;
            };
            if (isNum(num)) {
                const realNum = +num;
                if (realNum > rNumber) {
                    alert(`Загаданное число меньше, осталось попыток: ${nAttempts}`);
                    game();
                } else if (realNum < rNumber) {
                    alert(`Загаданное число больше, осталось попыток: ${nAttempts}`);
                    game();
                } else {
                    if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                        start();
                    } else {
                        alert('До свидания');
                        return;
                    };
                };
            } else {
                alert('Введите число');
                game();
            };
        };
    };
    console.dir(game);
    game();
};

start();