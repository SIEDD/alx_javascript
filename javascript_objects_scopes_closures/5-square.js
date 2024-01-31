const Rectangle = require('./4-rectangle.js');

class Square extends Rectangle {
  constructor(size) {
    
    super(size, size);
  }
}
module.exports = Rectangle;

const mySquare = new Square(5);
console.log(mySquare); 
mySquare.print();


mySquare.rotate();
console.log("Square after rotate():");
mySquare.print();

mySquare.double();
console.log("Square after double():");
mySquare.print();

