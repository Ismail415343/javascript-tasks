//synchronus line by line

// console.log("1")
// console.log("2")
// console.log("3")

//asynchronus

// function hello(){
//     console.log("hello")
// }


// setTimeout(hello,4000) // the 2000 is miliseconds which is equal to 2 sec and when we go to the console it will execute the output on console after 2 secpnd

// setTimeout(()=>{
// console.log("hello ismail")
// },2000)


// console.log("1")
// setTimeout(()=>{
//     console.log("2")
// },2000)
// console.log("3")

//callback

// let sum = (a,b)=>{
// console.log(a+b)
// }

// let calculator =(a,b,sumCallback)=>{
// sumCallback(a,b)
// }
// calculator(1,5,sum)


// const multiply=(a,b)=>{
//     console.log(a*b)
// }
// const cal=(a,b,multiply)=>{
// console.log(a,b)
// }
// multiply(4,5,multiply)

//asynchronus is also a call back because the functions use callback to execute the entire function

// const hello =()=>{
//      console.log("hello")
// }
// setTimeout(hello,5000)