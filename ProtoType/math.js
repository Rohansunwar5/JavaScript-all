const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor); // {
  //   value: 3.141592653589793,
  //   writable: false,
  //   enumerable: false,       
  //   configurable: false      
  // }
// PI property of Math module here is hard coded and configured such that it can't be changed 
// So the question is can we make our objects like this??

// Yes, we can flag the chnages  in object properties using configurable attribute to true so they can be modified if needed

const chai  = {
  name :"ginger",
  price : 350,
  isAvailable : true,

  orderChai : function () {
    console.log("code faat gaya ");
  }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name" ));
// {
  //   value: 'ginger',
  //   writable: true,
  //   enumerable: true,
//   configurable: true
// }
// the question is does this object also have descriptive properties and if yes how can we get the properties
// for (let [key, value] of Object.entries(chai)) {
//   if(typeof value !== 'function'){
//     console.log(`${key} : ${value}`);
//   }
// }




Object.defineProperty(chai , "name", {
  // writable: false,
  enumerable: false, // this will avoid looping around the property 
})
console.log(Object.getOwnPropertyDescriptor(chai, "name" ));

// the answer is yes we can using the defineproperty 

for (let [key, value] of Object.entries(chai)) {
  if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
  }
}
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // cannot overwrite 