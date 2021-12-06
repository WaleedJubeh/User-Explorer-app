import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private snackService: MatSnackBar) { }
  
  show(message: string, className: string, duration: number) {
    this.snackService.open(message, 'cancel', {
      horizontalPosition: 'end',
      panelClass: ['toast', className],
      duration
    });
  }

  showError(message: string, duration = 1500) {
    this.show(message, 'error-toast', duration)
  }
  
}
