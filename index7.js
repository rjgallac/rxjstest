import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
let test1 = interval(1000);
let test2 = interval(2000);
let case1 = test1.pipe(
    take(5)
);
let case2 = test2.pipe(
    take(5)
);

case1.subscribe(x => console.log(x));
case2.subscribe(x => console.log(x));


