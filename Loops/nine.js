const myNums = [1, 2, 3, 4, 5];

let initialValue = 0;

const sum = myNums.reduce((accumulator, currentValue) => {
  // console.log(`acc: ${accumulator} and curr: ${currentValue}`);
  return accumulator + currentValue;
}, initialValue);
//reduce function takes two agrguments accumulator, current value and the intial value. Initial value is the value which is first assigned to the accumulator, in the above example the initialvalue is 0 so accumulator is 0 at the begining, current value is the value through which we are itreating through, for example at fist itreation the caurrent value is 1 so we are returning accumulator + current value which is 0 + 1 , now during next itreation what happens is we accumulator is assigned the new value of the the previous operation ,

// console.log(sum);

const shoppingCart = [
  { name: "apple", price: 400 },
  { name: "banana", price: 600 },
  { name: "orange", price: 800 },
  { name: "avacado", price: 900 },
];
const total = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(total);
