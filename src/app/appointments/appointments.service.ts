import { Injectable, inject } from '@angular/core';
import { Appointment } from '../models/appointments/appointment.model';
import { StorageService } from '../services/storage.service';
import { STORAGE_TYPE } from '../utils/enums';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  appointments: Array<Appointment> = [];

  get totalAppointments(){
   return this.appointments.length;
  }

  storageService= inject(StorageService);


  loadAppointments(start: number, count: number): Array<Appointment> {
    this.appointments = this.storageService.getAllValueOf<Appointment>(STORAGE_TYPE.APPOINTMENT);
    const appointments = [...this.appointments];
    return appointments.splice(start, count);
  }

  createAppointment(newAppointment: Appointment): void {
    this.storageService.addValueTo<Appointment>(STORAGE_TYPE.APPOINTMENT,newAppointment);
  }

  deleteAppointment(appointment:Appointment): void{
    this.appointments = this.appointments.filter(item => item.id !== appointment.id );
    this.storageService.updateValueOf(STORAGE_TYPE.APPOINTMENT,this.appointments)
  }
}
