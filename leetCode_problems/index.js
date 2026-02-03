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


// 3. Longest Substring Without Repeating Characters

let longestCharacterLength =(s)=>{


    let maxLength = 0;

    for(let i = 0; i < s.length; i++){
        let visited = ''

        for(let j = i; j< s.length; j++){
            if (visited.includes(s[j])) {
                break;
            }
              visited += s[j];

            if (visited.length > maxLength) {
                maxLength = visited.length;
            }
        }


    }
    return maxLength;
}

console.log(longestCharacterLength("abcabcbb")); 
console.log(longestCharacterLength("bbbbb"));   
console.log(longestCharacterLength("pwwkew")); 