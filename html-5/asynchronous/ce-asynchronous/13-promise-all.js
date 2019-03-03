// //PHASE 1
// /* eslint-disable */
// const products = [
//   {
//     productId: 1,
//     productName: 'ng-book',
//     price: 19.95,
//     starRating: 3.2,
//     image: 'angular.png'
//   },
//   {
//     productId: 2,
//     productName: 'Pro Angular',
//     price: 32.99,
//     starRating: 4.2,
//     image: 'proangular.jpg'
//   }
// ];

// function createProduct(product) {
//   console.log('createProduct');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //2 seconds to create product.
//       products.push(product);
//       const error = false;
//       //const error = true;
//       if (!error) {
//         console.log('resolving promise!');
//         resolve();
//         //resolve("Promise Resolved");
//       } else {
//         console.log('error occured!');
//         reject('Error Occured and promise is rejected!');
//       }
//     }, 2000);
//   });
// }
// function getProducts() {
//   console.log('getProducts');

//   //1 second to fetch product
//   setTimeout(() => {
//     let template = '';
//     products.forEach(product => {
//       template += `<li>${product.productName}</li>`;
//     });
//     document.body.innerHTML = template;
//   }, 1000);
// }

// createProduct({
//   productId: 3,
//   productName: 'Angular',
//   price: 32.99,
//   starRating: 4.5,
//   image: '/assets/images/angular.png' 
// })
//   .then(getProducts)
//   .catch(function(error) {
//     console.log('ERROR > ' + error);
//   });
// // fat arrow function
// // .catch(error => console.log(error));

//PHASE 2
console.log('******************');

const promise0 = new Promise((resolve, reject) => {
  setTimeout(resolve,5000,'after 5 seconds');
});

const promise1 = "A PROMISE means EVERYTHING, but once it is broken SORRY means NOTHING.";
const promise2 = 100;
//const promise3 = false;
const promise3 = null;
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve,3000,'Javascript promises are awesome.');
});
const promise5 = fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json());

const promise6 = new Promise((resolve, reject) => {
  setTimeout(function(){
    console.log("Error here!");
    throw new Error("Error occured!");
  },10000);
});


Promise.all([promise0, promise1,promise2,promise3,promise4,promise5,promise0]).then(values => console.log(values));


// Promise.all([promise1,promise2,promise3,promise4, createProduct({
//   productId: 3,
//   productName: 'Angular',
//   price: 32.99,
//   starRating: 4.5,
//   image: '/assets/images/angular.png'
// })]).then(values => console.log(values));