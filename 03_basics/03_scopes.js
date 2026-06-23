
//{}=> in javascript these are scopes
// var c = 500
let a = 300
if(true)
{
//these 3 variable should have their scope inside this {} so that it create suitablitilty for programmers
let a = 10
const b = 20
// var c = 500//=> this is the root cause of the problem
}
console.log(a)
// console.log(b)
// console.log(c)

// var:
// Function-scoped (or globally scoped if declared outside a function).
// Can be redeclared and updated. Not block-scoped, so it ignores {} blocks.

// let:
// Block-scoped, meaning it only exists inside the {} where it is declared.
// Can be updated but cannot be redeclared in the same scope.

// const:
// Block-scoped like let.
// Cannot be redeclared or reassigned after initialization, but object/array contents can still be modified.