import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { RankingModule } from 'src/app/components/ranking/ranking.module';
import { RoomRankingRoutingModule } from './room-ranking-routing.module';
import { RoomRankingComponent } from './room-ranking.component';

@NgModule({
  declarations: [
    RoomRankingComponent
  ],
  imports: [
    CommonModule,
    RoomRankingRoutingModule,
    RankingModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoomRankingModule { }
