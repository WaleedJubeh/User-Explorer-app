import { Component, OnInit } from '@angular/core';
import { NSSearch } from 'src/app/namespaces/search.namespace';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass']
})
export class SearchPageComponent implements OnInit {
  searchableFields = ['name', 'username', 'email'];
  filterState: NSSearch.ISearchState = {
    filterField: '',
    searchValue: ''
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  setSearchValue(event: string) {
    this.filterState.searchValue = event;
  }
  
  setfilterField(event: string) {
    this.filterState.filterField = event;
  }
}
