const app = require('./index')

let {use,start} = app()

use((next)=>{
    setTimeout(() => {
        console.log('111')
        next()
    }, 2000);
})

use((next)=>{
    setTimeout(() => {
        console.log('222')
        next()
    }, 2000);
})

use(()=>{
    setTimeout(() => {
        console.log('333')
    }, 2000);
})

start()