
function mainFunc(a,b,cb) {
    console.log(`numOne ${a} numTwo ${b}`)
    return cb(a,b)
}
function add(a,b,cb) {
    console.log(`the sum of nums ${a+b}`)
    return cb(a,b)
}
function sub(a,b,cb) {
    console.log(`the sub of nums ${a-b}`)
    return cb(a,b)
    
}
function mul(a,b) {
    console.log(`the mul of nums ${a*b}`)
    
}

mainFunc(10,5,(a,b)=>{
    add(a,b,(a,b)=>{
        sub(a,b,(a,b)=>{
            mul(a,b)
        })
    })
})



// // let promise = new Promise(function(resolve, reject) {
// //     // executor (the producing code, "singer")
// // });


// // console.log(promise)


function doOperation(cb) {
    console.log('fetching data ....')
    setTimeout(() => {
        data = {id:1,name:'araby'}
        cb(data,null)
}, 2000);
}


function showData(data,cb) {
    console.log("fetched data" , data)
    cb(data)
}
function showTasks(userData,cb) {
    console.log(`fetching tasks for user ${userData.name}`)
        setTimeout(() => {
            const tasks = [
                {id:1,task:'study'},
                {id:2,task:'pray'},
        ]
        cb(tasks)
}, 2000);
}


doOperation((data)=>{
    showData(data,(userData)=>{
        showTasks(userData,(tasks)=>{
            console.log("Tasks fetched:", tasks);
        })
    })
})
