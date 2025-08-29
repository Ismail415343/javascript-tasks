
// 1. practice problem 

/*let score =0;
function increasescore(points){
    score+=points;
    console.log(`+${points} pts`);

}


function decreasescore(points){
    score-=points;
    console.log(`-${points} pts`);

}
function getscore(){
    return score;
}
increasescore(5);
increasescore(7)
decreasescore(9);
decreasescore(5)

console.log(`the final score is ${getscore()} pts`)*/


// 2. practice problem



/*function multiply(n){
let multiplyer = n;
function second(x){
    console.log(x*n);
    
}
second(5);

}
multiply(6);*/


// leetcode problem

function createcounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`count increased to ${count}`)
    }
    return {increment}
}
const counter = createcounter()
counter.increment()
counter.increment()
counter.increment()