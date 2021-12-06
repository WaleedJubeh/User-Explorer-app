import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FieldFilterComponent } from './field-filter/field-filter.component';
import { MaterialUIModule } from 'src/app/modules/material-ui/material-ui.module';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from './user-card/user-card.component';

const components = [
  SearchBarComponent,
  FieldFilterComponent,
  UserCardComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialUIModule,
    FormsModule
  ],
  exports: components
})
export class SearchModule { }
