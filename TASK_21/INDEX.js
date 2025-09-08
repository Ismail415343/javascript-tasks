//– Private Fields & Practical Task

/*class bankacc{
    #balance=90;
    deposit(amount){
this.#balance +=amount; 
    }
get balance (){
    return this.#balance;
}
}
let acc = new bankacc()
acc.deposit(190);
console.log(acc.balance)*/

class bankacc{
    #balance;
    constructor(initialbalance = 0){
this.#balance=initialbalance;
    }

deposit(amount){
if(amount>0){
    this.#balance+=amount
    console.log(`deposit: $${amount}`)
} else{
    console.log("deposit amount must be positive")
}
}
withdrawl(amount){
if(amount > 0 && amount <= this.balance){
    this.#balance  -= amount
    console.log(`withdrawl $${amount}`)
} else{
    console.log("Insufficient balance or invalid amount!");
}
}

get balance(){
   return this.#balance
}
}
let acc = new bankacc();
acc.deposit(80);
console.log("balance after deposit is ",acc.balance);
acc.withdrawl(56)
console.log("balance after withdrawl is ",acc.balance);
