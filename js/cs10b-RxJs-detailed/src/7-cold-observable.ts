//A cold observable
//an observable whose producer is activated once a subscription has been created.
//it will receive the same values, even though subscription was created at a different time.
//producer is activated once a subscription has been created.
//producer is created inside of the observable.

import { Observable } from 'rxjs/Observable';

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
});

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
