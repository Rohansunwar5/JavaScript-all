// let myName = "Rohan    "

// console.log(myName.truelength);

let array = ["hulk", "thor", "spiderman"];

let pow = {
  thor: "hammer",
  spiderman: "sling",
  hulk: "smash",

  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }
}

//accessing top level heirarchy and accessing the property 
Object.prototype.rohan = function () {
  console.log(`Rohan is present in all objects `);
}
Array.prototype.heyrohan = function () {
  console.log(`Rohan in the arr `);
}

// pow.rohan();
// array.heyrohan();
// pow.heyrohan(); //since the prototype is only injected to the array, other cant access it 

//Inheritence 
const User = {
  name: "chai",
  email: "example@gmail.com"
}
const Teacher = {
  makeVideo : true
}
const TeachingSupport = { 
  isAvailable: false
}


const TASupport = {
  makeAssignment: "Js Assignment",
  fullTime: true,
  __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax for inheritence(who will inherit, who will give away)

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength();
"ROhan".trueLength();
"WemakeDevs".trueLength();