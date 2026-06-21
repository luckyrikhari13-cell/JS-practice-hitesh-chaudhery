//array
//arrays uses pass by refrence value

const myArr = [0,1,2,3,4,5 , true ,"hitesh"] // it can contain elements of multiple datatype
//shallow copy -> both pointing to the same refrence point changing one changes the another
// deep copy -> they point to the different refrence point changing one does not changes the another
// console.log(myArr[0])

const myheros = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4)


//Arrays methods

// myArr.push(6)  // push and pop modify the existing array it does not create another copy of it
// myArr.push(7)
// myArr.pop()
// console.log(myArr)


// myArr.unshift(9)
// it add the element in the first index and move each element by one index , it is not favorable because in large data it is very time consuming

// myArr.shift()
//it removes the first element and decrease the index of each element by  1 , now just think about large data

// console.log(myArr.includes(9)) // returns boolean
// console.log(myArr.indexOf(3)) // returns index or -1

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr) // it prints the array in string in comma separated values
// console.log(typeof newArr)


// ⁡⁣⁢⁣​‌‌‍slice , splice​         ⁡

console.log("A" , myArr)

const myn1 = myArr.slice(1,3)
// it does not inlude last range while printing
console.log(myn1)
console.log("B" , myArr)

const myn2 = myArr.splice(1,3)
console.log("C" , myArr)
console.log(myn2)


//most important for interviews
// when you use slice on array it does not include last range in the output + when it print the output it does not modify the original array , it just take part copy it and print it


// but when you use splice on array it includes the last range as well as it cut the specified portion from the original array

