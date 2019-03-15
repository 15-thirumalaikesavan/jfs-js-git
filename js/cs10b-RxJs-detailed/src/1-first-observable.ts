// import * as Rx from "rxjs/Observable";
import { Observable } from "rxjs/Observable";

//create an observable with subscribe function and observer
//An observable is a function that produces a stream of values to an observer over time. 
//A stream in the RxJS world simply represents values over time. 
//The .create() method accepts a single argument, which is a subscribe function.
//This subscribe function accepts an observer argument.
//syntax 1
var observable = Observable.create(function subscribe(observer:any) {
//the next function emits a single value
    observer.next('emitted value')
})

//syntax 2
// var observable = Observable.create((observer:any) => {
//     observer.next('emitted value')
// })

//subscribing to the observable
//observer subscribes to an observable
//an observable can have multiple observers
observable.subscribe((x:any) => console.log(x));

//tying observable to ui
observable.subscribe((x:any) => addItem(x));

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}