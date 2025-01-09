



function doOperation() {
    return new Promise(function(resolve, reject) {
        console.log('fetching data ....')
        setTimeout(() => {
            const data = {id:1,name:'araby'}
            resolve(data)
        }, 2000);
    });
}
function showTasks(userData) {
    return new Promise(function(resolve, reject) {
        console.log(`fetching tasks for user ${userData.name}`)
        setTimeout(() => {
            const tasks = [
                {id:1,task:'study'},
                {id:2,task:'pray'},
        ]
        resolve(tasks)
    }, 2000);
    });
}

// doOperation((data)=>{
//     showData(data,(userData)=>{
//         showTasks(userData,(tasks)=>{
//             console.log("Tasks fetched:", tasks);
//         })
//     })
// })

// doOperation()
// .then((data)=>{
//     console.log("fetched data" , data)
//     return showTasks(data)
// })

async function fetchData() {
    const data = await doOperation();
    console.log("fetched data" , data)
    const userTasks = await showTasks(data)
    console.log("Tasks fetched:", userTasks);
}

fetchData()
