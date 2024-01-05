const name = "Rohan";
const repCount = 40;

// console.log(name + repCount + "Value");
// modern may of concatinationg variables in string with (``) backticks is called string interpolation
// advantage => can do many things in one go
console.log(` My name is ${name}, and my repo Count is ${repCount}`);

const gameName = new String("Rohan");

// while using new String to decalre a string it also gives out key value pairs

// the difference is when the string is initialized with new keyword js gives the facility to use different methods than the strings declared normally , its an instance of string object

//While both primitiveString and stringObject may seem similar in some contexts, they have key differences. The primitive string (primitiveString) is a primitive data type, while the string object (stringObject) is an instance of the String object.
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(2));

const newString = gameName.substring(0, 4); // gives out the values in between from indexes provides
console.log(newString);

const anotherString = gameName.slice(-8, 2);
console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne.trim()); // removes all leading and trailing spaces

const url = "https://localhost.com/rohan%20sunwar";

console.log(url.replace("%20", "-"));

console.log(url.includes("local"));

console.log(url.split("/"));
