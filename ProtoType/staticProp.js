class User {
  constructor(name) {
    this.name = name;
  }
  logMe(){
    console.log(`My Name is ${this.name}`);
  }
  static createId(){
    return `123`
  }//the static functions cannot be inherited to the child classes 
}

// const rohan = new User("Rohan");
// console.log(rohan.createId());

class Teacher  extends User{
  constructor(name, subject){
    super(name);
    this.subject = subject;
  }
}
const teacher = new Teacher ("Rohan", "BCA");

console.log(teacher.createId()); // this will throw error because of function being a static function of the parent class 