
//{}=> in javascript these are scopes
// var c = 500
// let a = 300
// if(true)
// {
//these 3 variable should have their scope inside this {} so that it create suitablitilty for programmers
// let a = 10
// const b = 20
// var c = 500//=> this is the root cause of the problem
// }
// console.log(a)
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

// in the function inside function scope the inner function or the child function can access the variables of the parent function
function one(){
    const username = "lucky"
    function two(){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website);
    two()
}

// one() 

if(true){
    const username = "hitesh"
    if(username === "hitesh"){ 
        const website = " youtube"
        // console.log(username+website)
    }
    // console.log(website)
}

// console.log(username)


//++++++++++++++++++++ interesting example ++++++++++++++++++++

//below one is a function
console.log(addone(5)) // yeah we can do that we can call the function above where it is declared
function addone(num){
    return num+1;
}

// below one is a expression
// we will call add two pass it a value and that value will be passed to the function and the result will be return to the addTwo


// but if we have defined the function inside a variable and calling that variable above that variable it will not work 
// because javascript will think that the function/ variable we are calling has not been declared yet
addTwo(5)
const addTwo = function(num){
    return num+2;
}