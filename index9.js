import { interval,merge } from 'rxjs';
import { take,map } from 'rxjs/operators';
let test1 = interval(1000);
let test2 = interval(2000);
let case1 = test1.pipe(
    take(5),
    map(x=>"test1-"+x)
);
let case2 = test2.pipe(
    take(5),
    map(x=>"test2-"+x)
);

merge(case1,case2).subscribe(x => console.log(x));


