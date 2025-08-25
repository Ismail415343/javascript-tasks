// const bubblesort =(arr)=>{
//     const n = arr.length;

//     for(let i=0 ; i< n.length;i++){
//         for(let j=0; j <n-i-1;j++){
//             if(arr[j]> arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
// return arr;
// }
// console.log(bubblesort([32,453,54,54565,7,32443,634,243]))



const x =(num,target )=>{
for(let i=0;i<num.length;i++){
    if(target===num[i]){
        return i;
    }
}
return -1;
}
console.log(x([2,3,5,1,2,56],56))