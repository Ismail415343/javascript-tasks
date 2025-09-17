//ECOMMERCE CART SYSTEM

let product1 = {
         id: 1,
		name: "Shirt",
		price: 40, 
	    quantity: 304
}
let product2 = {
         id: 2,
		name: "jacket",
		price: 55, 
	    quantity: 200
}

let product3 = {
         id: 3,
		name: "trouser",
		price: 24, 
	    quantity: 255
}

let product4 = {
         id: 4,
		name: "jeans",
		price: 30, 
	    quantity: 30
}

let cart = [product1,product2,product3,product4]


function additem(id,name,price,quantity=1){
let existingitem = cart.find(item=>item.id===id)
if(existingitem){
      existingitem.quantity += quantity;
} else{
    cart.push({
        id,
        name,
        price,
        quantity: Math.max(1,quantity)
    })
}
}

function removeitem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart.splice(i, 1);
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

additem(1, "Shirt", 25, 2)   
additem(3, "Trouser", 24, 4)  
additem(4, "Jeans", 30, 2)    
additem(2, "Jacket", 55, 5)   
removeitem(2)                 

console.log("Total Price = " + total()+".00$")
console.log("Cart =", cart)