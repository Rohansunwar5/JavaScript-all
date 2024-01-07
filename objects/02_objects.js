// const tinderUser = new Object(); // singleton object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
const regularUser = {
  email: "Something@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Rohan",
      lastname: "sunwar",
    },
  },
};

//? syntax is used when we are not sure when the api value is present or not
// console.log(regularUser.fullname?.userfullname?.lastname);

// combining objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { ...obj1, ...obj2 }; // using spread operator
// const obj3 = Object.assign({}, obj1, obj2); // using assign function
// while using assign function to concat the objects, we use { } as the target objects and then comes the objects we want to combine (obj1,obj2)

// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "h@gmail.com",
  },
  {
    id: 3,
    email: "h@gmail.com",
  },
];

// console.log(users[2].id);
// console.log(tinderUser);

// for access of all the keys
console.log(Object.keys(tinderUser));

// for access of all the values
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

// hasOwnProperty checks wether the property named in the object os present or not
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
