import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { ClassificationMenuRoutingModule } from './classification-menu-routing.module';
import { ClassificationMenuComponent } from './classification-menu.component';

@NgModule({
  declarations: [
    ClassificationMenuComponent
  ],
  imports: [
    CommonModule,
    ClassificationMenuRoutingModule,
    SpinnerModule
  ]
})
export class ClassificationMenuModule { }
