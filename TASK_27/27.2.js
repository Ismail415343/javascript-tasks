// leetcode

let intersection =(num1,num2)=>{
const array1 = [];
const array2 = []

for(let num of num1){
    if(array1[num]){
        array1[num]++
    }
    else{
        array1[num]=1;
    }
}
for(let num of num2){
    if(array1[num]>0){
       array2.push(num)
       array1[num]--;
    } 
    
}
return array2

}
console.log( intersection([1,2,2,1], [2,2]))
console.log( intersection([4,9,5],  [9,4,9,8,4]))

//The time complexity is O(n) because the code runs through both arrays once.
//The space complexity is also O(n) since we store the counts of elements in an extra object.