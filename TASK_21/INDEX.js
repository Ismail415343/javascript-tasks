//inheritance & super()

class animal{
    constructor(name){
this.name= name;
    }
     speak(){
return `${this.name} make a sound`
    }
}
class dog extends animal{
    constructor(name,breed){
        super(name);
        this.breed=breed
    }
    speak(){
        return `${this.name} dog breed is ${this.breed}, and all dogs bark`
    }
}

const a1 = new animal("all animals");
console.log(a1.speak())

const d1 = new dog("boozo","husky")
console.log(d1.speak())

// static keyword with static school name 
// when we have the one property same for all we use static
        
class Student {
    static schoolname = "Karachi Grammar School";

    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getStudentDetails() {
        return `${this.name} is ${this.age} years old and he studies in grade ${this.grade} at ${Student.schoolname}.`;
    }
}

const s1 = new Student("Ali", 23, 8);
const s2 = new Student("Haider", 19, 6);

console.log(s1.getStudentDetails());
console.log(s2.getStudentDetails());


// static method 
// we can simply call static method without making object

class Maths{
    static add(a,b){
        return a+b;
    }
}
console.log("the sum of two numbers is",Maths.add(5+5,5))


// static method 
// we can simply call static method without making object

class Maths{
    static add(a,b){
        return a+b;
    }
get name (){
    return this._name;
}
}
console.log("the sum of two numbers is",Maths.add(5+5,5))


//encapsulation with getter setter


class person{
    constructor(name,age){
this._name = name;
this._age=age
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



//– Private Fields & Practical Task


class BankAcc {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposit: $${amount}`);
        } else {
            console.log("Deposit amount must be positive");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdraw: $${amount}`);
        } else {
            console.log("Insufficient balance or invalid amount!");
        }
    }

    get balance() {
        return this.#balance;
    }
}

let acc = new BankAcc();
acc.deposit(80);
console.log("Balance after deposit is", acc.balance);

acc.withdraw(56);
console.log("Balance after withdrawal is", acc.balance);


// leetcode 

function isValid(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(let char of s){
if(char==="(" ||char==="[" ||char==="{" ){
    stack.push(char)
} else {
if(stack.length===0||stack.pop()!==mapping[char]){
return false
}
}
}
return stack.length===0

}
console.log(isValid("{[()]}"))