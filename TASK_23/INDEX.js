//ARRAY MANIPULATION

let processScore = (score) =>{

    const uniquescore = [...new Set(score)]
    const highestscore = Math.max(...uniquescore)

    const sortedscore = uniquescore.sort((a,b)=>b-a)

    return{
        uniquescore,
        highestscore,
        sortedscore
        
    }

}
const scores = [70, 85, 60, 90, 75, 60, 85];
console.log(processScore(scores))

//Removing duplicates with Set: takes O(n) time because each element is inserted once, and extra space O(n) for the new array.
//Finding the highest score: takes O(n) because we check each element once.
//Sorting in descending order: takes O(n log n) because sorting is the most expensive step.