import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  // NbAuthComponent,
  NbLogoutComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { NgxAuthComponent } from './@theme/components/auth/auth.component';
import { NgxLoginComponent } from './@theme/components/auth/login/login.component';

import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { 
  path: 'pages', 
  canActivate: [AuthGuard],
  loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    
    component: NgxAuthComponent,
    children: [
      {
        path: '',
        component: NgxLoginComponent,
      },
      {
        path: 'login',
        component: NgxLoginComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
