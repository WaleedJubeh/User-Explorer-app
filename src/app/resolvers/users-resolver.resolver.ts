import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NSSearch } from '../namespaces/search.namespace';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<NSSearch.IUser[]> {
  constructor(private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NSSearch.IUser[]> {
    return this.userService.getUsers().pipe(map((data: any) => <NSSearch.IUser[]> data));
  }
}
