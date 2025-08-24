const bubblesort = (arr)=>{
const n = arr.length
for(let i = 0 ; i<n.length;i++){
    for(j=0;j<n-i-1;j++){
if(arr[j]>arr[j=1]){
    [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
}
    }
}
return arr;
}
console.log(bubblesort([3,4,64,64,67,456,323,9450]))