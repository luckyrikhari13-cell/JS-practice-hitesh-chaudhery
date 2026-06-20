const score = 400
console.log(score)
// above javascript automatically detects it that it is a number without explicitly telling it
// we can get to know the properties of the Number by checking their prototype (check in the console by executing the following commands)
// but we want to say it explicitly that it is a number
// so we can do this
const balance = new Number(400.551)
//above one is explicitly a wrapper class it is just object versions of primitives:
//internally
// balance
// │
// ▼
// Number Object
// {
//    [[PrimitiveValue]]: 100
// } 
// If primitives are not objects, how can they use methods?

// Because JavaScript temporarily creates a wrapper object behind the scenes.

// Conceptually:

// const num = 100;

// num.toString();

// Engine does something like:

// new Number(num).toString();
console.log(balance)

console.log(balance.toString().length)
// Number has a tostring method and when it has converted into string we can aplly string methods to it like finding its length

let str = "lucky"
str[0] = "Y";  // this line is simply ignored because strings are immutable
console.log(str)

console.log(balance.toFixed(1));
// it automatically round of the number around the decimal, for above example
// 400.551 => 400.6
// 400.549 => 400.5

const otherNumber =  123.8986
// below one => it starts rounding of from 1st position(not decimal one) , and round up at 4th position
console.log(otherNumber.toPrecision(4))



const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));
// due to difficulty in  counting commas it create the commas in the number according to the us standard
// 1,000,000 like this for the above example

//but if you use en-IN inside the parameter it will convert it into the indian standard
// you can use .MAX_VALUE and .MIN_VALUE
let example = Number.MAX_VALUE // more like that
console.log(example)

// ******************************⁡⁣⁣⁢​‌‍‌MATHS​⁡********************************


console.log(Math)
// Math is a built-in object in JavaScript that provides:

// Mathematical constants
// Mathematical methods/functions

// Examples:

console.log(Math.PI); 

console.log(Math.abs(4))
//provide absolute value => remove negative sign if it is present in the number 

// round => round of the number as we have studied in the schools
// ceil => if even any number is present after the decimal it will round off it to the next number
// floor => opposite of the ceil
// ceil => console.log(4.2) => 5
// floor => console.log(4.6) => 4

// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.6))

// console.log(Math.min(4,10,34,2))
// console.log(Math.max(4,10,34,2))

console.log(Math.random());
// generates a random number between  0 and 1 but never 1

console.log((Math.random()*10)+1)
// it ensures that the number is atleast 1

console.log(Math.floor(Math.random()*10) + 1 )

const min = 10;
const max = 20 

console.log(Math.floor(Math.random()+ (max-min+1)+min))
