// const userEmail = []
//here we dont have compared the value with anything inside the if
// we just assume this is true ( not exactly assume there are some rules)
// same for falsy
// if(userEmail){
//     console.log("Got user email")
// }
// else{
//     console.log("Dont have user email")
// }

// falsy values

// false , 0 , -0 , BigInt => 0n , "" , null , undefined , Nan , 

// truthy values
// "0" => something inside string is always truthy
// "false" , " " , [] , {} , function(){} => it is known as empty function

// if(userEmail.length === 0)
// {
//     console.log("Array is empty");
// }

// const emptyObject = {}
// if(Object.keys(emptyObject).length ===0){
//     console.log("object is empty")
// }

//Nullish Coalescing Operater (??): null  = > this is not
// ternary operater

let val1;
// if first one is null or undefined it will take the second value otherwise it will take the first value
// val1 = null ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// jo pehli value hogi null ya undeined ke alawa wo assigned ho jayegi  below code mein
// val1 = null ?? 10 ?? 10
// console.log(val1)

//ternary operater

// condtion ? true : false