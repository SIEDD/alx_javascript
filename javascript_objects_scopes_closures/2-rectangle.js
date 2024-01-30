class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0 && Number.isInteger(w) && Number.isInteger(h)) {
        this.width = w;
        this.height = h;
      } else {
        console.warn("Invalid width or height. Creating an empty rectangle.");
      }
    }
  }
module.exports = Rectangle; 

  
