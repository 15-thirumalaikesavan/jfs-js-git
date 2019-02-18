//console.log("Welcome to the world of Node!");
//CommonJS : JavaScript Module System 
//CommonJS is a way of defining modules with the help of an exports object, that defines the module contents.
//CommonJS specifies that you need to have a require() function to fetch dependencies, 
//an exports variable to export module contents 

//1
// const products = require('./productData');
// console.log(products);
 
//2
const Product = require('./product');
const product = new Product(1, 'ng-book');
//DEBUG THE BELOW STATEMENT
//console.log(product.getDetails());

product.getDetails();

