import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornsComponent } from './forns.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [
    FornsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  exports: [
    FornsComponent
  ]
})
export class FornsModule { }
