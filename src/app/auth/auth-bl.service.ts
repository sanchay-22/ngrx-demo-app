import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponseDataModel, UserModel } from './models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthBlService {

  constructor() { }

  formatLoginResponseData(data: AuthResponseDataModel): UserModel {
    const { email, idToken, localId, expiresIn } = data;
    const user = new UserModel(email, idToken, localId, this.formatTokenExpirationData(expiresIn)); 
    return user;
  }

  formatTokenExpirationData(expirationDate: string): Date {
    return new Date(new Date().getTime() + +expirationDate * 1000);
  }
}
