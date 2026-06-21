// creating an object with the help of the Object() constructor
// const tinderUser = new Object(); 
// NOTE: this is NOT a singleton — it just creates a plain empty object
// Calling new Object() multiple times creates a NEW separate object each time
// A singleton means only ONE instance exists across the whole app, and that 
// same instance is reused everywhere — new Object() does not enforce that
const TinderUser = {}
TinderUser.id = "123abc"
TinderUser.name = "Sammy"
TinderUser.isLoggedIn = false
// console.log(TinderUser); 

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfulname :{
            firstname : "lucky",
            lastname : "rikhari"
        }
    }
}
// console.log(regularUser.fullname.userfulname.firstname)


const obj1 = {1:"a" , 2 :"b"}
const obj2 = {3:"c" , 4 :"d"}
const obj3 = {5:"e" , 6 :"f"}
//how to combine two objects

// const obj4 = Object.assign({},obj1,obj2,obj3) // here first 1 is the target and rest are the source
//simple way to combine objects
const obj4 = {...obj1 , ...obj2 , ...obj3}
console.log(obj4)

const users =[
    {
        id:1,
        email : "h@gmail.com"
    },   
     {
        id:1,
        email : "h@gmail.com"
    }, 
     {
        id:1,
        email : "h@gmail.com"
    }
]

users[1].email
console.log(TinderUser)
// below one is used to find the keys or values of the object and return the answer it gets in the form of the object
console.log(Object.keys(TinderUser))
console.log(Object.values(TinderUser))


console.log(Object.entries(TinderUser))
// above one gives each key value pair inside a array

console.log(TinderUser.hasOwnProperty('isLoggedIn'))
//used to check that a certain key inside a object is present or not