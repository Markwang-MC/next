const fs = require('fs')
function readFile(path){
    return new Promise((s,f)=>{
        fs.readFile(path,(data,e)=>{
            if (!e) s(data)
        })
    })
}
readFile('./a')
.then((data)=>{
    if (data) return readFile('./b')
})
.then((data)=>{
    if (data) return readFile('./c')
})


let data = await readFile('./a')!
await readFile('./b')!
await readFile('./c')!
