import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { ClassificationRoutingModule } from './classification-routing.module';
import { ClassificationComponent } from './classification.component';

@NgModule({
  declarations: [
    ClassificationComponent
  ],
  imports: [
    CommonModule,
    ClassificationRoutingModule,
    SpinnerModule
  ]
})
export class ClassificationModule { }
