import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  searchControl = new FormControl();

  ngOnInit(): void {
    this.searchControl
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: string) => console.log(value));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
