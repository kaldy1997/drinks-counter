import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerModule } from '../spinner/spinner.module';
import { RankingComponent } from './ranking.component';

@NgModule({
  declarations: [
    RankingComponent
  ],
  exports: [
    RankingComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule
  ]
})
export class RankingModule { }
