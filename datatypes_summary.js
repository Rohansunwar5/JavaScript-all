// Primitive
// 7 types: string, Number, Boolean , null, undefined, Symbol, BigInt

// is JS dynamically typed or statically => dynamically typed, as it performs checks on run time
const score = 100;

const isLoggedIN = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherID = Symbol("123");
// symbol returns unique id
console.log(id === anotherID);

const bigNumber = 1243242542956821876n;

//Reference (Non Primitive)
//Array, Objects, Functions

const heros = ["ironman", "thor", "hulk"];
let myobj = {
  name: "Rohan",
  age: 22,
};

const myFunction = () => {
  console.log("hello World");
};

console.log(typeof myobj);
