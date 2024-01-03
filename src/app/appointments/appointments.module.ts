import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonCustomModule } from '../common/common-custom.module';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';

@NgModule({
  declarations: [
    AppointmentListComponent,
    CreateAppointmentComponent,
    EditAppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    CommonCustomModule,
    ReactiveFormsModule,
    ModalModule.forChild()
  ],
  providers: [BsModalRef]
})
export class AppointmentsModule { }
