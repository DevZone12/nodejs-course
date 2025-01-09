








console.log('this is the start') //sync

setTimeout(() => {
    console.log('this is a message from callback 1') //async
},0);

console.log('this is just a message') //sync

setTimeout(() => {
    console.log('this is a message from callback 2')  //async
}, 0);

console.log('this is the end') //sync


// ------------------------------------------------------------------------------

console.log(1) // sync

setTimeout(() => {
    console.log(2)  // async
}, 0)

Promise.resolve() // sync
.then(() => {
    console.log(3)  // async
}).then(() => {
    console.log(4)  // async
})


// ------------------------------------------------------------------------------

console.log('begin') // sync

setTimeout(() => { // async
    console.log('setTimeOut 1') // sync
    Promise.resolve().then(() => {
        console.log('promise 1') // async
    })
},0)

new Promise((resolve, reject) => {   // promise constructor is sync
    console.log('promise 2') // sync
    setTimeout(() => { // async
        console.log('setTimeOut 2') 
        resolve('resolve 1') 
    },0)
}).then((res) => {
    console.log('then 1') // async
    setTimeout(() => {
        console.log(res) // async
    },0)
})
