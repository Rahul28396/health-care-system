import { Injectable, inject } from '@angular/core';
import { Appointment } from '../models/appointments/appointment.model';
import { StorageService } from '../services/storage.service';
import { STORAGE_TYPE } from '../utils/enums';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  appointments: Array<Appointment> = [];

  totalAppointments = this.appointments.length;

  storageService= inject(StorageService);


  loadAppointments(start: number, count: number): Array<Appointment> {
    this.appointments = this.storageService.getAllValueOf<Appointment>(STORAGE_TYPE.APPOINTMENT);
    const appointments = [...this.appointments];
    return appointments.splice(start, count);
  }

  createAppointment(newAppointment: Appointment): void {
    newAppointment.id = this.totalAppointments + 1;
    this.storageService.addValueTo<Appointment>(STORAGE_TYPE.APPOINTMENT,newAppointment);
  }
}
