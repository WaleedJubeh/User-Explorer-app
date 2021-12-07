import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NSSearch } from 'src/app/namespaces/search.namespace';
import { UserService } from 'src/app/services/user.service';

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
  users: NSSearch.IUser[] = [];
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.data.subscribe((data) => this.users = data.users).unsubscribe();
  }

  setSearchValue(event: string) {
    this.filterState.searchValue = event;
  }
  
  setfilterField(event: string) {
    this.filterState.filterField = event;
  }
}