import { Injectable } from '@angular/core';
import { APPOINTMENTS, Appointment } from '../models/appointments/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  totalAppointments = APPOINTMENTS.length;

  constructor() { }

  loadAppointments(start:number, count: number): Array<Appointment>{
    const appointments = [...APPOINTMENTS];
    return appointments.splice(start,count);
  }
}
