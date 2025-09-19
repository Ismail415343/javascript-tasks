// //ECOMMERCE CART SYSTEM

// let product1 = {   //object 1
//          id: 1,
// 		name: "Shirt",
// 		price: 40, 
// 	    quantity: 304
// }
// let product2 = {   //object 2
//          id: 2,
// 		name: "jacket",
// 		price: 55, 
// 	    quantity: 200
// }

// let product3 = {   //object 3
//          id: 3,
// 		name: "trouser",
// 		price: 24, 
// 	    quantity: 255
// }

// let product4 = {  //object 4
//          id: 4,
// 		name: "jeans",
// 		price: 30, 
// 	    quantity: 30
// }

// let cart = [product1,product2,product3,product4] //array of objects


// function additem(id,name,price,quantity=1){
// let existingitem = cart.find(item=>item.id===id)
// if(existingitem){
//       existingitem.quantity += quantity;
// } else{
//     cart.push({
//         id,
//         name,
//         price,
//         quantity: Math.max(1,quantity)
//     })
// }
// }

// function removeitem(id) {
//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i].id === id) {
//       cart.splice(i, 1);
//     }
//   }
// }

// function total(){
//     let sum=0;
//     for(let i=0; i<cart.length;i++){
//         sum+= cart[i].price * cart[i].quantity
//     }
//     return sum
// }

// additem(1, "Shirt", 25, 2)   
// additem(3, "Trouser", 24, 4)  
// additem(4, "Jeans", 30, 2)    
// additem(2, "Jacket", 55, 5)   
// removeitem(2)                 

// console.log("Total Price = " + total()+".00$")
// console.log("Cart =", cart)


let store =[
  {id:1, name: "shirt", price:40, stock:200},
  {id:2, name: "trouser", price:44, stock:200},
  {id:3, name: "jacket", price:34, stock:150},
  {id:4, name: "jeans", price:48, stock:250}
]

let cart =[]

function addItem(id,quantity=1){
let product = store.find(p=>p.id===id)
if(!product){
      return "product is not available"
} 
if (quantity > product.stock) {
    console.log("Not enough stock available.");
    return;
}
let existing = cart.find(item=>item.id===id)
if(existing){
  existing.quantity+=quantity;
}
else{
cart.push({
id:product.id,
 name: product.name,
price: product.price,
quantity: quantity
})
}
}
function removeItem(id,qty){
  let item = cart.find(p => p.id === id);
  if (item) {
    item.quantity -= qty;
    if (item.quantity <= 0) {
      cart = cart.filter(p => p.id !== id);
    }
  }
}
function total(){
    let sum=0;
    for(let i=0; i<cart.length;i++){
        sum+= cart[i].price * cart[i].quantity
    }
    return sum
}
addItem(1, 3); 
addItem(5, 1);   
removeItem(1, 2); 
console.log("Cart:", cart);    
console.log("Store:", store); 
console.log("Total Price = $" + total());