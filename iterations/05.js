const coding = ["js " , "ruby", "java", "python" , "cpp"]


//for each loop is the loop that is used mostly to iterate through the array and is available as a prototype in the array [ check in console by declaring the array]
// callback fn = > mujhe ek function dedo ki mujhe karna kya hai lekin uska naam nahi hota hai
// is function ka jo parameter hai wo har baar hamare array se ek value leke aayega 
//A callback function in JavaScript is a function that is passed as an argument to another function and is executed later.
// ab aap jo chao us array ke saath karo
// coding.forEach( function (val) {
//     console.log(val)
// } )

// coding.forEach((index)=>{
//     console.log(index);
    
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)
// forEach(callbackfn: (value: string, index: number, array: string[])  

// coding.forEach(
//     (item , index , arr)=>{
//         console.log(item , index, arr);
//     }
// )

// [{},{},{}] this scenario is most common and in that we most commonly use the for each loop

const myCoding = [ 
    {
        langName : "javascript",
        languageFile : "js",
        
    },
    {
        langName : "java",
        languageFile : "java",

    },
    {
        langName : "python",
        languageFile : "py",

    }
]
myCoding.forEach(
    (item)=>{
        console.log(item.langName);
    }
)