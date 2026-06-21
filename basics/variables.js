const accountId = 144553;
let accountEmail = "luckyrihari@gmail.com";
var accountPassword = "luckyrihari@123";
accountCity = "Bangalore";
// accountId = 123456 // not allowed to reassign a value to a constant variable
accountEmail = "newemail@gmail.com";
accountPassword = "22121112";
accountCity = "Mumbai";

//most important
//you can use console.table to display multiple variables and constants in a table format
console.table([accountId, accountEmail, accountPassword, accountCity]);

/* we dont use var keyword to
 declare a variable because
  it has some issues like it can 
  be redeclared and reassign a value 
  to it, it is function scoped 
  and it can cause hoisting issues.
   so we use let keyword to declare
    a variable because it is block 
    scoped and it cannot be 
    redeclared but it can be 
    reassigned a value to it.
     and we use const keyword 
     to declare a constant 
     variable because it
      cannot be redeclared 
      and it cannot 
be reassigned a value to it.*/
