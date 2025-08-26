// scopes

/*let a = 43
const b =  33
var c = 53

console.log(a)
console.log(b)
console.log(c)*/

let a = 300; // global scope

if(true){
    let a = 43
const b =  33
console.log("inner",a) // block scope

}
console.log(a)