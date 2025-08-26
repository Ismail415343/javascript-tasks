//leetcode Q.1

/*for(let i = 0;i<5;i++){
    console.log(i)
}
for(var j = 0; j<6;j++){
    console.log(j)
}
for(const k= 0;k<7;k++){
    console.log(k)
}
console.log(i);
console.log(k);
console.log(j);*/

//only var is executed outside the loop because the var is global


//Q.2

/*let x = 20;
function sum (){
    let y = 30;
    console.log("the sum of local and global is ",x+y)
}
sum()*/


//Q.3

/* console.log(a); 
 var a = 4*/

//It shows undefined, because var moves to the top but the value comes later

/* console.log(b) 
 let b = 10*/

//It gives an error, because you can’t use let before you write it.

 /*console.log(x) 
const x = "isail"*/

//It gives an error, because you can’t use const before you write it.

// hello();
// function hello(){
// console.log("hello world")
// 

//It works fine, because normal functions can be used even before you write them.

// sayhi();
// var sayhi = ()=>{
//     console.log("helloismail")
// }

//It gives an error, because here sayhi is not ready yet when you call it.