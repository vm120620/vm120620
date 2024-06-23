let number = 10;

let type = getType(number);

if (number > 0) {
    console.log("Переменная положительная");
} else if (number < 0) {
    console.log("Переменная отрицательная");
} else {
    console.log("Переменная равна нулю");
}

console.log("Тип переменной: " + type);

function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}
