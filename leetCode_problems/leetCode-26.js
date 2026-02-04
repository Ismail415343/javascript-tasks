let remveDuplicate = (number)=>{

    if(number.length === 0){
        return 0;
    }
    let index = 1;
    for(let i = 1; i<number.length; i++){
        if(number[i] !== number[i-1]){
            number[index] =number[i];
            index++;
        }
    }
    return index;
}
let result = remveDuplicate([1,1,2,2,3,4])
console.log(result)