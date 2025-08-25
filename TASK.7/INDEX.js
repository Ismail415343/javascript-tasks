//direct way of creating an object

/*const student = {
    fullname : "musa",
    marks : 94.98,
    printMarks : function(){
        console.log("marks are =", this.marks);
    },

};
console.log(student)*/

/*const employee={
    calctax : function(){
        console.log("the tax is 10%.")
    }
}

const musa={
    salary:500000,
};
musa.__proto__=employee;

console.log(musa);
musa.calctax();*/


/*const employee= {
    caltax: function(){
        console.log("the tax is 10%")
    }

}

const musa={
    salary:300000,
};
const haider ={
    salary:300000,
};
const hassan ={
    salary: 340000,
    caltax: function(){
     console.log("the tax rate is 20%")
    }
};


musa.__proto__=employee;
haider.__proto__=employee;
hassan.__proto__=employee;

console.log(musa,haider,hassan);
musa.caltax();
haider.caltax();
hassan.caltax();*/



/*const fruits =[{name:"mango", colour: "yellow", calories:54 },
    {name:"banana", colour: "yellow", calories:100 },
    {name:"orange", colour: "orange", calories:59 },
    {name:"lychee", colour: "white", calories:78 },
    {name:"grape", colour: "green", calories:43 }
];
fruits.push({name:"watermelon", colour:"red", calories:90});
fruits.pop();
console.log(fruits);*/

// simple for student

/*const student={
    name:"musa", 
    class: "2nd semester", 
    field:"CS",
     age:19
}
console.log(student);*/



// simple for product

/*const product ={
    name:"pen",
    brand:"dollar",
    price:"3 pkr"
}
console.log(product)*/

/*let car ={
    name:"civic",
    brand:"honda",
    price:"10000000rs",
};
console.log(car);*/

// making showroom with available cars with objects and array

/*let available_cars = [{name:"corolla", brand:"toyota",model: 2020, price:8500000},
{name:"civic", brand:"honda",model: 2022, price:10000000},
 {name:"accord", brand:"honda",model: 1986, price:800000},
 {name:"AMG g63", brand:"mercedes",model: 2016, price:160000000},
 {name:"thar", brand:"mahindra",model: 2023, price:6500000},
 {name:"rebirth", brand:"honda",model: 2018, price:9000000}];

console.log(available_cars);*/

// inventory store with adding and removing product using push pop


/*let store = [{product:"pen", brand:"dollar", price:"2$"},
    {product:"biscuit", brand:"oreo", price:"6 $"},
    {product:"chocolate", brand:"snackers", price:"3.6 $"},
    {product:"washing powder", brand:"bonus", price:"9.4 $"},
    {product:"perfume", brand:"dior", price:"16.00 $"},
    {product:"bag", brand:"gucci", price:"40.90 $"}]
store.pop();
store.push({product:"notebook", brand:"plt", price:"4.33 $"});

console.log(store);*/

/*let student ={
    name: "musa",
    age: 19,
    cgppa: 3.17,
    isPass : true
};
for(let i in student){
    console.log(student[i])
}*/


/*let name = "javascript";
let count =0;
 

for(let i =0; i<name.length; i++){
    console.log(name+count);
}*/


/*let word ="javascript";
let result = {};

for(let char of word){
    if(result[char]){
        result[char]++;
    } else{
        result[char]=1;
    }
}
console.log(result);*/



/*let word = "muhammad musa";
let cword={};

for(let char of word){
    if(cword[char]){
cword[char]++;
    } else{
        cword[char]=1;
    }
}
console.log(cword);*/



/*let word = "muhammad ismail";
let result={};
for(let i of word){
    if(result[i]){
        result[i]++;
    } else{
        result[i]=1;
    }
}
console.log(result);*/