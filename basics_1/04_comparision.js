console.log(null > 0);
console.log(null === 0);
console.log(null >= 0);

// null is considered to be less than any value except for NaN, which is considered greater than
// comarisions convert null to a number, treating it as a 0. that's whu null >= 0 is true and null > 0 is false

// === is strict check

console.log("2" === 2); // false, cause the strict check returns false if it is not of the same data type
console.log("2" == 2); // true
