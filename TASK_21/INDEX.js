// encapsulation with getter setter 

class person{
    constructor(name,age){
this._name = name;
this._age=age
    }


get name (){
    return this._name;
}
set name (n){
this._name =n;
}

get age(){
    return this._age;
}
set age(value){
this._age=value
}
getdetails(){
    return`${this.name} is ${this.age} years old`
}
}

let p1 = new person("ismail",19)
console.log(p1.getdetails())
p1.name="musa"
console.log(p1.getdetails())
p1.age= 30;
console.log(p1.getdetails())
