
let names = ["Ali", "Sara", "Zaid", "Hassan"];
let marks = [78, 92, 60, 55];

for(let i =0; i<names.length; i++){

    let grade;
    if(marks[i]>90){
      grade= 'A';
    } else if(marks[i]>80){
        grade = 'B';
    } else if(marks[i]>70){
        grade ='C';
    } else if(marks[i]>60){
        grade = 'D';
    } else{
        grade ='F';
    }

console.log(`${names[i]}, you got the ${grade} graade with the ${marks[i]}`);



}