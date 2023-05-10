import { Injectable } from '@angular/core';
import { AuthBlService } from './auth-bl.service';
import { UserModel } from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authBlService: AuthBlService) { }

  setUserInLocalStorage(user: UserModel): void {
    localStorage.setItem('userData', JSON.stringify(user));
    this.startTimeoutInterval(user);
  }

  getUserFromLocalStorage(): UserModel | null {
    const userRawData = localStorage.getItem('userData');
    if(userRawData) {
      const parsedUserData = JSON.parse(userRawData);
      const user = new UserModel(parsedUserData.emial, parsedUserData.tokenExpiresIn, parsedUserData.localId, new Date(parsedUserData.tokenExp));
      this.startTimeoutInterval(user);
      return user;
    }
    return null;
  }

  startTimeoutInterval(user: UserModel): void {
    const tokenExpTime = this.authBlService.getTokenExpirationTime(user);

    setTimeout(() => { },tokenExpTime);
  }
}
