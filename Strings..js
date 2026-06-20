const name = "lucky";
const repocount = 50;
console.log(name[0])
// it is not like arrays when javascript  sess name[0] it create a temporaray string in special string object behind the scenes like
// new String("lucky") and then it access the character at index 0 of that string object and return it, which is 'l' in this case.
// console.log(name+repocount+" value ");
//above line is not prefereed in the modern programming, we can use template literals instead of concatenation.

console.log(`hello my name is ${name} and my repo count is ${repocount} value`);
// `` => String interpolation used to make variables placeholders


const  gameName = new String("hitesh-hc-com");

console.log(gameName[0]); // h
// dont confuse this with arrays indexing , here we are accessing the character at index 0 of the string "hiteshhc" which is 'h'. via object property access.
console.log(gameName.__proto__)
// console.log(gameName.__proto__) prints the prototype object of gameName.
// in simple language Show me all the built-in functions and properties that gameName can use."
// Why does it show {}?

// gameName.__proto__ is actually an object (String.prototype).

// Objects in JavaScript are displayed using curly braces {}.

console.log(gameName.length);
// it does not modify the existing string it create the new one in the string pool and modify it
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4);
//subscript dont accept negative values if you put negative value
//it will automatically start from the 0
//last string is not included in this it only starts from 0 and go til 3
console.log(newString);


const anotherString = gameName.slice(-8,4)
//normally we can start from the positive index
//but when we start from the negative index it print the string from the negative index 
//it starts from last as -1;
console.log(anotherString);

const newStringOne = "    hitesh    "

// trim and anyone with () is a method or we can call it as a function
console.log(newStringOne.trim());

// .replace(what to replace , from which to replace)  , it is how to use it 

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-'));

// .includes is used to check that if something includes in the string or not 

console.log(url.includes("hitesh"))
// it will return the boolean value



//.split("separater")  separater tells where to separate the string and return the array of separated string
console.log(gameName.split('-'))
