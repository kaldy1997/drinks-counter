import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginGuard } from './guard/auth-login.guard';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
        canActivate: [AuthLoginGuard]
    },
    {
        path: '',
        loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
