// //consuming and creating promises
// //takes a callback
// const promiseOne = new Promise(function(resolve, reject){
//   // do an async task 
//   //db calls, crytography, network 
//   setTimeout(function () {
//     console.log('Asunc task is complete');
//     resolve();
//   },5000) 
// });

// //consuming promise 
// // .then() => resolve (a callback function inside .then)
// // resolve connects with .then
// promiseOne.then(function(){
//   console.log("Promise consume");
// })

// //if promises are not stored in veriable , not problem, we can directly append .then function with the new Promise 
// new Promise ((resolve,reject) => {
//   setTimeout(() => {
//     console.log("async task 2");
//     resolve();
//   } , 8000)
// }).then(() => {
//   console.log("aync 2 resolved");
// })

// const PromiseThree  = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({username: "Rohan", email: "Rohan@chai.com"})
//   },3000)
// })

// // we can even pass the parameter to the .then function with resolve function

// PromiseThree.then((user) => {
//   console.log(user);
// })

// const PromiseFour = new Promise ( (resolve, reject ) =>{
//   setTimeout( () => {
//     let error = false;
//     if(!error){
//       resolve ({username: "ROhan", password: "123"});
//     } else {
//       reject ("Error in authentication");
//     }
// },4000)
// })

// catch executes if it returns with reject from hte promise
// finally acts like a default and almost executes everytimr
// PromiseFour
// .then((user) => {
//   console.log(user); // user has all the arguments that has been passed
//   return user.username
//   //chaining 
// })
// .then((username) => {
//   console.log(username);
// })
// .catch((err) => {
//   console.log(err);
// })
// .finally(() => {
//   console.log('The promise is either resolved or rejected ');
// })

const promiseFive = new Promise ((resolve, reject) => {
  setTimeout( () => {
    let error = true;
    if(!error){
      resolve ({username: "JavaScript", password: "123"});
    } else {
      reject ("ERROR: JS went wrong");
    }
},4000)
})

// another way to consume the promise obj is using async await 
// to handle error we need to use try catch bloack inside the async function 

const consumePromiseFive = async ()  =>{
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
      console.log(error);
  }
}
consumePromiseFive();

// const getAllUsers = async () => {
//   try {
//     const response = await fetch('https://api.github.com/users/Rohansunwar5')
//     // console.log(response);
//     // for the conversion of response into json also takes some time thats why we use await for conversion also
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//       console.log("E " , error);
//   }
// }
// getAllUsers();

// fetch('https://api.github.com/users/Rohansunwar5')
// .then((response) => {
//   return response.json();
// })
// .then((data) => { // chaining with upper then response 
//   console.log(data);
// })
// .catch((err) => {
//   console.log(err);
// })

const dummydata = async() => {
  try {
    let data = await fetch('https://dummyjson.com/products/1');
    let response = await data.json();
    console.log(response);
    
  } catch (error) {
    console.log(error);
  }
}

dummydata();

// fetch('https://dummyjson.com/products/1')
// .then((res) => {
//   return res.json();
// })
// .then((whateverTheVariabeName) => {
//   console.log(whateverTheVariabeName);
// })
// .catch((error) => {
//   console.log(`Error: ${error}`);
// }) 