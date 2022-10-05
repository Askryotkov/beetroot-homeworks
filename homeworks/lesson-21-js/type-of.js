//- Проверка на переменную с числами
let testNumber = 12;
console.log('testNumber: ', testNumber, typeof testNumber); 

//-Проверка на переменную с большими числами
let testBigInt = 108n;
console.log('testBigint: ', testBigInt, typeof testBigInt); 

// Проверка Symbol
let testSymbol = Symbol();
console.log('testSymbol: ', testSymbol, typeof testSymbol);

//- Проверка на переменную с текстом
let testText = 'Hello';
console.log('testText: ', testText, typeof testText); 

//- Проверка на булевый тип данных
let testBoolean = true;
console.log('testBoolean: ', testBoolean, typeof testBoolean); 

//Проверка на undefined, если значение не было введено. Вручную его не вводим
let testUndefined;
console.log('testUndefined: ', testUndefined, typeof testUndefined); 

//- Проверка на значение null. Используется, что бы в переменную положить "ничего"(еще не известное значение, или пустота)
let testNull = null;
console.log('testNull: ', testNull, typeof testNull); 

//- Проверка значения Math
let testMath = Math;
console.log('testMath: ', testMath, typeof testMath);

//-Проверка на переменную Math, если из нее вывести число Пи
let testMathPi = Math.PI;
console.log('testMath: ', testMath, typeof testMathPi);

//- Проверка на переменную alert
let testAlert = alert;
console.log('testAlert: ', testAlert, typeof testAlert);

// Проверка массива
let testArr = ['green', 'yellow', 'orange'];
console.log('testArr: ', testArr, typeof testArr);

// Массив со значение null
let testArrEmpty = null;
console.log('testArrEmpty: ', testArrEmpty, typeof testArrEmpty);

// Проверка, является ли массив наполненным
let isTestArrey = Array.isArray(testArr);
console.log('testArr is Arrey?: ', isTestArrey);

let isTestArrey2 = Array.isArray(testArrEmpty);
console.log('testArrEmpty is Arrey?: ', isTestArrey2);

// Num to string
let num = 765654;
console.log('num to string: ',num, num.toString(32));













