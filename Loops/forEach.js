const coding = ["js", "java", "python", "cpp", "ruby"];
//for each uses callback function
//NOTE: callback function does not support function name
// coding.forEach(function (element) {
//   console.log(element);
// });

// coding.forEach((element) => {
//   console.log(element);
// });

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe); //passing a function

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "Javasxript",
    languageFileName: "js",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
  {
    languageName: "C++",
    languageFileName: "cpp",
  },
];

//accessing object properties using for each
myCoding.forEach((item) => {
  console.log(item.languageName);
});
