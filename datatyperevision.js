// primitive

// 7 types of primitive data types in JavaScript
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint

const score = 100; // number
// as you can see i dont explicitly define the data type of the variable score, but JavaScript automatically assigns it a data type based on the value assigned to it. This is known as dynamic typing.
const scorevalue = 100.3; // number
const isLoggedIn = false; // boolean
const outsideTemp = null; // null is a special value that represents the absence of any value. It is often used to indicate that a variable has no value or that an object property does not exist.
let userEmail; // undefined is a special value that represents the absence of a value. It is often used to indicate that a variable has not been assigned a value or that an object property does not exist.

const id = Symbol("123"); // symbol is a unique and immutable data type that is often used to create unique identifiers for object properties.
//Symbol returns a unique value every time it is called, even if the same description is passed as an argument. This makes it useful for creating unique keys for object properties, as it ensures that there will be no collisions with other keys. 
// and its return type is symbol, and it is not a primitive data type, but it is a unique and immutable value that can be used as a key for object properties.
const anotherId = Symbol("123");
console.log(id === anotherId); // false, because each call to Symbol() creates a unique symbol, even if the same description is passed as an argument.
const bigNumber = 9007199254740991n; // bigint is a data type that can represent integers with arbitrary precision. It is often used to represent large integers that cannot be represented by the number data type
// to use bigint, you need to append the letter "n" to the end of the integer literal. This tells JavaScript that the value should be treated as a bigint rather than a number.


//reference (non-primitive) data types)
// 1. object
// 2. array
// 3. function

const heros = ["superman", "batman", "flash"];
// arrays are a type of object in JavaScript, and they are used to store multiple values in a single variable. They are created using square brackets [] and can contain any type of data, including other arrays and objects.

let myObj = {
    name: "lucky rikhari",
    age: 22,
    isMarried: false
};
// objects are a type of data structure that can store multiple values in a single variable. They are created using curly braces {} and consist of key-value pairs, where the key is a string and the value can be any type of data, including other objects and arrays
const myFunc = function() {
    console.log("hello world");
}// functions are a type of object in JavaScript, and they are used to define reusable blocks of code that can be called with different arguments. They are created using the function keyword and can be assigned to variables, passed as arguments to other functions, and returned from functions.

console.log(typeof score); // number
console.log(typeof scorevalue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof bigNumber); // bigint
console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunc); // function
console.log(typeof userEmail); // undefined
console.log(typeof outsideTemp); // object, this is a quirk in JavaScript where the typeof null returns "object". This is because null is considered a primitive value, but it is also treated as an object in some contexts.

//null==>object
//undefined==>undefined
//symbol==>symbol
//bigint==>bigint
//function==>function
// but function is called as object function
