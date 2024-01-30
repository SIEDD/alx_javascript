// #!/usr/bin/node
// class Rectangle {
//     constructor(w, h){
//     if (w>0 && h>0){
//         this.width = w=2;
//         this.height = h=3;
//         } 
//     }
//     print () {
//         const chr = 'X';
//         for (let i = 0; i < this.height; i++){
//             console.log(chr.repeat(this.width))
//         }
//     }
// }
// module.exports = Rectangle; 

  
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
}
module.exports = Rectangle;
  
