import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClassificationRoutingModule } from './classification-routing.module';
import { ClassificationComponent } from './classification.component';
@NgModule({
  declarations: [
    ClassificationComponent
  ],
  imports: [
    CommonModule,
    ClassificationRoutingModule
  ]
})
export class ClassificationModule { }
