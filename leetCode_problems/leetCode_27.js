let removeElement = (num, val)=>{
let k = 0;

for(let i = 0; i < num.length; i++){
    if(num[i] !== val){
        num[k]=num[i];
        k++;

    }

}
return k;

}

let num = [3,2,2,3,4,2];
let val = 2;

let newLength = removeElement(num,val);
console.log(num.slice(0,newLength));