import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DefaultLayoutsModule } from './layouts/default-layout/default-layout.module';
import { HttpErrorInterceptor } from './interceptors/http-error-interceptor.interceptor';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialUIModule } from './modules/material-ui/material-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DefaultLayoutsModule,
    MatSnackBarModule,
    MaterialUIModule
  ],
  providers: [
    HttpClient, 
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: HttpErrorInterceptor,
    },
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
