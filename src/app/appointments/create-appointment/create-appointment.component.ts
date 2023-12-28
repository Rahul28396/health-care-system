import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { numberValidator, phoneNumberValidator } from 'src/app/utils/validation-function';

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
    firstName : ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['',
      [
        Validators.required,
        Validators.email
      ]
    ],
    phoneNo: [
      629446929,
      [
        Validators.required,
        numberValidator(),
        phoneNumberValidator()
      ]
    ],
    address: this.formBuilderService.group({
      city: ['Arambagh',Validators.required],
      state: ['West Bengal',Validators.required],
      country: ['India',Validators.required],
      zip: [712602,Validators.required]
    }),
    depatmentOfDoctor: ['othro',Validators.required],
    doctor: ['Dr. Chutiya gandu',Validators.required],
    symptoms: this.formBuilderService.array([])
  });

  get firstName(){
    return this.appointmentForm.get('firstName');
  }

  get symptoms(){
    return this.appointmentForm.get('symptoms') as FormArray;
  }

  addSymptom(){
    this.symptoms.push(this.formBuilderService.control(''))
  }

  removeSymptom(i:number){
    this.symptoms.removeAt(i);
  }

  onSubmit(){
    console.log(this.appointmentForm.value);
  }
}
