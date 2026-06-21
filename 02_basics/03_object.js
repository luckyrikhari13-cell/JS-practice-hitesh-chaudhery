//singelton=> singelton object means that object have only one instance
//Object.create = > this is the way to crate objects with a constructor which is a singleton
//object litreals =>way to create the objects
const mySym = Symbol("key1")
const jsuser = {
    name: "lucky",  // inside the javascript the name is stored as "name"
    age:18,
    // mySym:"mykey1" , // not a valid way to declarre symbol
    [mySym]:"mykey1", // use [] and write key inside to write symbol
    location:"jaipur",
    email:"lucky@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]}
//there are two ways to access the key value of a object
//A Symbol is a primitive data type whose value is guaranteed to be unique.
// console.log(jsuser.email)
//2nd method
// console.log(jsuser["email"]) // passed as string because java need  key as strng to understand as string

// to call symbol from object see the statement below dont use dot
// console.log(jsuser[mySym])


// jsuser.email =  "lucky@chatgpt.com"
// Object.freeze(jsuser) // used to freeze the object by which you cant make any furthur changes in the same object
// jsuser.email = "lucky@microsoft.com"
// console.log(jsuser) // it will not show email as lucky@microsoft.com


jsuser.greeting = function(){
    console.log("hello js user")
}
jsuser.greeting2 = function(){
    console.log(`hello js user , ${this.name}`) // string interpolation to use directly variables + this keyword we used to know that which object's property(key) you are referring to
}
jsuser.greeting()
jsuser.greeting2()