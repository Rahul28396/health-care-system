import { Injectable, inject } from '@angular/core';
import { User } from '../models/User.model';
import { StorageService } from './storage.service';
import { STORAGE_TYPE } from '../utils/enums';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  storageService = inject(StorageService);
  router = inject(Router);

  currentUser = this.storageService.getValueOf<User | undefined>(STORAGE_TYPE.CURRENT_USER);

  login(loginDetails: { email: string, password: string }): string | undefined {
    const users = this.storageService.getAllValueOf<User>(STORAGE_TYPE.USERS);
    const currentUser = users.find(user => user.email === loginDetails.email && user.password === loginDetails.password);

    if (currentUser) {
      this.currentUser = currentUser;
      this.storageService.updateValueOf(STORAGE_TYPE.CURRENT_USER, this.currentUser);
      this.router.navigateByUrl('/dashboard');
      return undefined;
    }

    return "Login failed";
  }

  register(newUser: User) {
    this.storageService.addValueTo(STORAGE_TYPE.USERS, newUser);
  }

  logout() {
    this.storageService.removeValue(STORAGE_TYPE.CURRENT_USER);
    this.currentUser = undefined;
    this.router.navigateByUrl('/signin');
  }
}
