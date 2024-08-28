const http = require('http')
const app = require('./index')
let {use,start} = app()
use(({req,res},next)=>{
    setTimeout(() => {
        res.write('111')
        next()
    }, 2000);
})

use(({req,res},next)=>{
    setTimeout(() => {
        res.end('222')
    }, 2000);
})


http.createServer((req,res)=>{

    start({req,res})
}).listen(3000)