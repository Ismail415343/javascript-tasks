// binary search
const x = (nums,target)=>{
    let start = 0;
    let end = nums.length-1;

    while(start <=end){
        let middle = Math.floor((start+end)/2);

        if(nums[middle]===target){
            return middle;
        } else if(nums[middle]<target){
            start = middle + 1;
        } else{
            end = middle-1;
        }
    }
    return -1;
}
// time complexity O(logn)
//space complexity O(1)
space
console.log(x([-1,0,3,5,9,12],9))
console.log(x([-1,0,3,5,9,12],99))