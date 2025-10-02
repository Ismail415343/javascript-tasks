let events = [
    {id:1,name:"tech summit",price: 500, seats:50, totalRevenue:0},
    {id:2,name:"music fest",price: 500, seats:50, totalRevenue:0},
    {id:3,name:"startup pitch",price: 500, seats:50, totalRevenue:0},
]
let userSpending={}

function bookTicket(user,eventId,tickets){
let event = null;
for(let i=0; i<events.length;i++){
    if(events[i].id===eventId){
event=events[i]
break;
    }
}
if(!event){
    console.log("event not found")
    return;
}

if(event.seats<tickets){
    console.log(`no more seats available for ${event.name}`)
    return;
}
let total = event.price*tickets;
event.seats -= tickets;
event.totalRevenue += total;


if(!userSpending[user.id]){
    userSpending[user.id] = 0;
}
userSpending[user.id] += total;


let word;
if (tickets>1) {
    word = "tickets"
} else{
    word = "ticket"
}

console.log(`user ${user.name} booked ${tickets} ${word} , (total: ${total})`)


}
function printSummary(users){
 console.log("\n ---event revenues---")
 for(let i = 0; i<events.length;i++){
    console.log(`${events[i].name}: RS: ${events[i].totalRevenue}`)
 }   

let topUserId = null;
let maxSpent = -Infinity;
for(let key in userSpending){
    if(userSpending[key] > maxSpent){
        maxSpent=userSpending[key];
        topUserId=key;
    }
}
let topUser = users.find(u=>u.id==topUserId)
console.log(`\nUser who spent most is ${topUser.name}: spent ${maxSpent}`)




let soldOutEvent = events.filter(e=>e.seats===0).map(e=>e.name)
    console.log(`\nSold Out Events: ${soldOutEvent.join(", ") || "None"}`);

}
async function main() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();

    bookTicket(users[0], 1,4);
    bookTicket(users[1], 2,3); 
    bookTicket(users[2], 3,1);
    bookTicket(users[2], 3,5); 
    printSummary(users);

  } catch (err) {
    console.error("Error fetching users:", err);
  }
}
main()