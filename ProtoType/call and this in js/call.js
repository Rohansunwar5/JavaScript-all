function SetUsername(username) {
  //complex db calls 
  this.username = username 
  console.log("called");
}

function CreateUser(username, email, password){
  // SetUsername(username); //in js this is being on execution context and also being called but the variables inside it are not getting hold, this is just the reference of the function i.e why we will not get the value. in order to hold the reference we use call function 
  SetUsername.call(this, username); // pass this to get current context
  this.email = email 
  this.password = password

}

const chai = new CreateUser("chai", "chai@fb.com", "123");
console.log(chai);