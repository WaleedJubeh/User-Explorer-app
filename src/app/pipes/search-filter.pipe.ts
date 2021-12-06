import { Pipe, PipeTransform } from '@angular/core';
import { NSSearch } from '../namespaces/search.namespace';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(users: NSSearch.IUser[], field: string, searchText: string): NSSearch.IUser[] {
    if(!field || !searchText) {
      return users;
    }
    return users.filter( user => user[field].toLowerCase().startsWith(searchText.toLowerCase()))
  }

}
