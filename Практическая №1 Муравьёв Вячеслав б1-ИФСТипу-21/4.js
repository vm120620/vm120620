let validInput = false;
let number = 0;

while (!validInput) {
    let input = prompt("Введите число больше 5:");

    if (input === null) {
        alert("Отменена пользователем.");
        break;
    }

    number = parseInt(input, 10);

    if (!isNaN(number) && number > 5) {
        validInput = true;
    } else if (isNaN(number)) {
        alert("Ошибка! Введите целое число.");
    } else {
        alert("Число должно быть больше 5. Введите повторно.");
    }
}

if (validInput) {
    alert("Поздравляем! Вы ввели число больше 5: " + number);
}
