const myObject = {
    js : 'javacript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

// for in is mostly  used to iterate through objects 
//because for of loop cant iterate through objects
// to access the key value in javacript by for in loop use it like
// myObject[key]
for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const prog = ["js", "rb" , "py", "java", "cpp"]
// in forin loop in array it directly give the index if you use it as shown below
// for (const key in prog) {
//     console.log(key)
// }
for (const key in prog) {
    // console.log(prog[key])
}


// for in is not iterable in the maps
// const map = new Map()
// map.set('IN', "INDIA")
// map.set('IN', "INDIA")
// map.set('USA' , "UNITED STATES OF AMERICA")
// map.set('fr' , "France")

// for(const key in map){
//     console.log(key)
// }


