const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/temp'), {}, err => {
//   if (err) throw err;
//   console.log('Folder created...');
// });

// Create and write to file asynchronously
// fs.writeFile(
//   path.join(__dirname, '/temp', 'message.txt'),
//   'Node is powered by Chrome v8 engine!',
//   err => {
//     if (err) throw err;
//     console.log('File written to...');

//     // File append
//     fs.appendFile(
//       path.join(__dirname, '/temp', 'message.txt'),
//       ' Node was created by Ryan Dahl!',
//       err => {
//         if (err) throw err;
//         console.log('File written to...');
//       }
//     );
//   }
// );

// Read file
// fs.readFile(path.join(__dirname, '/temp', 'message.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file
// fs.rename(
//   path.join(__dirname, '/temp', 'message.txt'),
//   path.join(__dirname, '/temp', 'message-backup.txt'),
//   err => {
//     if (err) throw err;
//     console.log('File renamed...');
//   }
// );

// WRITE THE FOLLOWING PRODUCTS IN  A FILE  AND THEN DISPLAY THEM
// const products = [
//     {
//       productId: 1,
//       productName: 'ng-book',
//       price: 19.95,
//       starRating: 3.2,
//       image: 'angular.png'
//     },
//     {
//       productId: 2,
//       productName: 'Pro Angular',
//       price: 32.99,
//       starRating: 4.2,
//       image: 'proangular.jpg'
//     }
//   ];


// // create folder
// fs.mkdir(path.join(__dirname, "/data"), {}, err => {
//   if (err) throw err;

//   console.log("Folder created ...");

//   // create file and write json data
//   fs.writeFile(path.join(__dirname, "/data", "products.json"), JSON.stringify(products), err => {
//     if (err) throw err;

//     console.log("File created and data written ...")

//     //read file
//     fs.readFile(path.join(__dirname, "/data", "products.json"), "utf8", (err, products) => {
//       if (err) throw err;

//       // display user name
//       JSON.parse(products).forEach(product => {
//         console.log(product.productName);
//       });

//       // display successful message
//       console.log("Product Names displayed ...")


//       // rename the file
//       fs.rename(path.join(__dirname, "/data", "products.json"), path.join(__dirname, "/data", "products-backup.json"), err => {
//         if (err) throw err;

//         // display successful message
//         console.log("File rename completed ...");
//       });

//     });
//   });
// })

// delete a folder
// NOTE : you must create a folder named "delete".
// NOTE : delete must be an empty folder.
fs.rmdir(path.join(__dirname, "/delete"), (err) => {
  if (err) throw err;

  console.log("Folder deleted ...");
});

//ERROR
// ENOENT : It's an abbreviation of Error NO ENTry (or Error NO ENTity), 
// and can actually be used for more than files/directories.


