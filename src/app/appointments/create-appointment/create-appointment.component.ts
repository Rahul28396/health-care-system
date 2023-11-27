import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent {

  constructor(private formBuilderService: FormBuilder){}

  appointmentForm0 = new FormGroup({
    firstName : new FormControl('Rahul'),
    lastName: new FormControl('Mondal'),
    email: new FormControl('rahul@gmail.com'),
    phoneNo: new FormControl(6294469294),
    address: new FormGroup({
      city: new FormControl('Arambagh'),
      state: new FormControl('West Bengal'),
      country: new FormControl('India'),
      zip: new FormControl(712602)
    }),
    depatmentOfDoctor: new FormControl('othro'),
    doctor: new FormControl('Dr. Chutiya gandu'),
    symptoms: new FormControl('Moner rog')
  });

  appointmentForm = this.formBuilderService.group({
    firstName : ['Rahul',Validators.required],
    lastName: ['Mondal',Validators.required],
    email: ['rahul@gmail.com',Validators.required],
    phoneNo: [6294469294,Validators.required],
    address: this.formBuilderService.group({
      city: ['Arambagh',Validators.required],
      state: ['West Bengal',Validators.required],
      country: ['India',Validators.required],
      zip: [712602,Validators.required]
    }),
    depatmentOfDoctor: ['othro',Validators.required],
    doctor: ['Dr. Chutiya gandu',Validators.required],
    symptoms: ['Moner rog',Validators.required]
  });

  onSubmit(){
    console.log(this.appointmentForm.value);
  }

  updateAppoinment() {
    this.appointmentForm.patchValue({
      firstName: 'Nancy',
      address: {
        state: 'Bangalore',
      },
    });
  }
}
