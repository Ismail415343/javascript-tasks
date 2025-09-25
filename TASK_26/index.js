// bankin system

let accounts = [
    {accountNumber:1000211100, name:"haider", balance:50000},
    {accountNumber:1000311100, name:"hassan", balance:80000},
    {accountNumber:1000411100, name:"ismail", balance:100000},

]

function deposit(accountNumber,amount){
    for(let acc of accounts){
if(acc.accountNumber===accountNumber){
    acc.balance+=amount;
    console.log(`deposited ${amount} to ${acc.name}`)
}
    }
}

function withdrawl(index,amount){
if(amount > 0 && accounts[index].balance>=amount){
accounts[index].balance -= amount;
console.log(`withdrawl ${amount} from ${accounts[index].name}`)
} else{
    console.log("you have not enough amount")
}
}

function transfer(from,to,amount){
if(amount>0 && accounts[from].balance >= amount){
    accounts[from].balance -= amount;
    accounts[to].balance += amount
    console.log(`${accounts[from].name} transferred ${amount} to the ${accounts[to].name}`)
} else {
    console.log("not enough amount to transferred")
}
}


function richCustomer(){
    let rich = accounts[0];
    if(accounts[1].balance> accounts[2].balance){
        console.log(`${accounts[1].name} is the richest customer`)
    } else if(accounts[2].balance> accounts[1].balance){
        console.log(`${accounts[2].name} is the richest customer`)
    }
}


function total(){
    let total = accounts[0].balance + accounts[1].balance + accounts[2].balance 
    console.log(`total balance os bank is ${total}$`)
}
console.log(accounts[0])
deposit(1000211100,300)
console.log(accounts[0])
withdrawl(0,500)
console.log(accounts[0])
total();
richCustomer();