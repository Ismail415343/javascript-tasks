//2. Inheritance with Prototype

// function ANIMAL(name){
// this.name=name;
// }
// ANIMAL.prototype.speak=function(){
//     console.log(this.name +" makes a sound");
// }

// function dog(name){
//     ANIMAL.call(this,name)
// }
// dog.prototype = Object.create(ANIMAL.prototype)
// dog.prototype.constructor = dog;

// dog.prototype.speak = function(){
// console.log(this.name," barks");
// }


// let d1 = new ANIMAL("buddy")
// d1.speak()


// function person(name,age){
//     this.name=name;
//     this.age=age;
// }
// person.prototype.method=function(){
//     console.log(this.name + "is "+ this.age +" years old");   
// }
// function employee(name,age,salary){
//     person.call(this,name,age);
//     this.salary=salary;
// }
// employee.prototype = Object.create(person.prototype)
// employee.prototype.constructor=employee;

// employee.prototype.method=function (){
// console.log(`the name of the person is${this.name}, he is ${this.age} years old and his salary is ${this.salary}$`);

// }
// let p1 = new employee("ismail",19, 1000)
// p1.method()


// 3.Relation to ES6 Classes

/*class animal{
    constructor(name){
        this.name=name
    }
speak(){
    console.log(this.name,"makes a sound");
    
}
}
class dog extends animal{
   speak(){
    console.log(this.name,"barks");
    
   }

}
let dp = new animal("boozo")
let op = new dog("boozo")
dp.speak()
op.speak()*/
