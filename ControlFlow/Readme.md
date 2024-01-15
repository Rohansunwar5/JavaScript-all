== is loose checking, it dosen't check for data type 

=== check for both value and data type 

if(true) {
  // executable block
}
if(false){
  // not execute
}

// falsy values 

false, 0, -0, BigInt 0n, "" , null, undefined , NaN

//truthy values 

"0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0) {
  console.log("Arrray id empty");
}

const emptyObj = {}

if(object.keys(emptyObj).length === 0) {
  console.log(Object is empty)
}

//Nullish Coalescing Operator (??) : null undefined
why is it used? so wometimes what happens the data that it baing sent from the database sometimes sends two values with first value baing the null, in order to deal with that null or undefined we use this operator
let val1;
<!-- val1 = 5 ?? 10 -->
val2 = null ?? 10
val2 = undefined ?? 10

console.log(val1) //prints 5 
console.log(val2) //prints 10 
console.log(val2) //prints 10

NOTE: NCP(??) and ternairy operator are two different things

//terniary 

condition ? true : false;

const iceTea = 100

iceTea >= 80 ? console.log("Less than 80")" console.log("More than 80");