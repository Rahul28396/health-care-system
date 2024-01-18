import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator, usernameValidator } from '../utils/validation-function';
import { AuthService } from '../services/auth.service';
import { User } from '../models/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formBuilderService = inject(FormBuilder);
  router = inject(Router)
  authService = inject(AuthService);

  registerForm = this.formBuilderService.group({
    firstName: ['', [Validators.required, usernameValidator()]],
    lastName: ['', [Validators.required, usernameValidator()]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['',[Validators.required]],
    password: ['', [Validators.required, passwordValidator()]],
    confrimPassword: ['',[Validators.required]],
    img: ['',[Validators.required]]
  });

  get firstName() {
    return this.registerForm.get('username');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confrimPassword() {
    return this.registerForm.get('confrimPassword');
  }

  onRegister() {
    const user: User = {
      id: Math.floor(Math.random()*1000 + 1),
      firstName : typeof this.registerForm.value.firstName === 'string' ? this.registerForm.value.firstName : '',
      lastName : typeof this.registerForm.value.lastName === 'string' ? this.registerForm.value.lastName : '',
      email : typeof this.registerForm.value.email === 'string' ? this.registerForm.value.email : '',
      phoneNumber : typeof this.registerForm.value.phoneNumber === 'string' ? this.registerForm.value.phoneNumber : '',
      password : typeof this.registerForm.value.password === 'string' ? this.registerForm.value.password : '',
      img : typeof this.registerForm.value.img === 'string' ? this.registerForm.value.img : '',
    }
    this.authService.register(user);
    this.goToLoginPage();
  }

  goToLoginPage(){
    this.router.navigateByUrl('/signin');
  }
}
