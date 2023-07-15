import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassificationMainComponent } from './classification-main.component';

const routes: Routes = [
  {
      path: '',
      component: ClassificationMainComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('./classification-menu/classification-menu.module').then(m => m.ClassificationMenuModule)
        },
        {
          path: 'room',
          loadChildren: () => import('./room-ranking/room-ranking.module').then(m => m.RoomRankingModule)
        },
        {
          path: 'global',
          loadChildren: () => import('./global-ranking/global-ranking.module').then(m => m.GlobalRankingModule)
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassificationMainRoutingModule { }
