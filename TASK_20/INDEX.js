//Practical Exercises
//1.	Create a Car class with brand, model, year. Add a method getDetails() that returns info

/*class car{
    constructor(brand, model, year){
        this.brand=brand
        this.model=model
        this.year=year
    }
    getdetails(){
        console.log(`the brand od car is ${this.brand}, the model of car is ${this.model} and the year is ${this.year}`)
    }
}
let c1 = new car ("TOYOTA","grande",2020)
c1.getdetails()*/

// 	2.	Create a Person class with name & age. Add getter for age and setter to update it.

/*class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }

  get age() {
    return this._age;
  }
  set age(newAge) {
    this._age = newAge;
  }
  display() {
    console.log(`${this._name} ${this._age}`);
  }
}


let p1 = new Person("Ali", 20);
p1.display(); // Ali 20

p1.name = "Ismail";
p1.age = 19;
p1.display();

p1.name = "Haider";
p1.age = 21;
p1.display(); */


//	3.	Inherit Student class from Person with grade property. Override a method.


/*class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}


class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); 
    this.grade = grade;
  }


  displayInfo() {
    return `${this.name} is ${this.age} years old and in grade ${this.grade}.`;
  }
}


let s1 = new Student("Ali", 20, "A");
console.log(s1.displayInfo());*/


//	4.	Add a static compare method in Student to compare two students’ grades.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  displayInfo() {
    return (`${this.name} is ${this.age} years old and in grade ${this.grade}.`);
  }


  static compare(s1, s2) {
    if (s1.grade > s2.grade) {
      return `${s1.name} has a higher grade than ${s2.name}.`;
    } else if (s1.grade < s2.grade) {
      return `${s2.name} has a higher grade than ${s1.name}.`;
    } else {
      return `${s1.name} and ${s2.name} have the same grade.`;
    }
  }
}


let student1 = new Student("Ali", 20, 85);
let student2 = new Student("Sara", 21, 92);

console.log(student1.displayInfo());
console.log(Student.compare(student1, student2));