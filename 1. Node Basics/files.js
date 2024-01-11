const fs = require('fs')

// reading file
fs.readFile('./docs/blog1.txt', (err, data)=>{
    if(err){
        console.log("error", err)
    }
    console.log(data)           // returns buffer
    console.log(data.toString())
})

// writing file
fs.writeFile('./docs/blog1.txt', "this is awesome", (err, data)=>{
    if(err){
        console.log("erropr", err)
    }
    console.log("file written")
})

fs.writeFile('./docs/blog2.txt', "this is awesome", (err, data)=>{
    if(err){
        console.log("erropr", err)
    }
    console.log("file written")
})



// directories 
if(!fs.existsSync('./newFoldCreate')){              // check if the folder already exists
fs.mkdir("./newFoldCreate",(err)=>{
    if(err){
        console.log(err)
    }
    console.log('folder created')
})
}else{
    fs.rmdir("./newFoldCreate", (err)=>{
        if(err){
            console.log("error", err)
        }
        console.log("folder deleted")
    })
}


// deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if (err){
            console.log("error", err)
        }
        console.log("file deleted")
    })
}