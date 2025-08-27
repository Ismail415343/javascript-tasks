// const sum =(nums,target)=>{
//  for (let i = 0; i < nums.length; i++) {
//         if (target === nums[i]) {
//             return i;
//         }
//          else if (nums[i] > target) {
//             return nums[i] < target;
//         }
//     }
//     return -1;

// }
// console.log(sum([1, 3, 5, 6], 5));  
// console.log(sum([1, 3, 5, 7], 2));  


// const  sum=(nums, target)=> {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(sum([1, 3, 5, 6], 6)); 
// console.log(sum([1, 3, 5, 6], 7));


const x=(nums, target) =>{

    for (let i = 0; i < nums.length; i++) {

        if (target ===nums[i]) {
            return i;
        }
        else if (target < nums[i]) {
            return i;
        }
        else if (target > nums[i]) {
            nums.push(target);
        }
    }
    return -1
}
console.log(x([1, 3, 5, 6], 5))
console.log(x([1, 3, 5, 6], 2));
console.log(x([1, 3, 5, 6], 7));  