import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html'
})
export class RouterComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((paramMap: ParamMap) => console.log(paramMap.get('id')));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
