function calculateCartPrice(val1 , val2 , ...num1){
    return num1
} 
// we want to put multiple parameter in the function wihout specifying it so we use ...(REST operater) , to specify that there can be multiple parameter and it put all of the parameters in the array
// o/p => [200,400,500,2000]
//another output => [500,2000]
console.log(calculateCartPrice(200 , 400 , 500 ,2000))

const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username : "sam",
    price : 399
})

const myNewArray = [5,7,8,9]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([780 ,500 , 78]))