// Name
const questionName = prompt("Как тебя зовут?");
let userName = questionName;
// Приветствие с именем
alert(`Привет, ${userName}`);

// Age
const questionBirth = prompt("Какой у тебя год рождения?");
// Вычисление возраста
const now = new Date;
let today = new Date(now.getFullYear());
let userAge = today - questionBirth;

alert(`Вау, тебе ${userAge} лет`);

// Square
const square = prompt("Веди сторону квадрата и я вычислю его периметр и площадь");
// Вычисление периметра и площади квадрата
let squareP = square * 4;
let squareS = square * square;

alert(`Периметра квадрата равен ${squareP}, а площадь ${squareS}`);

// Circle
const circleR = prompt("Введи радиус круга и я вычислю его площадь и длинну окружности");
// Вычисление площади и длинны окружности
let circleS = Math.PI * circleR * circleR;
let circumference = 2 * Math.PI * circleR;

alert(`Площадь окружности равна ${circleS}, а длинна окружности ${circumference}`);

// Distance
const distance = prompt("Какое расстояние до города в который вы хотите попасть?");
const time = prompt("Сколько времени есть на дорогу?");
// Вычисление скорости
let speed = distance / time;
alert(`Поторопись, нужно двигаться со скоростью ${speed} км/ч`);

alert("Хочешь обменять деньги перед дорогой по хорошему курсу?")
// Converter
const money = prompt("Сколько $ хочешь обменять по курсу 46.61?")
const exchangeRate = 46.61;
let exchangeResult = exchangeRate * money ;

alert(`Получится ${exchangeResult} грн`);

alert("Спасибо, было весело :)")


