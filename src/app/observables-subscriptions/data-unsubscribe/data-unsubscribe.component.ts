import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-data-unsubscribe',
  template: ''
})
export class DataUnsubscribeComponent implements OnInit, OnDestroy {

  private name$ = of('Robin Maenhaut');
  private nameSubscription: Subscription;

  ngOnInit(): void {
    this.nameSubscription = this.name$.subscribe((name: string) => console.log(name));
  }

  ngOnDestroy(): void {
    this.nameSubscription.unsubscribe();
  }
}
