import { Observable } from "rxjs/Observable";

var observable = Observable.create((observer:any) => {
    try{
    observer.next('emitted value 1')
    //observer.complete();
    let counter: number = 0;
    setInterval(() => observer.next(++counter),1000);
} catch (err) {
    observer.error(err)
}
})

var subscription = observable.subscribe(
    (x:any) => logItem('(sub) ' +x),
    (error:any) => logItem(error),
    () => logItem('Completed')
);

var subscription1 = observable.subscribe(
    (x:any) => logItem('(sub1) ' +x),
    (error:any) => logItem(error),
    () => logItem('Completed')
);
//unsubscribed in 5 seconds & 1 millisecond.
setTimeout(() => {
    subscription.unsubscribe();
}, 3001);
setTimeout(() => {
    subscription1.unsubscribe();
}, 5001);

// create child subscriptions
//unsubscribe both of our subscriptions if one has unsubscribed
subscription.add(subscription1);
//subscription1.add(subscription);

//remove a child subscription
subscription.remove(subscription1);
function logItem(val:any) {
    console.log("Test : " + val);
}

