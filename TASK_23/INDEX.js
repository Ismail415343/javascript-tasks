//ARRAY MANIPULATION

let array = [70, 85, 60, 90, 75, 60, 85]

// remove duplicate

function removeDuplicate(array){
  return array.filter ((el,index)=>array.indexOf(el)===index)
}

// finding the largest number


function largestValue(array){
    let largest = array[0];
    for(let i = 0; i< array.length; i++){
        if(array[i]>largest){
            largest = array[i]
        }

    }
    return largest;
}
let largest = largestValue(array);
// console.log(largest);
// console.log(removeDuplicate(array))

function sortArray(array){
    const unique = removeDuplicate(array)
    const n = unique.length
    for(let i = 0; i< n ; i++){
        for(let j = 0; j<n-i-1; j++){
            if(unique[j]<unique[j+1]){
                [unique[j],unique[j+1]] = [unique[j+1],unique[j]]
            }
        }
    }
    return unique;
}

console.log(largest);
console.log(removeDuplicate(array))
console.log(sortArray(array))

//Removing duplicates with Set: takes O(n) time because each element is inserted once, and extra space O(n) for the new array.
//Finding the highest score: takes O(n) because we check each element once.
//Sorting in descending order: takes O(n log n) because sorting is the most expensive step.