import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './session-page/not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './session-page/error/error.component';
import { authGuard } from './route-guards/auth.guard';
import { loginGuard } from './login.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'appointments',
    canActivate: [authGuard],
    loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule),
  },
  {
    path: 'departments',
    canActivate: [authGuard],
    loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule),
  },
  {
    path: 'doctors',
    canActivate: [authGuard],
    loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule),
  },
  {
    path: 'signin',
    canActivate: [loginGuard],
    component: SignInComponent,
  },
  {
    path: 'register',
    canActivate: [loginGuard],
    component: RegisterComponent,
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '',
    redirectTo : 'dashboard',
    pathMatch: 'full'
  },
  {
    path: "**",
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
