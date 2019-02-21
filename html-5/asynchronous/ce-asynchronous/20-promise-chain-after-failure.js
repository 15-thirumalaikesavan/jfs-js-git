// Basically, a promise chain stops if there's an exception, looking down the chain for catch handlers instead. 
//ERROR HANDLED
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');   
    console.log('Do this');
})
.catch((error) => {
    console.log("ERROR HANDLED: " + error); 
    console.log('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});


// //ERROR UNHANDLED
// new Promise((resolve, reject) => {
//     console.log('Initial');
//     resolve();
// })
// .then(() => {
//     throw new Error('Something failed');   
//     console.log('Do this');
// })
// // .catch((error) => {
// //     console.log("ERROR HANDLED: " + error); 
// //     console.log('Do that');
// // })
// .then(() => {
//     console.log('Do this, no matter what happened before');
// });
