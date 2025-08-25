// Practice: Find element 10 in [2,4,7,10,15]
let binarysearch = (num,target)=>{
    let start =0;
    let end =num.length-1;
    while(start<=end){
        let middle = Math.floor((start+end)/2);
        if(num[middle]===target){
            return middle;
        } else if(num[middle] < target){
            start = middle +1;
        } else {
            end = middle - 1;
        }
    }
return -1;
}
console.log(binarysearch([2,4,7,10,15],10))