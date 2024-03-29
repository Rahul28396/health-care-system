import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentListComponent
  },
  {
    path: 'create-appoinment',
    component: CreateAppointmentComponent
  },
  {
    path: ':id',
    component: EditAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
