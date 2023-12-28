import { Component, OnInit, inject } from '@angular/core';
import { Appointment } from 'src/app/models/appointments/appointment.model';
import { AppointmentsService } from '../appointments.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  currentPage: number = 1;
  itemsPerPage: number = 5;
  appointments: Array<Appointment> = [];
  appointmentService = inject(AppointmentsService);
  numberOfPages: number = Math.floor(this.appointmentService.totalAppointments / this.itemsPerPage) + 1;

  ngOnInit(): void {
    this.loadAppoitments();
  }

  onChangePageNumber(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.loadAppoitments();
  }

  loadAppoitments(): void{
    const start = (this.currentPage - 1)*5;
    this.appointments = this.appointmentService.loadAppointments(start, this.itemsPerPage);
  }
}
