//Singleton => Object.create
// when creating objects from literal, singleton is never created

//object literals
const mySym = Symbol("key1"); // how to access it in the object

const jsUser = {
  name: "Rohan",
  "full name": "Rohan Sunwar",
  [mySym]: "myKey1", // reffering as symbol
  age: 22,
  location: "Bangalore",
  email: "Rohan@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]); // this is used when the key is already declared as a string in the object, where it can't be accessed using . operator

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// jsUser.email = "Rohan@google.com";
// console.log(jsUser.email);
// Object.freeze(jsUser); // freezes the whole objects, no further changes are propagated in the object

jsUser.email = "Aditi@gmail.com";
console.log(jsUser);

jsUser.greeting = function () {
  console.log(`${this.name} says Hello!`);
};

console.log(jsUser.greeting());
