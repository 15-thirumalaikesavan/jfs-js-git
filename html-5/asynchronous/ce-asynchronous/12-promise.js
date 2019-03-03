/* eslint-disable */
const products = [
  {
    productId: 1,
    productName: 'ng-book',
    price: 19.95,
    starRating: 3.2,
    image: 'angular.png'
  },
  {
    productId: 2,
    productName: 'Pro Angular',
    price: 32.99,
    starRating: 4.2,
    image: 'proangular.jpg'
  }
];
function createProduct(product) {
  console.log('createProduct');
  return new Promise((resolve, reject) => {
    //setTimeout(() => {
      //2 seconds to create product.
      products.push(product);
      const error = false;
      //const error = true;
      if (!error) {
        console.log('resolving promise!');
        resolve();
      } else {
        console.log('error occured!');
        reject('Error Occured and promise is rejected!');
      }
   // }, 2000);
  });
}
function getProducts() {
  console.log('getProducts');

  //1 second to fetch product
  //setTimeout(() => {
    let template = '';
    products.forEach(product => {
      template += `<li>${product.productName}</li>`;
    });
    document.body.innerHTML = template;
  //}, 1000);
}

createProduct({
  productId: 3,
  productName: 'Angular',
  price: 32.99,
  starRating: 4.5,
  image: '/assets/images/angular.png'
})
  .then(getProducts)
  .catch(function(error) {
    console.log('ERROR > ' + error);
  });
// fat arrow function
// .catch(error => console.log(error));
