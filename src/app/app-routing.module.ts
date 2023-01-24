import { NotFoundComponent } from './not-found/not-found.component';
import { GuardGuard } from './guard/guard.guard';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './login-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginGuardGuard] },
  {
    path: 'login',
    component: LoginComponent,
    data: { animationState: 'Login' },
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard-module.module').then(
        (m) => m.DashboardModuleModule
      ),
    canActivate: [GuardGuard],
  },
  {
    path: 'resources',
    loadChildren: () =>
      import('./resources/resources-routing.module').then(
        (m) => m.ResourcesRoutingModule
      ),
    canActivate: [GuardGuard],
  },
  {
    path: 'manufacturing',
    loadChildren: () =>
      import('./manufacturing/manufacturing.module').then(
        (e) => e.ManufacturingModule
      ),
    canActivate: [GuardGuard],
  },
  {
    path: 'machines',
    loadChildren: () =>
      import('./machines/machines.module').then((e) => e.MachinesModule),
    canActivate: [GuardGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
  {
    path: '#/**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
