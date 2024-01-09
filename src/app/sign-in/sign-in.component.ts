import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator, usernameValidator } from '../utils/validation-function';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  formBuilderService = inject(FormBuilder);

  loginForm = this.formBuilderService.group({
    username: ['', [Validators.required, usernameValidator()]],
    password: ['', [Validators.required, passwordValidator()]]
  });

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin(){
    console.log(this.loginForm.value);
  }

}
