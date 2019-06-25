import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subject, interval } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-data-take-until',
  template: ''
})
export class DataTakeUntilComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  private interval$ = interval(1000).pipe(tap((currentInterval: number) => console.log(currentInterval)));

  ngOnInit(): void {
    this.interval$
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
