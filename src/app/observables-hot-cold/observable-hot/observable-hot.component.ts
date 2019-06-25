import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { share, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-observable-hot',
  template: ''
})
export class ObservableHotComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  intervalHot$ = interval().pipe(share());

  ngOnInit(): void {
    this.intervalHot$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentInterval: number) => console.log('subscribe 1', currentInterval));

    setTimeout(() => {
      this.intervalHot$
        .pipe(takeUntil(this.destroy$))
        .subscribe((currentInterval: number) => console.log('subscribe 2: ', currentInterval));
    }, 2000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
