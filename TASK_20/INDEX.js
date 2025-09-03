// this in classes 
// we use this to assign value inside the parameters of constructor

/*class person{
    constructor(name,age){
this.name=name;
this.age = age
    }
    getdisplay(){
        console.log(`the name of the person is ${this.name} and the age of the person is ${this.age}`)
    }
}
let p1 = new person("nadeem", 20)
let p2 = new person("ismail",19)
p1.getdisplay();
p2.getdisplay()  */


// static 
// in static we ndont need to create an object

/*class math{
    static add(a,b){
        return a+b;
    }
}
console.log("the sum 4 and 8 is ",math.add(4,8))*/



// encapsulation / getter,setter it is use to hide data 


/*class person{
    constructor(name,age,balance){
        this.name= name;
        this.age=age;
        this.balance=balance
    }

get balance(){
return this._balance
}
set balance(newbalance){
    this._balance= newbalance
}
}
let p1 = new person("ali",20,30000)
console.log(p1)
p1.balance=40000;

console.log(p1)*/


// inheritance is use to extend classes, it use parent child relation

/*class animal{
    speak(){
        console.log("all animals makes a sound")
    }
}
class dog extends animal{
    speak(){
        console.log("woo wooo")
    }
}

let d1 = new dog()
d1.speak()*/


// super keyword is use to call parent class method or constructors

class animal{
constructor(name){
    this.name=name
}
}
class dog extends animal{
    constructor (name,breed){
        super(name)
        this.breed = breed
    }
    display(){
        console.log(`${this.name} is a ${this.breed} breed dog`)
    }
}
const d1 = new dog("boozo", "husky")
d1.display()