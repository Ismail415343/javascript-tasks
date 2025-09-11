//prototype 

/*let myName = "    ismail"
console.log(myName.length);*/

/*let myName = "ismail       "
console.log(myName.trim().length);*/


// let heros = ["thor","spiderman"]
// let powers = {
//     thor: "hammer",
//     spiderman:"sling",
//     herospower: function(){
//         console.log(`spider man power is ${this.spiderman}`);
        


//     }
// }
// console.log(heros[0])


//Example 1

/*function person (name){
   this.name=name
}
person.prototype.hello=function(){
    console.log("hello my name is", this.name);
    
}
let p1 = new person("ali")
let p2 = new person("ismail")

p1.hello()
p2.hello()*/


function students(name,age){
    this.name = name;
    this.age = age;
}
students.prototype.sayhello=function(){
    console.log(`hello my name is ${this.name} ans my age is ${this.age}`);
    
}
const s1 = new students ("ali",22)
const s2 = new students("haider",19)
s1.sayhello();
s2.sayhello()