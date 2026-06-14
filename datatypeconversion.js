// let score = true 
// console.log(typeof score) // boolean
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber) // number
// console.log(valueInNumber) // 1

// // "33" => 33
// // "33abc" => NaN
// // true => 1   
// // false => 0
// // null => 0
// // undefined => NaN

// let isLoggedIn = "lucky"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) // true  

// // 1 => true
// // 0 => false
// // "" => false
// // "lucky" => true
// // null => false
// // undefined => false   

// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber) // "33"
// console.log(typeof stringNumber) // string


// ************************* Operations ************************
let value = 3
let negValue = -value
console.log(negValue) // -3

console.log(2+2) // 4
console.log(2-2) // 0
console.log(2*2) // 4
console.log(2/2) // 1
console.log(2%2) // 0

let str1 = "hello"
let str2 = "world"
console.log(str1 + str2) // helloworld
console.log(str1 + " " + str2) // hello world

//there is no multiplication, division or modulus for string data type. It will give NaN (Not a Number) as output

console.log("1"+2) // "12"
console.log("1"+"2") // "12"
console.log("1"+2+2) // "122" 
console.log(1+2+"3") // "33" because 1+2 is evaluated first and then "3" is concatenated to it.  

// some tricky conversions
console.log(true) // 2 because true is converted to 1 
console.log(+"") // 0 because empty string is converted to 0

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2
console.log(num1 , num2 , num3) // 4 4 4

let gamecounter = 100
gamecounter++ // 101   it uses first then increment it 
++gamecounter // 102   it increments first then uses it
console.log(gamecounter) // 102