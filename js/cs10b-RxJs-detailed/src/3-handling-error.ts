// import * as Rx from "rxjs/Observable";
import { Observable } from "rxjs/Observable";

var observable = Observable.create((observer:any) => {
    try{
    observer.next('emitted value 1')
    observer.complete();
    console.log("observer completed!");
    //throw new Error("Error Test")
    observer.next('emitted value 2');
    observer.next('This value is omitted!')
} catch (err) {
    observer.error(err)
}
})

//observers read values coming from an observable. 
//An observer is simply a set of callbacks that accept notifications coming from the observer
// callbacks
// next
// error
// complete

observable.subscribe(
    (x:any) => logItem(x),
    (error:any) => logItem(error),
    () => logItem('Completed')
);

function logItem(val:any) {
    console.log("Test : " + val);
}