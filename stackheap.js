// stack(primitive) and heap(non-primitive) memory

let myyoutubename = "lucky rikhari"

let anothername = myyoutubename

anothername  = "chai or code"
console.log(myyoutubename) // lucky rikhari
console.log(anothername) // lucky rikhari

//because of myyoutube name and another name are primitive datatype here copy of the value is passed to anothername variable. so when we change the value of anothername it will not affect the myyoutubename variable.


//heap memory(non-primitive) example

let myobject = {
    name: "lucky rikhari",
    age: 22
}

let anotherobject = myobject

anotherobject.name = "chai or code"

console.log(myobject.name) // chai or code
console.log(anotherobject.name) // chai or code

//because of myobject and anotherobject are non-primitive datatype here reference of the value is passed to anotherobject variable. so when we change the value of anotherobject it will affect the myobject variable.