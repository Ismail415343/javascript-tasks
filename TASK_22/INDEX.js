//practice taks

function Shape() {}
Shape.prototype.area = function() {
  return 0;
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function() {
  return this.width * this.height;
};
let r1 = new Rectangle(5, 8);
console.log(r1.area());


//leet code problem

let reverseNum = (num)=>{
let myreversenum = num.toString().split("").reverse().join("")
if(myreversenum.endsWith("-")){
myreversenum = "-" + myreversenum
return parseInt(myreversenum)
} else {
  return parseInt(myreversenum)
}

}
console.log(reverseNum(-1234))

//Complexity:

//Time Complexity: O(n) 
//where n is the number of digits in x.
//(We convert to string, reverse, and parse — each step linear in digits.)

//Space Complexity: O(n) 
//extra space is needed for the string and array during reversal.


//problem.2

let removeDuplicate = (num)=>{
if(num.length === 0 ){
return 0;
}
let i = 0;

for(let j=1;j<num.length;j++){
  if(num[j] !==num[i]  ){
    i++;
    num[i]=num[j]
  }
}
return i +1;
}
let array=[1,2,2,3]
let lgth = removeDuplicate(array);
console.log(lgth)
console.log(array.slice(0,lgth));



//Complexity:
//Time Complexity: O(n) 
//one pass through the array with two pointers.
//Space Complexity: O(1) 
//in-place, no extra array is used.
