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

//------------------------------------------------
//stack (Primitive), heap(Non-primitive)

// in stack the the variable only takes a copy of another datatype , so even if the value is changed from where the data is being refrenced , the original remains the same

let myName = "Rohan";

let anotherName = myName;
anotherName = "sunwar";

console.log(myName);
console.log(anotherName);

// in Non Primitive the variables points to the heap memory, when the variable is refrencing to the data in the heap, and another variable also takes the refernece of the same data in the heap, so in that case if the data is changed by any of the two , then the data in the heap also changes resulting in the overall change of the data
let user = {
  email: "user@gmail.com",
  upi: "xyz@Payme",
};

let userTwo = user;
userTwo.email = "test@gmail.com";

console.log(user.email);
console.log(userTwo.email);
