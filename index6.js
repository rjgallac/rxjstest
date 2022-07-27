import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
let test = interval(2000);
let case1 = test.pipe(take(5));
case1.subscribe(x => console.log(x));

