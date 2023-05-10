import { Injectable } from '@angular/core';
import { AuthBlService } from './auth-bl.service';
import { UserModel } from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  timeoutInterval!: any;

  constructor(private authBlService: AuthBlService) { }

  setUserInLocalStorage(user: UserModel): void {
    localStorage.setItem('userData', JSON.stringify(user));
    this.startTimeoutInterval(user);
  }

  getUserFromLocalStorage(): any {
    const userRawData = localStorage.getItem('userData');
    if(userRawData) {
      const user = JSON.parse(userRawData);
      this.startTimeoutInterval(user);
      return user;
    }
    return null;
  }

  startTimeoutInterval(user: UserModel): void {
    const tokenExpTime = this.authBlService.getTokenExpirationTime(user);

    this.timeoutInterval = setTimeout(() => { },tokenExpTime);
  }

  clearLocalStorage(): void {
    localStorage.removeItem('userData');
    if(this.timeoutInterval) {
      clearInterval(this.timeoutInterval);
      this.timeoutInterval = null;
    }
  }
}
