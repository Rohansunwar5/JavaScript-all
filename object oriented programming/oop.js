const user = {
  username: "ROhan",
  login:8,
  signedIn: true,

  getUserDetails: function(){
    console.log(`Username : ${this.username} is the admin`);
  }
}
// console.log(user.getUserDetails());

// const promiseOne = new Promise();
// const date = new Date(); 

function User( username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount= loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  }

  return this;
}

const userOne = new User("Rohan", 2, true);
const userTwo = new User("Sunwar", 12, false);

console.log(userOne);
// console.log(userTwo);

// new obj creates a empty instance or obj 
// constructor function call happens because of new keyword
// this keyword injects the arguments into the function or instance