import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subscription, interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-data-unsubscribe',
  template: ''
})
export class DataUnsubscribeComponent implements OnInit, OnDestroy {

  private interval$ = interval(1000).pipe(tap((currentInterval: number) => console.log(currentInterval)));
  private intervalSubscription: Subscription;

  ngOnInit(): void {
    this.intervalSubscription = this.interval$.subscribe();
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
