import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, distinctUntilChanged, debounceTime, switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-starships-overview',
  templateUrl: './starships-overview.component.html'
})
export class StarshipsOverviewComponent {

  searchControl = new FormControl();
  searchTerm$ = this.searchControl.valueChanges.pipe(
    startWith(this.searchControl.value)
  );

  filteredData$ = this.searchTerm$.pipe(
    distinctUntilChanged(),
    debounceTime(200),
    map((searchTerm?: string) => searchTerm ? searchTerm : ''),
    switchMap((searchTerm: string) => this.httpClient.get(`https://swapi.co/api/starships/?search=${searchTerm}`)),
    map((searchResult: { count: number, results: [] }) => searchResult.results)
  );

  constructor(private httpClient: HttpClient) {}
}
