const User = {
  _email: "rohan@gmail.com",
  _password: 'abc',

  get email () { //process overwrite 
    return  this._email.toUpperCase();
  },
  set email (value) {
    this._email = value;
  }
}
// we can use factory function
const tea = Object.create(User);

console.log(tea.email);