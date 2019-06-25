import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-observable-cold',
  template: ''
})
export class ObservableColdComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  intervalCold$ = interval(1000);

  ngOnInit(): void {
    this.intervalCold$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentInterval: number) => console.log('subscribe 1', currentInterval));

    setTimeout(() => {
      this.intervalCold$
        .pipe(takeUntil(this.destroy$))
        .subscribe((currentInterval: number) => console.log('subscribe 2: ', currentInterval));
    }, 2000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
