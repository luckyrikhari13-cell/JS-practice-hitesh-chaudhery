 
 
 function sayMyName(){
    console.log("Lucky")
 }
 //saymyname = > it is refrence
 //saymyname() => put () to execute this function
//  sayMyName() 

// function addTwoNumbers(num1 , num2){
//     console.log(num1+num2)
// }
function addTwoNumbers(num1 , num2){
    return num1+num2;
}

// addTwoNumbers() // =>it will say NaN because we dont have provide a number as argument in the function

// const result = addTwoNumbers(3,5)
// console.log("Result : "+result); // ==> it is not returning anything thats why the result is undefined
// addTwoNumbers(3,"a") 
//due to type conversion the result will automatically be in string


function loginUserMessage(username = "sam" /* this is used to give default value to a parameter in javascript*/ ){
    // undefined and "" are automatically evaluated as false in javascript
    if(!username){
         console.log("please enter a username")
         return;
    }
    return `${username} just logged in `
}
console.log(loginUserMessage())