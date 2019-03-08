// import * as Rx from "rxjs/Observable";
import { Observable } from "rxjs/Observable";

var observable = Observable.create((observer:any) => {
    observer.next('emitted value 1')
    observer.next('emitted value 2')
    observer.complete()
    observer.next('This value is omitted!')
})

//observers read values coming from an observable. 
//An observer is simply a set of callbacks that accept notifications coming from the observer
// callbacks
// next
// error
// complete

observable.subscribe(
    (value:any) => console.log('next ' + value),
    (error:any) => console.log('error ' + error),
    () => console.log('complete '+'completed')
);