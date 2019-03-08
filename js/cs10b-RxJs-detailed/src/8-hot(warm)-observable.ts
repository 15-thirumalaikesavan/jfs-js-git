//A hot observable
//An observable is hot when the producer is emitting values outside of the observable.
//use the .share() operator, it will share the same source to multiple subscribers.
// results in only 1 network request if you're dealing with an API.
//This is warm because we've converted our cold observable to a warm observable.
//A truly hot observable is one that emits values without a subscriber having subscribed to it. 
//An example of a hot observable would be mouse movements made by a user.

import { Observable } from 'rxjs/Observable';
//import the share operator
import 'rxjs/add/operator/share';
var observable = Observable.create((observer: any) => {
  try {
    observer.next('emitted value 1');
    //observer.complete();
    let counter: number = 0;
    setInterval(() => {
      if(counter < 5)
      observer.next(++counter);
    }, 1000);
  } catch (err) {
    observer.error(err);
  }
}).share();

var subscription = observable.subscribe(
  (x: any) => logItem('(sub) ' + x),
  (error: any) => logItem(error),
  () => logItem('Completed')
);

setTimeout(() => {
  var subscription1 = observable.subscribe(
    (x: any) => logItem('(sub1) ' + x),
    (error: any) => logItem(error),
    () => logItem('Completed')
  );
}, 3000);

function logItem(val: any) {
  console.log('Test : ' + val);
}
