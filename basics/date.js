//Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString()) //Output depends on the user's locale.
// console.log(typeof myDate) // object 

// let myCreatedDate = new Date(2023,0,23) // year , month , date => in javascript the month is started from 0
// let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3)
// let myCreatedDate = new Date("2023-01-14") // when using yy mm dd => the month starts from  the 1
let myCreatedDate = new Date("01-14-2023") 
// console.log(myCreatedDate.toLocaleString()) // we need to use toString to get the real date or todate to get the date


let myTimeStamp = Date.now()  // also can use this to use Date object

// console.log(myTimeStamp) // return a string in some big numbers it started counting from the 1st jan of 1970

// console.log(myCreatedDate.getTime())  // used to get millisecond time from the 1st jan 1970 to the date you specified

console.log(Math.floor(Date.now()/1000))
//Date.now return the ans in the milliseconds and 1 second is equal to the thousand milliseconds , we can divided it to get the seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay())


//`${newDate.getDay()} and the time`


newDate.toLocaleString('default',{
    weekday : "long"
})
//used to customize the to localstring method


