// for of

// ["", "", ""]
// [({}, {}, {})];

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }

// const greeting = "Hello World";
// for (const greet of greeting) {
//   console.log(`Each char is ${greet}`);
// }

// maps

const map = new Map();
map.set("IN", "India");
map.set("EN", "England");

console.log(map);

for (const [key, value] of map) {
  // we can itreate in a de structure way like this
  console.log(key, ":=", value);
  // console.log(value);
}

const myobj = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myobj) {
//   console.log(`${key}: ${value}`);
// } we cannot itreate through object like this
