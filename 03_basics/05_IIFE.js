//immediately invoked function expression
//wrappin the function declaration automatically in these ()
//JavaScript now treats it as an expression instead of a declaration.
// and then putting () outside it executes it
(function chai(){
    // it is named iife
    console.log("DB Connected")
})();
// after doing IIFE javascript dont know where to stop the context so to invoke other function without the error i have to  put semicolon at the end of the calling ();

//to immediately invoked a function
// (function declaration)()

// imp for interviews = > to remove the pollution created by global objects , etc , we use IIFE

(
    //simple iife
    (name)=>{
        console.log(`DB Connected 2  ${name}`)
    }
)("hitesh");

// to pass the parameter like normal function i pass the parameter in the end () after the function declaration