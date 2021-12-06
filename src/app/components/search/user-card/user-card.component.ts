import { Component, Input, OnInit } from '@angular/core';
import { NSSearch } from 'src/app/namespaces/search.namespace';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent implements OnInit {
  @Input() user: NSSearch.IUser | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
