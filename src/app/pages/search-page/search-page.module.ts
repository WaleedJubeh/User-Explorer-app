import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { MaterialUIModule } from 'src/app/modules/material-ui/material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialUIModule
  ],
  exports: [SearchPageComponent]
})
export class SearchPageModule { }
