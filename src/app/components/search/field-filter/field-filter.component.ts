import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-field-filter',
  templateUrl: './field-filter.component.html',
  styleUrls: ['./field-filter.component.sass']
})
export class FieldFilterComponent implements OnInit {
  @Input('fields') fields: string[] = [];
  @Output('fieldChange') fieldChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if(this.fields.length) {
      this.fieldChange.emit(this.fields[0]);

    }
  }

  getChangedField(val: MatButtonToggleChange) {
    this.fieldChange.emit(val.value);
    
  }

}
