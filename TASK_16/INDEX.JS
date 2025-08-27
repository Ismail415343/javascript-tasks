
//promise chaining

// function async1 ()  {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data1")
//             resolve("sucess")
//         }, 3000);
//     })
// }

// function async2 ()  {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data2")
//             resolve("sucess")
//         }, 5000);
//     })
// }

// console.log("fetching data1")
// let promise1 = new async1();
// promise1.then((res)=>{
//     console.log(res)
// })


// console.log("fetching data2")
// let promise2 = new async2();
// promise2.then((res)=>{
//     console.log(res)
// })




function async1 ()  {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data1")
            resolve("sucess")
        }, 3000);
    })
}

function async2 ()  {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data2")
            resolve("sucess")
        }, 5000);
    })
}

console.log("fetching data1...")
let promise1 = new async1();
promise1.then((res)=>{
    console.log(res)
    console.log("fetching data2...")
    let promise2 = new async2();
    promise2.then((res)=>{
    console.log(res)
    })
})

