import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(url: string, data: any = {}) {
    return this.http
      .get(`${environment.API}/${url}`, { params: data })
      .pipe(first());
  }

  post(url: string, data: any = {}) {
    return this.http.post(`${environment.API}/${url}`, data).pipe(first());
  }
}
