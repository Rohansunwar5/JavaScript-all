function calculateCartPrice(...num1) {
  let sum = 0;
  for (let i = 0; i < num1.length; i++) {
    sum += num1[i];
  }
  return sum;
}
console.log(calculateCartPrice(200, 330, 220)); // returns an array

//... operators are called with both spread and rest

const user = {
  name: "ROhan",
  price: 1222,
};
//passing object
function handleObject(anyobject) {
  console.log(`userName is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({
  name: "Aditi",
  price: "Infinity",
});

const newArr = [20, 32, 121, 42];
//passing arr
function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(newArr));
console.log(returnSecondValue([12, 232, 421, 1]));
