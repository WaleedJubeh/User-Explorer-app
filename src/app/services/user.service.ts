import { Injectable } from '@angular/core';
import { NSSearch } from '../namespaces/search.namespace';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }

  async getUsers() {
    /*  since apiService uses first() operator
        no need to unsubscribe
        Errors handled in interceptor
    */
    // convert to promise will make the code more clean
    const users = <NSSearch.IUser[]> await this.api.get('users').toPromise();
    return users;
  }
}
