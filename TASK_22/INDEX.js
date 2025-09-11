function Shape() {}

Shape.prototype.area = function() {
  return 0;
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

let r1 = new Rectangle(5, 8);
console.log(r1.area()); 