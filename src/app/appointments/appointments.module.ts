import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonCustomModule } from '../common/common-custom.module';

@NgModule({
  declarations: [
    AppointmentListComponent,
    CreateAppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    CommonCustomModule,
    ReactiveFormsModule
  ]
})
export class AppointmentsModule { }
