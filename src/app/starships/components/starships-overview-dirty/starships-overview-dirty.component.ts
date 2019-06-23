import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-starships-overview-dirty',
  templateUrl: './starships-overview-dirty.component.html'
})
export class StarshipsOverviewDirtyComponent implements OnInit {
  searchControl = new FormControl();
  searchTerm$ = this.searchControl.valueChanges;

  filteredData = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.searchControl
      .valueChanges
      .subscribe((searchTerm: string) => this.filterStarships(searchTerm));

    this.filterStarships(this.searchControl.value);
  }

  private filterStarships(searchTerm: string) {
    if (!searchTerm) {
      searchTerm = '';
    }

    this.httpClient
      .get(`https://swapi.co/api/starships/?search=${searchTerm}`)
      .subscribe((searchResult: { count: number, results: [] }) => {
        this.filteredData = searchResult.results;
      });
  }
}
