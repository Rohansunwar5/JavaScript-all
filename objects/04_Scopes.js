// var c = 300;
//global scope
let a = 300;
if (true) {
  //block scope
  let a = 20;
  const b = 10;
  var c = 40;
  console.log("Inner : ", a);
} // scope of the operation

// var can be accessed outside block of scope, i.e why car is not recommended to be used, it overwrite the previous variables
console.log(a);
// console.log(b);
// console.log(c);
