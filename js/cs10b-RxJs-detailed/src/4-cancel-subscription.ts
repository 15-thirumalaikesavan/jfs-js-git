import { Observable } from "rxjs/Observable";

var observable = Observable.create((observer:any) => {
    try{
    observer.next('emitted value 1')
    //observer.complete();
    let counter: number = 0;
    //bug
    //setInterval(observer.next(++counter),1000);
    setInterval(() => observer.next(++counter),1000);
} catch (err) {
    observer.error(err)
}
})

var subscription = observable.subscribe(
    (x:any) => logItem(x),
    (error:any) => logItem(error),
    () => logItem('Completed')
);
//unsubscribed in 5 seconds & 1 millisecond.
setTimeout(() => {
    subscription.unsubscribe();
}, 5001);

function logItem(val:any) {
    console.log("Test : " + val);
}