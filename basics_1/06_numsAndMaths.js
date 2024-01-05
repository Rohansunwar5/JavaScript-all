const score = 400;
// console.log(score);
const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length); // converts int to string
// console.log(balance.toFixed(2)); // decimal numbers

const otherNumber = 223.8322;
// console.log(otherNumber.toPrecision(3)); // gives a precision value

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN")); // seperated by commas

//-------------------Maths----------------------//
// console.log(Math);
// console.log(Math.abs(-4)); // changes number to posistive

// console.log(Math.round(4.8)); //5
// console.log(Math.ceil(4.3)); //5
// console.log(Math.floor(4.3)); //4

// console.log(Math.min(4, 5, 6, 7, 2, 3, 0));
// console.log(Math.max(4, 5, 6, 7, 2, 3, 0));
const res = Math.floor(Math.random() * 10 + 1);
// console.log(res); // value between 0 and 1

const min = 10;
const max = 20;

//max-min because if range from 1 to 10 and + 1 to avoid zero
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
