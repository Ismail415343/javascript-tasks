function isValid(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

for(let char of s){
if(char==="(" ||char==="[" ||char==="{" ){
    stack.push(char)
} else {
if(stack.length===0||stack.pop()!==mapping[char]){
return false
}
}
}
return stack.length===0

}
console.log(isValid("{[()]}"))