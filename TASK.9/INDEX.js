//PUSH (ADD IN LAST) 

/*let array= [10,150,200,300,400];
array.push([5000]);
console.log(array);*/

//POP (REMOVE THE LAST)

/*let array= [10,150,200,300,400];
array.pop();
console.log(array);*/

//SHIFT (REMOVE THE FIRST)

/*let array= [10,150,200,300,400];
array.shift();
console.log(array);*/


//UNSHIFT (ADD IN THE FIRST)


/*let array= [10,150,200,300,400];
array.unshift([5]);
console.log(array);*/


// indexof  (FIND THE INDEX OF THE ELEMENT OF THE ARRAY)

/*let names= ['ISMAIL','MUSA','HAIDER','HASSAM'];
console.log(names.indexOf('ISMAIL'))*/



// INCLUDES (TRUE/FALSE)


/*let names = ['ISMAIL','MUSA','HAIDER','HASSAM'];
console.log(names.includes('HAIDER'))*/


// SLICE  (give the element that we want in a output)

/*let name = ['ISMAIL','MUSA','HAIDER','HASSAM'];
console.log(name.slice(1,3));*/


//splice (add,remove,replace)

//(start ind, deleted count, new element)


/*let name = ['ISMAIL','MUSA','HAIDER','HASSAM','ALI','SUMAMA','SAQLAIN'];
console.log(name.splice(2, 2, "khuzaima", "sadiq"))*/

//for off loop  

/*let  arr = ['ISMAIL','MUSA','HAIDER','HASSAM','ALI','SUMAMA','SAQLAIN'];


for(let arrs of arr){
console.log(arrs)
}*/

// for each



/*let  arr = ['ISMAIL','MUSA','HAIDER','HASSAM','ALI','SUMAMA','SAQLAIN'];
function abc(element){
    console.log(element)
}

arr.forEach(abc);*/



/*let nums=[1,2,3,4,5,6,7,8,9,10];
function xyz(element){
    console.log(element)
}
nums.forEach(xyz)*/

//map

/*let number = [1,2,3,4]
let double = number.map(nam=>nam*2);
console.log(double);*/

// filter

/*let number =[1,2,3,4,5,6,7,8,9,10];
let even = number.filter(num=>num %2==0);
console.log(even)*/

// problem 1

/*let numbers=[1,2,3,4,5];
let double = numbers.map(num=>num*2);
console.log(double);
let even = numbers.filter(num=>num%2==0);
console.log(even)*/


//problem 2

/*student1={
name:"Ismail",
marks:40
};

student2={
    name:"haider",
    marks :60
};

student3 ={
    name:"hassam",
    marks:70
};
student4 ={
    name:"hassan",
    marks:65
};

let all=[student1,student2,student3,student4]

for(let i =0 ; i< all.length; i++){
if(all[i].marks > 50){
    console.log(`${all[i].name} you score the ${all[i].marks} marks, you are pass`)
} else{
    console.log(`${all[i].name} you score the  ${all[i].marks} marks, you are fail `)
}
}*/


// for each is used to print the all alements of array 
// map isused to create a new array updated



/*const word = "hello world"
let output = word.split(" ").map(word=>{
    return word[0].toUpperCase + word.slice(1);
}).join("  ");
console.log(output);*/


function special(str){
    for(let i = 0; i < str.length; i++){
        let isunique = true;

        for(let j=0; j < str.length; j++){
            if(i !== j && str[i] === str[j] ){
                isunique = false;
            }
        }

    if(isunique){
        return i;
    }   
}
    return -1
}
console.log(special("loveleetcode"));