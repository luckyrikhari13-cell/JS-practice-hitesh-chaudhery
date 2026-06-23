const user = {
    userName : "hitesh",
    price : 999,
    welcomeMessage :function(){
        console.log(`${this.userName} ,welcome to website`)
        console.log(this)
        // current context => {
            //   userName: 'hitesh',
                //   price: 999,
                //   welcomeMessage: [Function: welcomeMessage]
                // }
}
// one liner  => the object before the dot (user) becomes the value of this
    // this is used to refer the current context  = > refer to current values , means the properties inside the current object
}
// user.welcomeMessage => this will not work because welcomeMessage is a function not a variable inside the object
// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this)
// because we are in node enviroment the above line will print this {}

// but when we are in the browser the browser will print Window and many object inside it
//whenever the javascript engine run on the browser the  global object inside it is window object


// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// // this cant be used inside the functions
// }
// chai()

const chai = ()=>{
    let username = "hitesh"
    console.log(this)
    // we cant use this indide like normal functions
}
// chai() // it will give the same like {} we can use this but dont like this.{something}

// const addtTwo = (num1,num2)=>{
//     return num1+num2;
// }
// const addtTwo = (num1,num2)=>return num1+num2;
// const addtTwo = (num1,num2)=>  (num1+num2);

// if you have wrap in the curly braces you have to use the return keyword 
// but if you have wrapped in the parentheses you dont have to use the return keyword
//aise me ye man leta hai ki sab ek line me hai to return likhne ki jarurat nahi hai jise kehte hain
// implicit return
// implicit => sidhe tarike se na kaha jaye par samajh me aa jaye

// const addtTwo = (num1,num2)=>  {{username : "hitesh"}};

// console.log(addtTwo(4,5))

const myArray = [2,5,3,7,8]

// myArray.forEach(()=>{})