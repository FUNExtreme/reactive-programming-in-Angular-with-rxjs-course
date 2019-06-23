import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-http-client',
  template: '',
})
export class HttpClientComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient
      .get('https://swapi.co/api/starships')
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: { count: number }) => console.log(result.count));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
