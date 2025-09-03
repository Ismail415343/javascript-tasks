// creating multiple instances4

// class car {
//     constructor(brand,model){
//         this.brand = brand
//         this.model=model
//     }

// }
// const c1 = new car("bmw ","m5")
// const c2 = new car("honda ","rs")
// console.log(c1.brand + c1.model)
// console.log(c2.brand + c2.model)

class product {
    constructor(price,name,quantity){
        this.price=price;
        this.quantity=quantity
        this.name=name;
    }

}

let p1 = new product("10$ ","pen ",1000);
console.log(p1.name+ p1.quantity)