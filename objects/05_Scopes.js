function one() {
  const username = "Rohan";
  function two() {
    const website = "Youtube";
    console.log(username);
  }
  console.log(website); // not accessable

  two();
}

// one();

// if (true) {
//   const username = "Rohan";
//   if (username === "Rohan") {
//     const website = " Youtube";
//     console.log(username + website);
//   }
//   // console.log(website); //not accsessable
// }
// console.log(username); //not accessable

//++++++++++++++++++++interesting ++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

addTwo(5);
// if the function is declared using variable name it can be accessed only after the initialzation of the function, in case of function that have been decalred using the function keyword, they can be accessed from anywhere within the program code
const addTwo = function (num) {
  // variabels in j s are very powerful, they can hold any data type and in case of holding onto a function the name can be given as expression
  return num + 2;
};
