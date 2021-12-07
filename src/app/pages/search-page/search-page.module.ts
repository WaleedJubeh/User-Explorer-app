import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { MaterialUIModule } from 'src/app/modules/material-ui/material-ui.module';
import { FormsModule } from '@angular/forms';
import { SearchModule } from 'src/app/components/search/search.module';
import { CommonPipesModule } from 'src/app/pipes/user-search-pipes/user-search-pipes.module';



@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialUIModule,
    SearchModule,
    CommonPipesModule
  ],
  exports: [SearchPageComponent]
})
export class SearchPageModule { }
