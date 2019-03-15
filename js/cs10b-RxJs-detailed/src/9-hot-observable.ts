import { fromEvent } from 'rxjs/observable/fromEvent';

//A truly hot observable, because for the first 5 seconds, the observable is still recording the mouse movements even though no subscriptions are created.

//creation operators
// Of
// FromEventPattern
// FromEvent
// FromPromise
// Interval
// Range
// Timer
// Empty
// Throw
// Never
var observable = fromEvent(document, 'mousemove')
console.log("start");

setTimeout(() => {
    var subscription = observable.subscribe(
        (event:any) => display(event.clientX)
    )
},5000);

function display(val:any) {

  document.getElementById("output").innerHTML = val;
}
console.log("end")