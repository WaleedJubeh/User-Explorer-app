import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output('valueChange') valueChange: EventEmitter<string> = new EventEmitter();
  
  debouncer$: Subject<string> = new Subject();
  debouncerSub: Subscription | undefined;
 
  constructor() {}
  
  ngOnDestroy(): void {
   this.debouncerSub?.unsubscribe();
  }

  ngOnInit(): void {
    //we can debounce for 200ms before emitting...
    this.debouncerSub = this.debouncer$.pipe(debounceTime(200)).subscribe((value) => {
      console.log(value);
      this.valueChange.emit(value);
    })
  }

  onSearch(input: HTMLInputElement) {
    this.debouncer$.next(input.value);
  }
}
