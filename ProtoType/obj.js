function mutltiplyby5(num) {
  return num * 5;
}

mutltiplyby5.power = 2;

console.log(mutltiplyby5(5));
console.log(mutltiplyby5.power);
console.log(mutltiplyby5.prototype);

function createUser(username, score){
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function(){
  this.score++; // current context
}

createUser.prototype.printMe = function() {
  console.log(`score is ${this.score}`);
}
const chai = new createUser("Chai", 24);
const tea = new createUser("tea", 200);

// chai.increment();
// chai.printMe();


/* 
here's what happens behind the scenes when the new keyword is used:

A new object is create: The new Keywords initiates the creation of new JavaScript Object.

A protoType is linked: the Newly create object getd linked to hte prototype property of the constructor function. this ,eams that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: the constuctoe function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the construtor.  Js assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, it it dosen't return a non-primitive value(object, array, function, etc.), the newly created object is returned 

*/