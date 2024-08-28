function app(){
    const tasks = []
    let contxt = null;
    let tasks_index = 0
    function next(){
        if (tasks_index>tasks.length-1) return
        tasks[tasks_index++](contxt,next)
    }
    
    function use(fn){
        tasks.push(fn)
    }
    
    function start(_contxt){
        contxt = _contxt
        next()
    }

    return {start,use}
}

module.exports = app