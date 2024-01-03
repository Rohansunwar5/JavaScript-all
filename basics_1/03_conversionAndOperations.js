// let score = "22.23ab";
// let score = null;
// console.log(typeof score);

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
//Notes:
// '33' => 33
// '33abc' => NaN
// true => 1; false => 0

// let isLoggedIn = "rohan";

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(isLoggedIn);
// console.log(booleanIsLoggedIn);
//Notes :
// 1=> true ; 0 => false
// ''=> false
// 'Rohan' => true

// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(typeof stringNumber);

// ************Operations**************

// let value = 3;
// let NegValue = -value; // -3
// let dif = value + NegValue; // 0
// console.log(NegValue);
// console.log(value);
// console.log(dif);

// let str1 = "rohan";
// let str2 = "hello";

// let str3 = str1 + str2;
// console.log(str3);

// in javaScript the executions follows line by line and across horizontly i.e why console.log(1+1+ "2") => 22 , since the first two are integers itself they get calculated at first, only after that calculted with string , another example is console.log("2" + 1 + 1) => 211 since the first value itself is the string the whole remaining value explicitly gets changed to string by js.

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log("1" + (2 + 2)); //14

// console.log(+true);
// console.log(+"");

// let num1, num2, num3;

// num1 = num2 = num3 = 2 + 2;

// let gameCounter = 100;
// gameCounter++;
// ++gameCounter;

// for prefix and post fix => mdn.com

// while using prefix the value is already incremented and returned before it performs increment

// while using postfix the value increments and returns the value after incrementing

// console.log(gameCounter);

let x = 3;
let y = x++;

console.log(x);
console.log(y);

let a = 3;
let b = ++a;

console.log(a);
console.log(b);
