// for loops
// let arr = [1, 3, 4, 5, 1, 2, 54];
// let element;
// for (let i = 1; i <= arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is here");
//   }
//   console.log(element);
// }

// array loop

let myArray = ["Rohan", "aditi", "superman"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(`I like ${element}`);
}

//break and continue

// break end the whole loops taking it out of the control flow
// continue just skips the current itteration and begins the other itreation
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    // break;
    continue;
  }
  const value = i;
  console.log(value);
}
