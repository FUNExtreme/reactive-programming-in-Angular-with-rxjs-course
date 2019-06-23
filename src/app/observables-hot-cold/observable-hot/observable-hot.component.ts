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
      .subscribe((currentInterval: number) => console.log(currentInterval));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
