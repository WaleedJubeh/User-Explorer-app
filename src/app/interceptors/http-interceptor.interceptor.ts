import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from '../services/toast.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private toastCtrl: ToastService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        this.handleErrors(err);
        return throwError(err);
      })
    );
  }
  handleErrors(err: HttpErrorResponse) {
    switch (err.status) {
      case 400:
      case 404:
        this.handleError(err);
        break;
      case 401:
      case 403:
        //not necessary to handle authentication in this app
        break;
      case 500:
        this.handleError(err);
        break;
    }
  }
  
  handleError(err: HttpErrorResponse) {
    // show toast
    this.toastCtrl.showError('Error is happened');
  }
}
