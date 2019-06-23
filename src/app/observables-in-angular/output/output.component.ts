import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  template: ''
})
export class OutputComponent implements OnInit {

  @Output() private wordOfTheDay = new EventEmitter<string>();

  ngOnInit() {
    this.wordOfTheDay.next('Heatwave');
  }
}

