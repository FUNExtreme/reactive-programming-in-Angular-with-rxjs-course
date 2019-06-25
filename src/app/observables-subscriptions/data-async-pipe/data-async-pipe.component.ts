import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-data-async-pipe',
  template: '{{ interval$ | async }}'
})
export class DataAsyncPipeComponent {
  interval$ = interval(1000).pipe(tap((currentInterval: number) => console.log(currentInterval)));
}
