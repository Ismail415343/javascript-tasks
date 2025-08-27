//promise resolve means promise fulfilled reject means the promise is not fulfulled, pending means the promise is on pending

// let promise = new Promise( (resolve,reject)=>{
// console.log("promise");
// //resolve('sucess')
// //reject("error")

// })

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log("data", dataId);
//       // resolve("success");
//       reject("error");

//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// in promises if we want to do some work after our promise is got fulfilled we use .then and to do some work after reject like error we use .catch 

// const getPromise =()=>{
//     return new Promise((resolve, reject) => {
//         console.log("i am promise")
//        // resolve("sucess")
//        reject("rejected")
//     })
//  }


// let promise = getPromise();
// promise.catch((err)=>{
//     console.log("this will not runs ",err)
// })

const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am promise")
        resolve("no errors")
    }
)}
let promise = getPromise();
promise.then((res)=>{
console.log("runs sucessfully",res)
})