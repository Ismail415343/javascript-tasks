
// charAt

/*let name = "ismail";
console.log(name.charAt(5));*/

//indexof

/*let firstName = "MUSA";
console.log(firstName.indexOf("S"));
console.log(firstName.lastIndexOf("M"))*/

//length

/*let salary = '100000';
console.log(salary.length)*/

//trim

/*let username="    musa     ";
username = username.trim();
console.log(username);*/


//uppercase

/*let nake = "muhammad isamil";
nake = nake.toUpperCase();
console.log(nake)*/


//lowercase

/*let namee = "MuhAmMaD ISmaIL";
namee =namee.toLowerCase();
console.log(namee)*/

//repeat

/*let namee = "MuhAmMaD ISmaIL";
namee =namee.repeat(5);
console.log(namee)*/


// startswith (true false)


/*let fname = "Musa";
let result = fname.startsWith("M");
console.log(result)*/

//endsWith

/*let fname = "Musa";
let result = fname.endsWith("a");
console.log(result)*/

//includes

/*let fname = "Musa";
let result = fname.includes("M");
console.log(result)*/


//replaceAll

/*let phonenum = "+92-323-27719843"
phonenum=phonenum.replaceAll("-",'');
console.log(phonenum)*/


//padStart  howlong, what added to start

/*let phonenum = "+92-323-27719843"
phonenum = phonenum.padStart(20, "8");
console.log(phonenum)*/


//padEnd

/*let phonenum = "+92-323-27719843"
phonenum = phonenum.padEnd(21, "10");
console.log(phonenum)*/


// string slicing


/*const fullname = "Muhammad Ismail";

let firstName = fullname.slice(0,8);
let lastname = fullname.slice(9,17);
console.log(firstName)
console.log(lastname)*/

//split

/*const name = "ISMAIL";
let result = name.split("");
console.log(result)*/

//substing

/*const namme = "musa";
let result = namme.substring(-5,5)
console.log(result);*/

// substr

/*let fname = "script";
let result = fname.substr(-6,6).split("").reverse().join("");
console.log(result)*/


/*let fname = "script";
let result = fname.join("");
console.log(result)*/



// problem 1

/*let inp = "hello";
let result = inp.substr(-5,5).split("").reverse().join("");
console.log(result);*/


// problem 2

/*let namee = "madam";

let result = namee.substr(-5,5);
let reversed = result.split('').reverse().join("")

if(result==reversed){
    console.log("true")
} else {
    console.log("false")
}*/


//problem 3

/*let nam = "javascript";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for(let char of nam){
    if (vowels.includes(char)){
    
    count ++;
    console.log(`${char} is the vowel, count: ${count}`)
} else{
    console.log("desnt contain vowels");
}
}*/

// problem 4

/*let input = "hello world"
let output = input.replaceAll('h',"H").replaceAll('w','W');
//let output2 = input.replaceAll('w', 'W');
console.log(output)*/


// problem 5

/*function longestword(sentence){

let word = sentence.split(" ");
let longest = word.reduce((a,b) => a.length >= b.length? a:b);
return longest; 

}

let sentence = "The quicker brown fox jumperss over the lazy dog";
console.log( longestword(sentence));*/
