//ES6

// class User {
//   constructor(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword(){
//     return `${this.password}abc`
//   }
//  changeUpperCase(){
//   return `${this.username.toUpperCase()}`
//  }
// }

// const chai = new User("rohan",  "rohan@gmail.com", "12345");
// console.log(chai.encryptPassword());
// console.log(chai.changeUpperCase());


//behind the scenes 

function User (name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function (){
  return `Encrypted ${this.password}`;
}
User.prototype.toUpperCase = function (){
  return `${this.name.toUpperCase()}`
}

const tea = new User("tea", "ea@gamil.com", "123")

console.log(tea.encryptPassword());
console.log(tea.toUpperCase());