// // * How old are you
// const userAge = +prompt("How old are you?");

// isNaN(userAge);

// if (isNaN(userAge)) {
//   throw new Error("You wrote not a number");
// } else {
//   switch (true) {
//     case userAge < 12: {
//       console.log("userAge: ", userAge);
//       alert("Child");
//       break;
//     }
//     case userAge < 18: {
//       console.log("userAge: ", userAge);
//       alert("Teenager");
//       break;
//     }
//     case userAge < 60: {
//       console.log("userAge: ", userAge);
//       alert("Adult");
//       break;
//     }
//     case userAge >= 60: {
//       console.log("userAge: ", userAge);
//       alert("Pensioneer");
//       break;
//     }
//     default: {
//       throw new Error("You didn't write your age");
//     }
//   }
// }

// // * Numbers to symbols
// const userNum = +prompt(
//   "Insert number from 1 - 9 and I will show you the symbol of it"
// );

// isNaN(userNum);

// if (isNaN(userNum)) {
//   throw new Error("You use some letters or symbols,please insert only numbers from 1 - 9");
// } else if (userNum > 9) {
//   throw new Error("Use only numbers from 1 - 9");
// } else{
//   switch (userNum) {
//     case 1: {
//       console.log("userNum: ", userNum);
//       alert("The symbol is '!'");
//       break;
//     }
//     case 2: {
//       console.log("userNum: ", userNum);
//       alert("The symbol is '@'");
//       break;
//     }
//     case 3: {
//       console.log("userNum: ", userNum);
//       alert("The symbol is '#'");
//       break;
//     }
//     case 4: {
//       console.log("userNum: ", userNum);
//       alert("The symbol is '$'");
//       break;
//     }
//     case 5: {
//       console.log("userNum: ", userNum);
//       alert("The symbol is '%'");
//       break;
//     }
//     case 6: {
//       console.log("userNum: ", userNum);
//       alert("The symbol is '^'");
//       break;
//     }
//     case 7: {
//       console.log("userNum: ", userNum);
//       alert("The symbol is '&'");
//       break;
//     }
//     case 8: {
//       console.log("userNum: ", userNum);
//       alert("The symbol is '*'");
//       break;
//     }
//     case 9: {
//       console.log("userNum: ", userNum);
//       alert("The symbol is '('");
//       break;
//     }
//     default: {
//       throw new Error("You didn't write a number");
//     }
//   }
// }

// // * Sum of user numbers

// const minUserNum = +prompt("Inser min number");
// const maxUserNum = +prompt("Inser max number");

// let arrNumbers = [];

// for (let i = minUserNum; i <= maxUserNum; i++) {
//   console.log("i: ", i);
//   let NumberItem = arrNumbers.push(i);
//   console.log("NumberItem: ", NumberItem);
// }
// console.log("arrNumbers: ", arrNumbers);

// let sumNumbers = arrNumbers.reduce((prev, item) => {
//   return prev + item;
// }, 0);

// console.log("sumNumbers: ", sumNumbers);

// // * Greatest common divisor
// let a = +prompt("I can find the greatest common divisior(наибольший общий делитель), of 2 numbers. Put first number");
// let b = +prompt("Put second number");

// // Check if a or b is negative number value, transorm to the absolute value of number
// if (a < 0) {
//   a = Math.abs(a);
// }
// if (b < 0) {
//   b = Math.abs(b);
// }

// while (a != 0 && b != 0) {
//   if (a > b) {
//     a = a % b;
//     console.log("a: ", a);
//   } else {
//     b = b % a;
//     console.log("b: ", b);
//   }
// }
// // GCD is greatest common divisor
// const resultGcd = a + b;
// console.log("resultGcd= ", resultGcd);

// // * Greatest common divisor
// let a = +prompt("I can find the greatest common divisior(наибольший общий делитель), of 4 numbers. Put first number");
// let b = +prompt("Put second number");
// let c = +prompt("Put third number");
// let d = +prompt("Put fourth number");

// // Check if a or b is negative number value, transorm to the absolute value of number
// if (a < 0) {
//   a = Math.abs(a);
// }
// if (b < 0) {
//   b = Math.abs(b);
// }
// if (c < 0) {
//   c = Math.abs(b);
// }
// if (d < 0) {
//   d = Math.abs(b);
// }

// while (a !== 0 && b !== 0) {
//   if (a > b) {
//     a = a % b;
//     console.log("a: ", a);
//   } else {
//     b = b % a;
//     console.log("b: ", b);
//   }
// }
// // GCD is greatest common divisor
// let resultGcd = a + b;
// console.log("resultGcd= ", resultGcd);

// while (c !== 0 && resultGcd !== 0) {
//   if (c > resultGcd) {
//     c = c % resultGcd;
//     console.log('c= ', c);
//   } else {
//     resultGcd = resultGcd % c;
//     console.log('resultGcdThirdNumber: ', resultGcd);
//   }
// }
// let resultGcd2 = resultGcd + c;
// console.log('resultGcd2= ', resultGcd2);

// while (d !== 0 && resultGcd2 !== 0) {
//   if (d > resultGcd2) {
//     d = d % resultGcd2;
//     console.log('d= ', d);
//   } else {
//     resultGcd2 = resultGcd2 % d;
//     console.log('resultGcdFourthNumber= ', resultGcd2);
//   }
// }
// const resultGcd3 = resultGcd2 + d;
// console.log('resultGcd3: ', resultGcd3);
// alert(`Result = ${resultGcd3}`)

// // * Reverse number

// let userNum = +prompt('Write a number');
// let reversedNum = 0;

// for (; userNum; userNum = Math.floor(userNum / 10)){
//   console.log('userNum - last number: ', userNum);
//   reversedNum *= 10; // тоже, что написать reversedNum = reversedNum * 10.
//   console.log('reversedNum: ', reversedNum);
//   reversedNum += userNum % 10;
//   console.log('Reversed number: ', reversedNum);
// }
// console.log('Result=  ', reversedNum);

// // * Palindrom true || false - not finished
// let inputNum = +prompt('Input number, and I will answer this number is palindrome or not')
// let palindrome = 0;

// for(; inputNum; inputNum = Math.floor(inputNum / 10)) {
//   palindrome *= 10;
//   console.log('palindrom before: ', palindrome);
//   palindrome += inputNum % 10;
//   console.log('palindrom after: ', palindrome);
// }

// if(resultNumber = inputNum){
//   console.log(`Yes ${inputNum} it's palindome`)
// } else {
//   console.log(`No ${inputNum} it's not a palindome`)
// }

// // * Discount
// const userBuy = +prompt('How much money did you spent?')

// if (userBuy >=200 && userBuy < 300) {
//   const userDiscount = userBuy / 100 * 3;
//   console.log('Your discount is 3%: ', userDiscount.toFixed(2));
//   const userPay = userBuy - userDiscount;
//   console.log('Totla you need to pay: ', userPay.toFixed(2));
//   // * или в одном выражении можно написать
//   // const userPay = userBuy - (userBuy / 100 * 3);
// } else if (userBuy > 300 && userBuy < 500) {
//   const userDiscount = userBuy / 100 * 5;
//   console.log('Your discount is 5%: ', userDiscount.toFixed(2));
//   const userPay = userBuy - userDiscount;
//   console.log('Totla you need to pay: ', userPay.toFixed(2));
//   // * или в одном выражении можно написать
//   // const userPay = userBuy - (userBuy / 100 * 5);
// } else if(userBuy > 500) {
//   const userDiscount = userBuy / 100 * 7;
//   console.log('Your discount is 7%: ', userDiscount.toFixed(2));
//   const userPay = userBuy - userDiscount;
//   console.log('Totla you need to pay: ', userPay.toFixed(2));
//   // * или в одном выражении можно написать
//   // const userPay = userBuy - (userBuy / 100 * 7);
// }

// // * 10 numbers
// let inputUserNum = 0;
// let positiveNum = [];
// let negativeNum = [];
// let zeroNum = [];
// let evenNumber = [];
// let oddNumber = [];

// for (let i = 1; i <= 10; i++) {
//   inputUserNum = +prompt("Enter number");
//   console.log("inputUserNum: ", inputUserNum);
//   // Если число будет меньше нуля, то его запишет в массив отрицательных числе
//   if (inputUserNum < 0) {
//     negativeNum.push(inputUserNum);
//     // И тут определит парное ли число
//     if (inputUserNum % 2 === 0) {
//       evenNumber.push(inputUserNum);
//     } else {
//       oddNumber.push(inputUserNum);
//     }
//     // Если число будет больше нуля, то его запишет в массив положительных чисел чисел
//   } else if (inputUserNum > 0) {
//     positiveNum.push(inputUserNum);
//     // И тут определит парное ли число
//     if (inputUserNum % 2 === 0) {
//       evenNumber.push(inputUserNum);
//     } else {
//       oddNumber.push(inputUserNum);
//     }
//     // Тут будут записываться нули
//   } else {
//     if (zeroNum < 0) {
//       zeroNum = Math.abs(zeroNum);
//       zeroNum.push(inputUserNum);
//     } else {
//       zeroNum.push(inputUserNum);
//     }
//   }
// }

// // Вывод результатов в консоль
// console.log(
//   `You inputed ${positiveNum.length} positive numbers it's ${
//     positiveNum.length * 10
//   } % from all inputed numbers: `,
//   positiveNum
// );
// console.log(
//   `You inputed ${negativeNum.length} negative numbers it's ${
//     negativeNum.length * 10
//   } % from all inputed numbers: `,
//   negativeNum
// );
// console.log(
//   `You inputed ${zeroNum.length} zero numbers it's ${
//     zeroNum.length * 10
//   } % from all inputed numbers: `,
//   zeroNum
// );
// console.log(
//   `You inputed ${evenNumber.length} even numbers it's ${
//     evenNumber.length * 10
//   } % from all inputed numbers: `,
//   evenNumber
// );
// console.log(
//   `You inputed ${oddNumber.length} odd numbers it's ${
//     oddNumber.length * 10
//   } % from all inputed numbers: `,
//   oddNumber
// );
