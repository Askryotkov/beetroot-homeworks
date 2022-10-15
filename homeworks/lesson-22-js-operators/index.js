// **Static**
// Fractional numbers
const fractionalNum1 = 0.1;
const fractionalNum2 = 0.2;

// String and num summ
const num1String = "1";
const num1 = Number(num1String);
console.log("num1: ", num1);

const num2 = 2;

// Flash disc
const TB = 1024;
const file = 820;

// Deposit rate
const depositRate = 5;

// Year
const YEAR = 12;

// **Dynamic**

// * Calculate fractional numbers
console.log("%cЗадача 1. 0.1 + 0.2", "color: orange; font-size: 16px");

const result = fractionalNum1 + fractionalNum2;
console.log("0.1 + 0.2 = ", result.toFixed(2));

// * Calculate String + number
console.log("%cЗадача 2. String + Number", "color: orange; font-size: 16px");

const result2 = num1 + num2;
console.log('String + number: "1" + 2 = ', result2);

// * Calculate Flash disc memory
console.log(
  "%cЗадача 3. Сколько файлов обемом 820MB помесятся на флешку пользователя",
  "color: orange; font-size: 16px"
);

const userTB = +prompt("How much memory in GB on yours flash-disk?", 0);

if (isNaN(userTB)) {
  throw new Error("You inputed not only number");
} else if (userTB <= 0) {
  throw new Error("I think you need a new flash-disc");
}

const filesOnFlash = (userTB * TB) / file;
console.log("filesOnFlash: ", Math.floor(filesOnFlash));

if (Math.floor(filesOnFlash) <= 0) {
  alert("You can't put this file, to yours flash disk");
} else if (filesOnFlash < 2) {
  alert(`You can put ${Math.floor(filesOnFlash)} file`);
} else {
  alert(`You can put ${Math.floor(filesOnFlash)} files`);
}

// * Buy a choco
console.log("%cЗадача 4. Покупка шоколадки", "color: orange; font-size: 16px");

const userCash = +prompt("How much cash in your wallet?");
console.log("cash: ", userCash);
const chocoPrice = +prompt("How much does chocolate coast?");
console.log("chocoPrice: ", chocoPrice);

if (isNaN(userCash && chocoPrice)) {
  throw new Error("You inputed not only number");
} else if (userCash <= 0) {
  throw new Error("Not enought money");
} else if (chocoPrice <= 0) {
  throw new Error("Price need be more then 0");
}

// Calculate how mach choco user can buy
const quantityChocolates = userCash / chocoPrice;
console.log("quantityChocolates full result: ", quantityChocolates);
console.log("quantityChocolates: ", Math.floor(quantityChocolates));
// Calculate change
const userChange = (quantityChocolates - Math.floor(quantityChocolates)) * Math.floor(quantityChocolates);
console.log("userChange: ", userChange.toFixed(2));
// Result
alert(
  `You can buy ${Math.floor(
    quantityChocolates
  )} cocolates and you will have ${userChange.toFixed(2)} change`
);

// * Reverse number
console.log('%cЗадача 5. Перевернутое число', 'color: orange; font-size: 16px')

let userNum = +prompt("Write a number and I will revese it");
let reversedNum = 0;

if (isNaN(userNum)) {
  throw new Error("You wrote not only number");
} else {
  for (; userNum; userNum = Math.floor(userNum / 10)) {
    console.log("userNum - last number: ", userNum);
    reversedNum *= 10; // тоже, что написать reversedNum = reversedNum * 10.
    console.log("reversedNum: ", reversedNum);
    reversedNum += userNum % 10;
    console.log("Reversed number: ", reversedNum);
  }
}
console.log("Result=  ", reversedNum);


// * Bank deposit
console.log("%cЗадача 6. Депозит в банке", "color: orange; font-size: 16px");

const deposit = +prompt("How much money you want to put to deposite for 5%?");
const timeDeposite = +prompt("For how many months the deposit?");

if (isNaN(deposit && timeDeposite)) {
  throw new Error("You inputed not only number");
} else if (deposit <= 0) {
  throw new Error("You need more money");
}

// Берем сумму, которую человек хочет положить на депозит / на 100 и получаем 1% годовых * на 5 и получаем 5% / на 12 и получаем процент в месяц * на время депозита для результата
const userRecieve = (((deposit / 100) * depositRate) / YEAR) * timeDeposite;
console.log("userRecieve: ", userRecieve.toFixed(2));
alert(
  `In ${timeDeposite} months you will recieve ${userRecieve.toFixed(2)} money`
  );
  
  //  * What return
  console.log("%cЗадача 7. Что вернут значения", "color: orange; font-size: 16px");

const test = Boolean(22 && 0 && 3); // * (true && false && true) === false
console.log("22 && 0 && 3 = ", test);

const test2 = Boolean(22 || 0 || 3); // * первое значение сработает как true и дальше проверка не дойдет
console.log("22 || 0 || 3 = ", test2);

const test3 = Boolean((22 && 0) || 3);// * действие в скобках вернет false. 3 === true. (false || true) вернет true
console.log("22 && 0 || 3 = ", test3);