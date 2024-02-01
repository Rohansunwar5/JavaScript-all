class User {
  constructor (email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value){
    this._email = value
  }
  // getter and setter needs to be written together 
  get password () {
    return `${this._password}Rohan`
  }
  set password (value) {
    this._password = value.toUpperCase();
  }
}

const rohan = new User("Rohan@example.com", "abc");
console.log(rohan.email);