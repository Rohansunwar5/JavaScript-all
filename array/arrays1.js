//arrays

const myArr = [0, 2, 3, 4, 5]; //two prototypes
const myHeros = ["Hulk", "Robin", "Rohan"];

const myArr2 = new Array(1, 2, 3, 4);

// js arrays are resizeable
// zero based indexing
// in Js arrays : copy operations create shallow copies
// shallow copy => properties are copied with same referance
// console.log(myArr[1]);

// Array Methods

// myArr.push(6);
// myArr.pop();

// Shift and unshift :

// myArr.unshift(23); //shifts the value to the first position
// myArr.shift(); // removes the element of first

//Include and indexof:

// console.log(myArr.includes(9)); // checks weather the element is present or not
// console.log(myArr.indexOf(5));

//Join : changes array to string

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);

console.log("C ", myArr);
console.log(myn2);

// slice operates on the copy of the array and returns the value,
// splice operates on the original value of the array and changes the whole array, splice return the elements from index n to index n and manipulate the original array , hence when we check the original array the spliced elemets are not present
