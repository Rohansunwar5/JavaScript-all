//function works with function keyword

function greet() {
  console.log("Good morning");
}

// greet() execution
// greet  reference

// function add(num1, num2) {
//   //parameters
//   return Number(num1 + num2);
// }
// console.log(add(1, 4)); //arguments

const cal = (num1, num2) => {
  let add = num1 + num2;
  return add;
};

console.log(cal(1, 2));

function userLoginMessage(username = "NPC") {
  if (!username) {
    return "Please enter a username";
  }
  return `${username} just logged in`;
}
// when you are not passsing an argument , it returns undefined
console.log(userLoginMessage());
