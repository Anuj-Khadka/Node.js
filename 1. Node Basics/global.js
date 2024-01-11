let obj = "hello"
console.log(obj)


// global object for node 
// console.log(globalThis)

setTimeout(() => {
    console.log("this is timeout")
    clearInterval(int)
}, 3000);

let int = setInterval(() => {
    console.log("this is interval")
}, 1000);



// get file and folder absolute path 
console.log("file location", __filename)
console.log("folder location", __dirname)
