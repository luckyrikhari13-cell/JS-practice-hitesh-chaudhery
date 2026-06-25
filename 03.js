// for of

const arr = [1,2,3,4,5]
// the syntax of the for of loop
// for (const element of object) {
    
// }
for(const num of arr){
    // console.log(num)
}

const greetings = "hello world!"
for (const index of greetings) {
    // console.log(`each char is ${index}`)
}

// MAPS
// Maps objects are collection of key value pairs key in the Map may only occur once;
// it is unique in the map collection
const map = new Map()
map.set('IN', "INDIA")
map.set('IN', "INDIA")
map.set('USA' , "UNITED STATES OF AMERICA")
map.set('fr' , "France")

// console.log(map);

//to iterate in this to each element you have to destructure the map

// for(const [Key , value] of map){
//     console.log(Key , ':-' , value)
// }

const myObject ={
    'game1' : 'NFS',
    'game2' :  'Spiderman'
}
 
//forof loop is not iterable in objects
// for(const [key ,value] of myObject)
// {
//     console.log(`key is ${key} and value is ${value}`)
// }