// Student Grading System

let students = [
    { id:1, name:"Ismail", marks:{english:79,maths:40,ds:90}},
    {id:2, name:"haider", marks:{english:70,maths:44,ds:90}},
    {id:3, name:"hassan", marks:{english:79,maths:80,ds:50}},
    {id:4, name:"ali", marks:{english:98,maths:85,ds:30}}

]

function findAvg(marks){
    let value = Object.values(marks)
    let sum =0
    for(let i=0;i<value.length;i++){
        sum+=value[i]
    }
    return sum/value.length;
}



let assignGrades=(students)=>{

for(let i=0;i<students.length;i++){
    let avg = findAvg(students[i].marks);

 if (avg >= 90) console.log(students[i].name,"Grade: A");
   else if (avg >= 80) console.log(students[i].name,"Grade: B");
else if (avg >= 70) console.log(students[i].name,"Grade: C");
  else if (avg >= 60) console.log(students[i].name,"Grade: D");
 else if(avg<=50) console.log(students[i].name,"Grade: F");
    }
    return students;
}


let findTopper=(students)=>{
    let topper = students[0]

    for(let i=0; i<students.length;i++){
        if(findAvg(students[i].marks)>findAvg(topper.marks)){
            topper = students[i]
        }
    }
    return topper;
}



let listFailures=(students)=>{
    let failure =[];
 for(let i=0;i<students.length;i++){
    let avg = findAvg(students[i].marks);
    if(avg<=50){
    failure.push(students[i])
    }
 }   
 return failure;
}

assignGrades(students);

console.log("All Students with Grades:",students);
console.log("Topper:", findTopper(students));
console.log("Failures:", listFailures(students));



//Time: O(n) (linear in number of students).
//Space: O(n) in worst case (if all students are failures).


