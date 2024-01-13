const user = {
  name: "Rohan",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.name} ,welcome to website`);
    console.log(this);
  },
};
// this => reffers to the current context
// the global object in the brower is the window
// user.welcomeMessage();
// user.name = "Aditi";
// user.welcomeMessage();

// console.log(this);

// function tea() {
//   console.log(this);
// }

// tea(); // it will refer to the global object i.e., window
// this => will work only in context of the objects not the functions

// const addtwo = (num1, num2) => {
//   return num1 + num2;
// };
// // tea();
// console.log(addtwo(3, 2));

// in arrow function if we have curly braces then we have to use return in case of paranthesis we dont need to use return
// if{} => return , if() => no need for return;
// implicit return in arrow function
const multiplyTwoNumbers = (a, b) => a * b;

console.log(multiplyTwoNumbers(2, 2));
// in order to return object we need to use curly braces
const arrow = () => ({ user: "ROhan" });
console.log(arrow());
