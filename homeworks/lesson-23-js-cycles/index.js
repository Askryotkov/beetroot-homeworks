// **Static**
const WEEKEND = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// **Functions**
// const binarySearch = (value, arrName) => {
//   let first = 0;
//   let last = arrName.length - 1;
//   let position = -1;
//   let found = false;
//   let middle = 0;

//   while(found = false && first <= last){
//     middle = Math.floor((first + last)/2);
//     const guessNum = confirm(`Your number < than ${middle}?`)
//   }
// }

// **Dynamic**

// * How old are you
document.getElementById("js-button-task-1").addEventListener("click", () => {
  console.log(
    "%cЗадача 1. Определить по возрасту зрелость пользователя",
    "color: orange; font-size: 16px"
  );

  const userAge = +prompt("How old are you?");

  if (isNaN(userAge)) {
    throw new Error("You wrote not a number");
  } else {
    switch (true) {
      case userAge < 0: {
        console.log("FakeAge: ", userAge);
        alert(`Come back after ${Math.abs(userAge)} years, when you will born`);
        break;
      }
      case userAge <= 11: {
        console.log("ChildAge: ", userAge);
        alert("Child");
        break;
      }
      case userAge < 18: {
        console.log("TeenagerAge: ", userAge);
        alert("Teenager");
        break;
      }
      case userAge < 60: {
        console.log("AdultAge: ", userAge);
        alert("Adult");
        break;
      }
      case userAge >= 60 && userAge < 120: {
        console.log("PensioneerAge: ", userAge);
        alert("Pensioneer");
        break;
      }
      case userAge >= 120: {
        console.log("Long-liverAge: ", userAge);
        alert("Humans don't live long like that. Who are you?");
        break;
      }
      default: {
        throw new Error("You didn't write your age");
      }
    }
  }
});

// * Numbers to symbols
document.getElementById("js-button-task-2").addEventListener("click", () => {
  console.log(
    "%cЗадача 2. Введи символ и я выведу число",
    "color: orange; font-size: 16px"
  );

  const userNum = +prompt(
    "Insert number from 1 - 9 and I will show you the symbol of it"
  );

  if (isNaN(userNum)) {
    throw new Error(
      "You use some letters or symbols,please insert only numbers from 1 - 9"
    );
  } else if (userNum > 9 || userNum <= 0) {
    throw new Error("Use only numbers from 1 - 9");
  } else {
    switch (userNum) {
      case 1: {
        console.log("userNum: ", userNum);
        alert("The symbol is '!'");
        break;
      }
      case 2: {
        console.log("userNum: ", userNum);
        alert("The symbol is '@'");
        break;
      }
      case 3: {
        console.log("userNum: ", userNum);
        alert("The symbol is '#'");
        break;
      }
      case 4: {
        console.log("userNum: ", userNum);
        alert("The symbol is '$'");
        break;
      }
      case 5: {
        console.log("userNum: ", userNum);
        alert("The symbol is '%'");
        break;
      }
      case 6: {
        console.log("userNum: ", userNum);
        alert("The symbol is '^'");
        break;
      }
      case 7: {
        console.log("userNum: ", userNum);
        alert("The symbol is '&'");
        break;
      }
      case 8: {
        console.log("userNum: ", userNum);
        alert("The symbol is '*'");
        break;
      }
      case 9: {
        console.log("userNum: ", userNum);
        alert("The symbol is '('");
        break;
      }
      default: {
        throw new Error("You wrote not only number");
      }
    }
  }
});

// * Sum of user numbers
document.getElementById("js-button-task-3").addEventListener("click", () => {
  console.log(
    "%cЗадача 3. Сумма всех чисел, в заданном пользователем лиапазоне",
    "color: orange; font-size: 16px"
  );

  const minUserNum = +prompt(
    "I will sum all numbers in yours inputted diapason. Inser min number"
  );
  const maxUserNum = +prompt("Inser max number");
  let arrNumbers = [];
  for (let i = minUserNum; i <= maxUserNum; i++) {
    let NumberItem = arrNumbers.push(i);
  }
  console.log("arrNumbers: ", arrNumbers);
  let sumNumbers = arrNumbers.reduce((prev, current) => {
    return prev + current;
  }, 0);

  console.log("sumNumbers: ", sumNumbers);
});

// * Greatest common divisor
document.getElementById("js-button-task-4").addEventListener("click", () => {
  console.log(
    "%cЗадача 4. Наибольший общий делитель двух чисел",
    "color: orange; font-size: 16px"
  );

  let firstNum = +prompt(
    "I can find the greatest common divisior(наибольший общий делитель), of 2 numbers. Put first number"
  );
  let secondNum = +prompt("Put second number");

  // Check if a or b is negative number value, transorm to the absolute value of number
  if (firstNum < 0) {
    firstNum = Math.abs(firstNum);
  }
  if (secondNum < 0) {
    secondNum = Math.abs(secondNum);
  }

  while (firstNum != 0 && secondNum != 0) {
    if (firstNum > secondNum) {
      firstNum = firstNum % secondNum;
      console.log("firstNum: ", firstNum);
    } else {
      secondNum = secondNum % firstNum;
      console.log("secondNum: ", secondNum);
    }
  }
  // GCD is greatest common divisor
  const result = firstNum + secondNum;
  console.log("resultGcd= ", result);
});

// * Discount
document.getElementById("js-button-task-5").addEventListener("click", () => {
  console.log(
    "%cЗадача 5. Сумма покупки и скидка",
    "color: orange; font-size: 16px"
  );

  const userBuy = +prompt("How much money did you spent?");

  if (isNaN(userBuy)) {
    throw new Error("You wrote not only number");
  } else {
    switch (!!userBuy) {
      case userBuy >= 200 && userBuy < 300: {
        const userDiscount = (userBuy / 100) * 3;
        console.log("Your discount is 3%: ", userDiscount.toFixed(2));
        const userPay = userBuy - userDiscount;
        console.log("Totla you need to pay: ", userPay.toFixed(2));
        // * или в одном выражении можно написать
        // const userPay = userBuy - (userBuy / 100 * 3);
        break;
      }
      case userBuy >= 300 && userBuy <= 500: {
        const userDiscount = (userBuy / 100) * 5;
        console.log("Your discount is 5%: ", userDiscount.toFixed(2));
        const userPay = userBuy - userDiscount;
        console.log("Totla you need to pay: ", userPay.toFixed(2));
        // * или в одном выражении можно написать
        // const userPay = userBuy - (userBuy / 100 * 5);
        break;
      }
      case userBuy >= 500: {
        const userDiscount = (userBuy / 100) * 7;
        console.log("Your discount is 7%: ", userDiscount.toFixed(2));
        const userPay = userBuy - userDiscount;
        console.log("Totla you need to pay: ", userPay.toFixed(2));
        // * или в одном выражении можно написать
        // const userPay = userBuy - (userBuy / 100 * 7);
        break;
      }
      default: {
        console.log(
          `You don't have a discount and you need to pay ${userBuy} money`
        );
      }
    }
  }
});

// * 10 numbers
document.getElementById("js-button-task-6").addEventListener("click", () => {
  console.log(
    "%cЗадача 6. Сумма покупки и скидка",
    "color: orange; font-size: 16px"
  );

  let inputUserNum = 0;
  let positiveNum = [];
  let negativeNum = [];
  let zeroNum = [];
  let evenNumber = [];
  let oddNumber = [];

  for (let i = 1; i <= 10; i++) {
    inputUserNum = +prompt("Enter number");
    console.log("inputUserNum: ", inputUserNum);

    if (isNaN(inputUserNum)) {
      throw new Error("You wrote not only number");
    } else {
      // Если число будет меньше нуля, то его запишет в массив отрицательных числе
      if (inputUserNum < 0) {
        negativeNum.push(inputUserNum);
        // И тут определит парное ли число
        if (inputUserNum % 2 === 0) {
          evenNumber.push(inputUserNum);
        } else {
          oddNumber.push(inputUserNum);
        }
        // Если число будет больше нуля, то его запишет в массив положительных чисел чисел
      } else if (inputUserNum > 0) {
        positiveNum.push(inputUserNum);
        // И тут определит парное ли число
        if (inputUserNum % 2 === 0) {
          evenNumber.push(inputUserNum);
        } else {
          oddNumber.push(inputUserNum);
        }
        // Тут будут записываться нули
      } else {
        if (inputUserNum == -0) {
          inputUserNum = Math.abs(inputUserNum);
          zeroNum.push(inputUserNum);
        } else {
          zeroNum.push(inputUserNum);
        }
      }
    }
  }

  // Вывод результатов в консоль
  console.log(
    `You inputed ${positiveNum.length} positive numbers it's ${
      positiveNum.length * 10
    } % from all inputed numbers: `,
    positiveNum
  );
  console.log(
    `You inputed ${negativeNum.length} negative numbers it's ${
      negativeNum.length * 10
    } % from all inputed numbers: `,
    negativeNum
  );
  console.log(
    `You inputed ${zeroNum.length} zero numbers it's ${
      zeroNum.length * 10
    } % from all inputed numbers: `,
    zeroNum
  );
  console.log(
    `You inputed ${evenNumber.length} even numbers it's ${
      evenNumber.length * 10
    } % from all inputed numbers: `,
    evenNumber
  );
  console.log(
    `You inputed ${oddNumber.length} odd numbers it's ${
      oddNumber.length * 10
    } % from all inputed numbers: `,
    oddNumber
  );
});

// * Days of week
document.getElementById("js-button-task-7").addEventListener("click", () => {
  console.log("%cЗадача 7. Дни недели", "color: orange; font-size: 16px");

  let wantNext = true;

  while (wantNext) {
    for (i = 0; i < 7; i++) {
      showDay = WEEKEND[i];
      console.log("showDay: ", showDay);
      wantNext = confirm(
        `*${showDay}* Do you whant to see a next day of the week?`
      );
      if (wantNext == false) {
        i = 8;
      }
    }
  }
});

// * Multiplication table
document.getElementById("js-button-task-8").addEventListener("click", () => {
  console.log(
    "%cЗадача 8. Таблица умножения",
    "color: orange; font-size: 16px"
  );

  let table = "";
  for (x = 1; x <= 9; x++) {
    for (y = 1; y <= 9; y++) {
      table += " " + x * y;
      if (x * y < 10) {
        table += " ";
      }
    }
    console.log(table);
    table = "";
  }
});
