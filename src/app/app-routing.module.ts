import { GuardGuard } from './guard/guard.guard';
// import { MainComponent } from './dashboard/main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
// import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'login',
    component: LoginComponent,
    data: { animationState: 'Login' },
  },
  {
    path: 'register',
    component: RegisterComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
