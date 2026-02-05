let removeDuplicate = (number)=>{


let index = 1;
for(let i = 0; i< number.length; i++){
    if(number[i] !== number[i+1]){
        number[index] = number[i+1];
        index++;
    }
}
return index ;
}
console.log(removeDuplicate([1,2,3,2,2,1,3,2,4,2,1,2]));
