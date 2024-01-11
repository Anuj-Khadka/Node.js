const fs = require("fs")

options= {encoding: 'utf8'}         // when used options, no need to use toString()


// read stream 
const readStream = fs.createReadStream('./docs/blog3.txt', options)
const writeStream = fs.createWriteStream('./docs/blog4.txt')

readStream.on('data', chunk=>{
    console.log("--------------------NEW CHUNK ---------------------")
    // console.log(chunk.toString())
    console.log(chunk)


    writeStream.write("\n\n\n\n\n\n\n new chunk \n\n\n\n\n\n\n\n")
    writeStream.write(chunk)

})


// piping - done from readable string to a writable one

readStream.pipe(writeStream)