//  mini project library management system

class book{
    constructor(title,author,year){
this.author=author
this.title=title
this.year=year
    }
}
class library{
    constructor(){
        this.book=[]
    }
    addbook(book){
        this.book.push(book)

    }removebook(author){
    this.book=this.book.filter(b=>b.author !==author)

}
showbook(){
    console.log(this.book)
}
}
let lib = new library();
let b1 = new book("The Alchemist", "Paulo Coelho", 1988);
let b2 = new book("1984", "George Orwell", 1949);

lib.addbook(b1)
lib.addbook(b2)

lib.showbook();

lib.removebook("Paulo Coelho")
lib.showbook();