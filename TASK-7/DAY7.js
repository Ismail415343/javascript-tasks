/*const Arrowsum=(a,b)=>{
    console.log(a+b);
}
Arrowsum(3,5);*/


/*function cnicadd(n,a,s,f){

console.log(n,a,s,f)

}
cnicadd("street ", 1, "flat ", 402, "PC KARACHI")*/

/*function calculator(a,b){
s=a+b;
return s;
}
calculator(3,5);
console.log(s);*/

/*let calculator = (a,b)=>{
    s = a+b;
    return s;
}
calculator(3,9);
console.log("the sum is",s)*/


/*function student1(name,marks,cgpa){
console.log("the name is ",name);
console.log("the marks are ",marks);
console.log("the cgpa is ",cgpa)
}
student1("ismail",85,3.5);*/


/*function greetuser(name){
    console.log("hello mr ",name);
}
greetuser("ismail")*/

/*function isEven(num){
if(num%2==0){
    console.log("the num is even",num)
} else {
    console.log("this is not even")
}
}
isEven(18)*/


/*function FirstElement(array){
    return array[0];
}
console.log(FirstElement(["ismial","haider","hassan"]))*/


/*function fl(first,last){
    return first + " " + last;
}
console.log(fl("muhammad ", "ismail"))*/


// factorial

/*function factorial(n){
    if(n==0 || n==1){
        return 1;

    } else{
        return n * factorial (n-1);
    }
}
console.log(factorial(5));*/


// max of two numbers

// function max(a,b){
//     if(a==b){
//     console.log("equal ");
//     } else if(a>b){
//         console.log("the a is greater than b" ,a)
//     } else{
//         console.log("the b is greater than a",b)
//     }
// }
// max(4,6)



/*function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {

  reversed = reversed + str[i];
  }
  return reversed;
}
console.log(reverseString("musa")); */


let arr = [10, 5, 8, 20, 19];
function secondLargest(arr) {
    let max = arr[0], second = -1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            second = max;
            max = arr[i];
        } else if (arr[i] < max && arr[i] > second) {
            second = arr[i];
        }
      }  return second;
}
console.log(secondLargest(arr));