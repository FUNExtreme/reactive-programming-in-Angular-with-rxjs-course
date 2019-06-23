import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-data-take-until',
  template: ''
})
export class DataTakeUntilComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  private name$ = of('Robin Maenhaut');

  ngOnInit(): void {
    this.name$
      .pipe(takeUntil(this.destroy$))
      .subscribe((name: string) => console.log(name));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
