import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RankingModule } from 'src/app/components/ranking/ranking.module';
import { GlobalRankingRoutingModule } from './global-ranking-routing.module';
import { GlobalRankingComponent } from './global-ranking.component';

@NgModule({
  declarations: [
    GlobalRankingComponent
  ],
  imports: [
    CommonModule,
    GlobalRankingRoutingModule,
    RankingModule
  ]
})
export class GlobalRankingModule { }
