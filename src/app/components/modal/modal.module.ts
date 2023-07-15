import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from '../spinner/spinner.module';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    FormsModule
  ]
})
export class ModalModule { }
