import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { numberValidator, phoneNumberValidator } from 'src/app/utils/validation-function';
import { AppointmentsService } from '../appointments.service';
import { Appointment } from 'src/app/models/appointments/appointment.model';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent {
  appointmentService = inject(AppointmentsService);
  formBuilderService = inject(FormBuilder);

  appointmentForm = this.formBuilderService.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['',
      [
        Validators.required,
        Validators.email
      ]
    ],
    phone: [
      '',
      [
        Validators.required,
        numberValidator(),
        phoneNumberValidator()
      ]
    ],
    address: this.formBuilderService.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required]
    }),
    deptName: ['', Validators.required],
    doctorName: ['', Validators.required],
    symptoms: this.formBuilderService.array([])
  });

  get firstName() {
    return this.appointmentForm.get('firstName');
  }

  get symptoms() {
    return this.appointmentForm.get('symptoms') as FormArray;
  }

  addSymptom() {
    this.symptoms.push(this.formBuilderService.control('knee pain'))
  }

  removeSymptom(i: number) {
    this.symptoms.removeAt(i);
  }

  onSave() {
    const formValue = this.appointmentForm.value;
    const newAppoitment = new Appointment();
    newAppoitment.id = Math.floor(Math.random()*90000) + 10000;
    newAppoitment.patientId = Math.floor(Math.random()*90000) + 10000;
    newAppoitment.patientName = `${formValue.firstName} ${formValue.lastName}`;
    newAppoitment.email = formValue.email as string;
    newAppoitment.phone = Number(formValue.phone);
    newAppoitment.address = formValue.address as Address;
    newAppoitment.deptName = formValue.deptName as string;
    newAppoitment.doctorName = formValue.doctorName as string;
    newAppoitment.symptoms = this.symptoms.value as Array<string>;
  }

  goToPreviousPage(){
    
  }
}
