import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../../components/common/common-components.module';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout.component';
import { SearchPageModule } from 'src/app/pages/search-page/search-page.module';

@NgModule({
  declarations: [
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    SearchPageModule,
    RouterModule
  ]
})
export class DefaultLayoutsModule { }
