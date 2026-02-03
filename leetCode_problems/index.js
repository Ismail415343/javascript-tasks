let fn =(arr)=>{

    let longest ='';
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }

    return longest; 

}
const word = ["apple", ""]
console.log(fn(word))