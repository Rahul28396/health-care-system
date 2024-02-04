import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { Appointment } from 'src/app/models/appointments/appointment.model';
import { AppointmentsService } from '../appointments.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DeleteConfirmationModalComponent } from 'src/app/common/delete-confirmation-modal/delete-confirmation-modal.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  currentPage: number = 1;
  itemsPerPage: number = 5;
  appointments: Array<Appointment> = [];
  modalRef?: BsModalRef;
  appointmentService = inject(AppointmentsService);
  selectedAppointment?: Appointment;
  deleteConfirmationText: string = '';
  get numberOfPages(): number { return Math.floor(this.appointmentService.totalAppointments / this.itemsPerPage) + 1; }

  constructor(
    private _modalService: BsModalService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadAppoitments();
  }

  onChangePageNumber(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.loadAppoitments();
  }

  loadAppoitments(): void {
    const start = (this.currentPage - 1) * 5;
    this.appointments = this.appointmentService.loadAppointments(start, this.itemsPerPage);
  }

  deleteAppointment(element: Appointment) {
    this.appointmentService.deleteAppointment(element);
    this.loadAppoitments();
    this.closeModal();
  }

  openDeleteAppointmentModal(templateRef: TemplateRef<void>, element: Appointment): void {
    this.deleteConfirmationText = `Do you sure want to delete appointment: ${element.id}?`
    this.selectedAppointment = element;
    this.modalRef = this._modalService.show(templateRef,{
      class: 'modal-dialog-centered'
    });
  }

  closeModal() {
    this.modalRef?.hide();
  }

  goToPage(page: string): void{
    this._router.navigate([page],{relativeTo: this._activatedRoute});
  }
}
