#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w=10;
        this.height = h=5;
      } 
    }

    print () {
        const chr = 'x'
        for (let i = 0; i < this.height; i++){
            console.log(chr.repeat(this.width))
        }
    }
}
module.exports = Rectangle; 

  

