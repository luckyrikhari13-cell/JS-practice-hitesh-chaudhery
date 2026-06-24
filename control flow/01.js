//control flow = > how to control a flow of program using control sysytems
const isUserLoggedIn = true
const temperature = 41
//if
// some basic comparision operators
// < , > ,<= ,>= , == , != , ===
// if(temperature === 41 )
// {
//    console.log("less than 50") 
// }
// else{
//    console.log("temperature is greater than 50")
// }

// console.log("execute")

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User Power :" ${power}`);
// }
// console.log(`User Power :" ${power}`); will generate a error becuase the power is inside the if scope after coming out it scope will be diminished


// const balance = 1000 

// if(balance > 500) console.log("test") // this is implicit scoping man liya ki yaha par hamne scope declare kiya hai

// if(balance < 500){
//     console.log("less than 500")
// }
// else if(balance < 750)
// {
//     console.log("less than 750")
// }
// else if(balance<900)
// {
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const LoggedInFromemail = true

if(userLoggedIn && debitCard && 2==3)
{
    console.log("allow to buy courses")
}

if (loggedInFromGoogle || LoggedInFromemail )
{
    console.log("user logged in ")
}