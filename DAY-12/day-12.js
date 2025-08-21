/*function hello(){
    console.log("hellow world")
}
hello();*/


/*hello = (a,b)=>{
let sum;
sum = a+b;
console.log(sum)
}
hello(6,9);*/


/*greeting=(name,age)=>{
console.log(`hello my name is ${name} and i am ${age} years old `)
} 
greeting("ismail",19)*/


/*square = (num)=>{
  console.log(num*num);
}
square(5)*/


/*numchecker=(num)=>{
if(num%2==0){
    console.log(num +" is even")
} else{
    console.log(num +" is odd")
}
}
numchecker(6)*/

/*max=(a,b)=>{

    if(a>b){
        console.log(a + " is greater then " +b)
    } else{
        console.log(b + " is greater then " +a  ) }
}
max(5,2)*/

/*fact=(n)=>{
if(n==0 || n==1){
    return 1;
} else{
 return n* fact (n-1) 
}
}
console.log(fact(5));*/


//string interpolation

/*a=(name,age)=>{
console.log(`my name is ${name} and my age is ${age}`)
}
a("ismail",19)*/

//destructuring 

/*let a =1;
let b = 2;

[a,b]= [b,a];
console.log(a);
console.log(b)*/

/*const colors = ["red","green","blue","black","white"];

[colors[0], colors[4]] = [colors[4],colors[0]];

console.log(colors)*/

/*const  colors = ["red","green","blue","black","white"];

const [firstcolor,secondcolor,thirdcolor, ...extraColor]= colors
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extraColor)*/

//object destructuring

/*const person1={
fname: "haider",
lname: "ali",
age:20,

}
const person2={
fname: "hassan",
lname: "musil",
age:19,
job:"fullstack developer"
}

const {fname,lname,age,job="unemployed"} = person1
console.log(fname);
console.log(lname);
console.log(age);
console.log(job)*/

/*const person ={name:"ismail", age:19};
const {name,age}=person;
console.log("my name is "+ name + " and "+ "my age is "+age)*/


/*const person = {name: "Ali", age: 20, city: "Karachi"};
const {name,age,city} = person;
console.log(name,age,city);*/

/*let a=5;
let b = 7;
[a,b]= [b,a];
console.log("the new value of a is",a);
console.log("the new value of b is",b)*/

//rest spread

/*let numbers = [1,2,3,4,5,6];
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log("the max is ", max);
console.log("the min is ", min)*/

/*let username = "muhammad ismail"
let letter = [...username].join("-");
console.log(letter)*/


/*let online = ["pubg","rublocks","freefire","wwe"]
let offline = ["subway surfer", "temple run"]
let games = [...online,...offline,"temple run 3"]
console.log(games)*/



function trg (num,target){
for(let i=0; i<num.length; i++){
    for(let j = 0;j<num.length;j++){
        if(num[i] + num[j]===target){
            return [i,j];
        }
    }
}   
return null;
}
console.log(trg([2,3,1,4,6,9],7))