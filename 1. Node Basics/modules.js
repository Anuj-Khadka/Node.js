// Classic Method 
/*
let peop = require("./people")

console.log(peop)

// extract certain var 
console.log(peop.age)

*/

// Advanced Method
let {people, age} = require("./people")
console.log(people, age)



// Builtin Modules 
let os = require('os')
console.log(os.platform(), os.homedir())