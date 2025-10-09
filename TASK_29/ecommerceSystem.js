
let products = [
  { id: 1, name: 'trousers', price: 60, stock: 50 },
  { id: 2, name: 'shirt', price: 67, stock: 55 },
  { id: 3, name: 'pants', price: 90, stock: 70 },
  { id: 4, name: 'cap', price: 25, stock: 40 },
  { id: 5, name: 'bracelet', price: 30, stock: 10 }
];

let totalRevenue = 0;
let userSpending = {};

function order(user, ids, quantities) {
 
  if (ids.length !== quantities.length) {
    console.log(`Error: Mismatched IDs and quantities for ${user}.`);
    return;
  }

  for (let i = 0; i < ids.length; i++) {
    let id = ids[i];
    let quantity = quantities[i];

    if (quantity <= 0) {
      console.log(`Invalid quantity (${quantity}) for ${user}. Skipping...`);
      continue;
    }

    const product = products.find(p => p.id === id);
    if (!product) {
      console.log(`Product with ID ${id} not found for ${user}.`);
      continue;
    }

  
    if (product.stock >= quantity) {
      product.stock -= quantity;

      const orderTotal = product.price * quantity;
      totalRevenue += orderTotal;

      console.log(`${user} bought (${quantity}) x ${product.name} = $${orderTotal}`);
      userSpending[user] = (userSpending[user] || 0) + orderTotal;
    } else {
      console.log(`❌ Sorry ${user}, not enough stock for ${product.name} (Available: ${product.stock})`);
    }
  }
}

function printSummary() {
  console.log("\n User Spendings:", userSpending);
  console.log(" Total Revenue:", totalRevenue);

  console.log("\n Remaining Stocks After Shopping:");
  for (let key of products) {
    console.log(`${key.name}: ${key.stock} left`);
    if (key.stock < 5) {
      console.log(`⚠️ Low Stock Alert: ${key.name}`);
    }
  }

 
  let topUser = null;
  let maxSpent = 0;
  for (let user in userSpending) {
    if (userSpending[user] > maxSpent) {
      maxSpent = userSpending[user];
      topUser = user;
    }
  }

  console.log(`\n👑 Top Spender: ${topUser} ($${maxSpent})`);
}


order("Ismail", [1, 4, 5], [4, 7, 2]);
order("Haider", [2, 4, 1], [6, 9, 10]);


printSummary();