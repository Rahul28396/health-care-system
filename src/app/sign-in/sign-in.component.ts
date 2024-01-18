import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator, usernameValidator } from '../utils/validation-function';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  formBuilderService = inject(FormBuilder);
  authService = inject(AuthService);
  errorText:  string | undefined = '';

  loginForm = this.formBuilderService.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordValidator()]]
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin() {
    const loginDetails = {
      email: typeof this.loginForm.value.email === 'string' ? this.loginForm.value.email : '',
      password: typeof this.loginForm.value.password === 'string' ? this.loginForm.value.password : ''
    }

   this.authService.login(loginDetails);

  }

}
