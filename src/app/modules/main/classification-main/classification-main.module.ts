import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { ClassificationMainRoutingModule } from './classification-main-routing.module';
import { ClassificationMainComponent } from './classification-main.component';

@NgModule({
  declarations: [
    ClassificationMainComponent
  ],
  imports: [
    CommonModule,
    ClassificationMainRoutingModule,
    SpinnerModule
  ]
})
export class ClassificationMainModule { }
