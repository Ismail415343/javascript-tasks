// – Compare
// 	•	Linear Search → O(n)
// 	•	Binary Search → O(log n)
// 	•	Do same problem with both and compare efficiency.


//binary search


// let binarysearch = (num,target)=>{
//     let start =0;
//     let end =num.length-1;
//     while(start<=end){
//         let middle = Math.floor((start+end)/2);
//         if(num[middle]===target){
//             return middle;
//         } else if(num[middle] < target){
//             start = middle +1;
//         } else {
//             end = middle - 1;
//         }
//     }
// return -1;
// }
// console.log(binarysearch([2,4,7,10,15],10))

//linear search

// const linearsearch = (nums,target)=>{
//     for(let i = 0 ; i<nums.length; i++){
//         if(target ===nums[i]){
//             return i;
//         }
//     }
// return -1;
// }
// console.log(linearsearch([2,4,7,10,15],10))


// Linear Search → O(n), checks each element one by one (slower for large arrays).
// Binary Search → O(log n), cuts the array in half each step (much faster on sorted arrays).