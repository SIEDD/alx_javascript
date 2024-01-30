class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0 && Number.isInteger(w) && Number.isInteger(h)) {
        this.width = w;
        this.height = h;
      } 
    }
  
    print() {
      // Check if the instance is not empty
      if (this.width && this.height) {
        for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
        }
      } 
    }
  
    rotate() {
      // Swap the values of width and height
      [this.width, this.height] = [this.height, this.width];
    }
  
    double() {
      // Double the values of width and height
      this.width *= 2;
      this.height *= 2;
    }
  }
  module.exports = Rectangle;
  
