// Importing Class Rectangle form a precious file
const Rectangle = require('./4-rectangle')
// Class Square that extends Rectangle
class Square extends Rectangle {
    constructor(size){
        super(size, size);
    };
};
module.exports = Square;