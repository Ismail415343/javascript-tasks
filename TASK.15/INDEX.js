// // Using var
// for (var i = 0; i < 3; i++) {
//   console.log("Inside for (var):", i);
// }
// console.log("Outside for (var):", i); 
// //the var is accessible inside or outside the loop because this is the global 


// //Using let
// for (let j = 0; j < 3; j++) {
//   console.log("Inside for (let):", j);
// }
// console.log("Outside for (let):", j); 
// //the let is only executed inside the loop because this is the block/local scope


// // Using const
// for (const k = 0; k < 3; k++) {
//   console.log("Inside for (const):", k);
// }
// // the loop not runs because the constant variable could not change once it declared so the output is only 0


//the const loop is only executed in for of loop

const arr = [10,20,30]
for(const number of arr){
    console.log(number) //this one is executed
}
console.log(number)//this is not gonna execute because this is the local only the number inside the for off loop is executed