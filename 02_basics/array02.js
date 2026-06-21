const marvel_heros = ["thor","Ironman","spiderrman"]
const dc_heroes = ["supeman" , "flash" , "batman"]

// marvel_heros.push(dc_heroes) // doing this will add the dc_heroes in he marvel_heroes as the single element ( means whole array ) , counting as one element in another array

// console.log(marvel_heros)
// console.log(marvel_heros[3][1]) // not good to use this

// const heros = marvel_heros.concat(dc_heroes) // need to use vatiable because it return a array after joining the arrays
// console.log(heros)


//sperad operater
// to  remember spread just think about taking a glass and dropping it it will spread 
const all_new_heros = [...marvel_heros,...dc_heroes]
// console.log(all_new_heros)

const another_array = [1 , 2 ,3 , [4 , 5, 6 ],7,[6,7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// The maximum recursion depth=> it can be up to infinity
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
// sidhi baat jitna bhi array ke andar array ho wo usko ek array me dall ke dedega
// console.log(real_another_array)


console.log(Array.isArray("hitesh")) // asks is the input is array
console.log(Array.from("Hitesh"))
//convert the given thing to the string of arrays
// [ 'H', 'i', 't', 'e', 's', 'h' ] output
console.log(Array.from({name:"hitesh"})) // intresting case 
// it cant convert it into array because it is confused to make key arrays or value arrays // output []

let score1 = 100
let score2 =  200
let score3 = 300
console.log(Array.of(score1,score2,score3))
// Returns a new array from a set of elements.

