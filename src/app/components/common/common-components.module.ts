import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialUIModule } from 'src/app/modules/material-ui/material-ui.module';


const components = [
  NavbarComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialUIModule
  ],
  exports: components
})
export class CommonComponentsModule { }
