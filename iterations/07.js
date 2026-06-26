const myNums = [1,2,3,4,5,6,7,8,9,10]
// map and filter both return after doing the operation
// const newNums = myNums.map( (num)=> num+10 )
// console.log(newNums)Difference between filter and map in JavaScript
// filter returns a new array containing only the elements that pass a test.

// Callback signature: (element, index, array) => boolean
// Keeps elements when callback returns true
// Example:
// map returns a new array with every element transformed.
// using two or more methods constantly is known as chaining
const newNums = myNums
                    .map( (nums)=> nums*10) // it is returnning an array and passing it onto the next method
                    .map((nums)=>nums+1)
// console.log(newNums)