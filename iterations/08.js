const myNums = [1,2,3]

const myTotal = myNums.reduce(
    (acc,currval)=>
    {
        console.log(` acc :- ${acc} , currval :-${currval}`);
        return acc+currval // the sum of these is again return to the accumulator and after the array is finished or breaked the final value is return to the variable holding it
    },0 // 0 is the initial value passed to the accumulator
)
console.log(myTotal)
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);