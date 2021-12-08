import { fromEvent, combineLatest, startWith } from 'rxjs';
import { map, withLatestFrom } from "rxjs/operators";

// https://dev.to/rxjs/fetching-data-in-react-with-rxjs-and-lt-gt-fragment-54h7
// https://bazant.dev/tools/titles.php?prefix=asd


const submitBtn = document.getElementById('submit-title');
const list = document.getElementById('titles-list');

const first$ = fromEvent(document.getElementById('article-first'), 'change')
  .pipe(
    map(it => it.target.value),
    startWith('empty')
  );
first$.subscribe(it => console.log('first', it));

const second$ = fromEvent(document.getElementById('article-second'), 'change')
  .pipe(
    map(it => it.target.value),
    startWith('empty')
);
second$.subscribe(it => console.log('second', it));

const full$ = combineLatest(first$, second$)
  .pipe(map((vals) => vals.join(' ')));
full$.subscribe((val) => console.log('full', val));

fromEvent(submitBtn,'click')
  .pipe(withLatestFrom(full$))
  .subscribe(([_, name]) => {
    list.innerHTML += `<li class="list-group-item">${name}</li>`
  })