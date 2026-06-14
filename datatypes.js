"use strict"; // its treat all code as in newer version of js

// alert(3+3) // we are using node js , not browser so alert is not defined 
// code readablity should be high and we should use comments to make code more readable 
let name = "John"; // string
let age = 30;   // number
let isLoggedIn = true; // boolean


// number ==> 2 to the power of 53
// bigint use if the number is greater than 2 to the power of 53
//string ==> " " or ' ' or ` `
// boolean ==> true or false
//null ==> standalone value that represents nothing
// undefined ==> variable that has been declared but not assigned a value
//null example ==> sending temperature from a server to the user, if the temperature is not available then we can send null to the user
// symbol ==> unique value that can be used as an identifier for object properties


// object ==> collection of key value pairs 
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof null); // object (this is a known issue in JavaScript)
console.log(typeof undefined); // undefined


//important for interview questions
//null is an object and undefined is a type of its own  