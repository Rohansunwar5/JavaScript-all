01 => variables are a storage that are created in the memory to store the data, console.table([...]) => helps in printing all the variables or data in one go

var is not used because of the nowadays because, of the issue in block scope and functional scope and  we use let 

when a function or variable is declared and left without any input or data then, they are stated as undefined in the compiler 

02 => for javaScript standard documentation we can use ecma script 
https://www.ecmascript.org/docs-dev/

03 => We can change check the variable data type by using the 'typeof' function inside the console, for data type conversion of the variable, we use (Number, String) function within the variable [let valueInNumber = Number(score);]

Note : in javaScript the executions follows line by line and across horizontly i.e why console.log(1+1+ "2") => 22 , since the first two are integers itself they get calculated at first, only after that calculted with string , another example is console.log("2" + 1 + 1) => 211 since the first value itself is the string the whole remaining value explicitly gets changed to string by js. 

paraenthsis is important in using operations the right way 

 for prefix and post fix => mdn.com

while using prefix the value is already incremented and returned before it performs increment

while using postfix the value increments and returns the value after incrementing

04 => function objects
 Primitive
 7 types: string, Number, Boolean , null, undefined, Symbol, BigInt



 is JS dynamically typed or statically => dynamically typed, as it performs checks on run time

 in Non Primitive the variables points to the heap memory, when the variable is refrencing to the data in the heap, and another variable also takes the refernece of the same data in the heap, so in that case if the data is changed by any of the two , then the data in the heap also changes resulting in the overall change of the data

 stack (Primitive), heap(Non-primitive)
 in stack the the variable only takes a copy of another datatype , so even if the value is changed from where the data is being refrenced , the original remains the same

 05=> strings : while using new String to decalre a string it also gives out key value pairs

// the difference is when the string is initialized with new keyword js gives the facility to use different methods than the strings declared normally , its an instance of string object

//While both primitiveString and stringObject may seem similar in some contexts, they have key differences. The primitive string (primitiveString) is a primitive data type, while the string object (stringObject) is an instance of the String object.