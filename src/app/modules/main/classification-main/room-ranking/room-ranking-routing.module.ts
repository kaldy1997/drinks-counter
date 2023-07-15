import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomRankingComponent } from './room-ranking.component';

const routes: Routes = [
  {
      path: '',
      component: RoomRankingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRankingRoutingModule { }
