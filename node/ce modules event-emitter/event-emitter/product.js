// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })

// DISPLAYING THE VALUES SUPPLIED BY THE MODULE WRAPPER FUNCTION
console.log(__dirname, __filename);
console.log(exports  + '\n\n', require + '\n\n' , module + '\n\n', __filename + '\n\n'  , __dirname + '\n\n'  );

class Product {
    constructor(productId, productName) {
      this.productId = productId;
      this.productName = productName;
    }
  
    getDetails() {
      console.log(`Id : ${this.productId} , Name : ${this.productName}`);
    }
  }
  
  module.exports = Product;