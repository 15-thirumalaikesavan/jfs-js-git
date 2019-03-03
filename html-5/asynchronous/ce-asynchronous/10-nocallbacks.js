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
  setTimeout(() => {
    //2 seconds to create product.
    products.push(product);
  }, 2000);
  //products.push(product);
}
function getProducts() {
  //1 second to fetch product
  setTimeout(() => {
    let template = '';
    products.forEach(product => {
      template += `<li>${product.productName}</li>`;
    });
    document.body.innerHTML = template;
  }, 1000);
}

createProduct({
  productId: 3,
  productName: 'Angular',
  price: 32.99,
  starRating: 4.5,
  image: '/assets/images/angular.png'
});

//The third product is not displayed.
getProducts();
