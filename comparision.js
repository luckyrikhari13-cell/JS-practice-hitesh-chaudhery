console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 1); // true
console.log(2 <= 1); // false  
console.log(2 == 1); // false
console.log(2 != 1); // true


console.log("2" > 1); // true
//because "2" is converted to a number before comparison
//but it is not recommended to use this type of comparison because it can lead to unexpected results.
//because the result are not always predictable, especially when comparing different data types. It's better to use strict equality (===) and strict inequality (!==) operators to avoid type coercion issues.

console.log(null > 0); // false;
//because null is converted to 0 before comparison, but 0 is not greater than 0.
console.log(null == 0); // false;
//because null is only equal to undefined, and not equal to any other value, including 0.
console.log(null >= 0); // true;
//because null is converted to 0 before comparison, so the result is true.


console.log(undefined == 0); // false;
//because undefined is only equal to null, and not equal to any other value, including 0.
console.log(undefined > 0); // false;
//because undefined is converted to NaN before comparison, and NaN is not greater than any number.
console.log(undefined < 0); // false;

//comparaing undefined with any number will always return false, because undefined is not a number and cannot be compared to numbers in a meaningful way.


// strict check ===
// strict equality operator (===) checks for both value and datatype equality, while the loose equality operator (==) only checks for value equality and performs type coercion if necessary.
console.log("2" === 2); // false
console.log(2 === 2); // true