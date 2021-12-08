import { fromEvent } from 'rxjs';

const submitBtn = document.getElementById('submit-title')
fromEvent(submitBtn, 'click').subscribe(() => console.log('Clicked!'));