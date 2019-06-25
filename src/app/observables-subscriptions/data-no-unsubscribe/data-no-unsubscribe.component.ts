import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-data-no-unsubscribe',
  template: '',
})
export class DataNoUnsubscribeComponent implements OnInit {
  private interval$ = interval(1000).pipe(tap((currentInterval: number) => console.log(currentInterval)));

  ngOnInit(): void {
    this.interval$
      .subscribe();
  }
}
