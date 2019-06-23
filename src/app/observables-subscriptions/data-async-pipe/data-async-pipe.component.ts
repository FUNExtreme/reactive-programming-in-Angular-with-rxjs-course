import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-data-async-pipe',
  template: '{{ name$ | async }}'
})
export class DataAsyncPipeComponent {
  name$ = of('Robin Maenhaut');
}
