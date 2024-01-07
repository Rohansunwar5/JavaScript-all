const marvelHeros = ["Hulk", "thor", "Spiderman"];
const dc = ["Superman", "flash", "Batman"];

// marvelHeros.push(dc);
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);
//push function pushes element on the existing array

// const h = marvelHeros.concat(dc);
// console.log(h);

//(...) => spread operator is used to seperate all the elements within the array, spread is more recommended then the concat function
const all_new_heros = [...dc, ...marvelHeros];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// returns new array with all subarray elements concatenated into single
const real_another_array = another_array.flat(Infinity);
console.log("real_another_array: ", real_another_array);

console.log(Array.isArray("Rohan")); // false
console.log(Array.from("Rohan")); // ['r', 'o', 'h' , 'a', 'n' ]
console.log(Array.from({ name: "Rohan" })); // intresting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

// of => Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3));
