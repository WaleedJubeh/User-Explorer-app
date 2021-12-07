import { Component, OnInit } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { filter, mapTo } from "rxjs/operators";
import { ResolveEnd, ResolveStart, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'search-app';
  isLoading$ : Observable<boolean> | undefined;
  private _showLoaderEvents$!: Observable<boolean> | undefined;
  private _hideLoaderEvents$!: Observable<boolean> | undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {
    
    this._showLoaderEvents$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      mapTo(true)
    );
    this._hideLoaderEvents$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveEnd),
      mapTo(false)
    );
    this.isLoading$ = merge(this._hideLoaderEvents$, this._showLoaderEvents$);
  }
}
