import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-observable-cold',
  template: ''
})
export class ObservableColdComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  intervalHot$ = interval();

  ngOnInit(): void {
    this.intervalHot$
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentInterval: number) => console.log(currentInterval));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
