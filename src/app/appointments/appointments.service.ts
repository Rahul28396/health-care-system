import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointments/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  appointments: Array<Appointment> = [];

  totalAppointments = this.appointments.length;


  loadAppointments(start: number, count: number): Array<Appointment> {
    const appointments = this.appointments;
    return appointments.splice(start, count);
  }

  createAppointment(newAppointment: Appointment): void {
    newAppointment.id = this.appointments.length + 1;
    this.appointments.push(newAppointment);
    console.log(this.appointments);
  }
}
