//closure 


/*let increment =()=>{
    let count = 0;
    count++;
    console.log(`count increased to ${count}`)
}

increment();
increment();
increment();
increment();*/


/*function createcounter(){
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
counter.increment()*/


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


/*let bankAccount=()=> {
  let balance = 100;
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = bankAccount();
console.log(account.deposit(540));  // 150
console.log(account.getBalance());*/





//bank account closure




/*let balance =100;
function deposit(amount){
   balance+=amount;
    console.log(`+${amount} .....`);

}

function withdraw(amount){
   balance-=amount;
    console.log(`-${amount} .....`);

}
function getamount(){
    return balance;
}
deposit(150);

console.log(`the final balance is ${getamount()}....`)*/


