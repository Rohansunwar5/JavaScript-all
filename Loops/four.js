// to itreate through object keys and values we can use for in loop

const myobj = {
  name: "John",
  age: 23,
  city: "New York",
};
// forin loop
for (const key in myobj) {
  // console.log(`${key} is ${myobj[key]}`);
}
// object[key] => for accessing the value of the key

const programming = ["js", "py", "cpp", "ts", "jsx"];

for (const key in programming) {
  console.log(key); //prints keys index
  console.log(programming[key]); // prints values
}
