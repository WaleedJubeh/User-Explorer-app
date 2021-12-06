import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

const components = [
  MatButtonModule,
  MatFormFieldModule,
  MatRadioModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...components],
  exports: components,
})
export class MaterialUIModule {}
