import { Injectable } from '@angular/core';
import { AuthResponseDataModel, UserModel } from '../models/auth.model';
import { ErrorEnum, ErrorMessageEnum } from '../misc/auth.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthBlService {

  constructor() { }

  formatResponseData(data: AuthResponseDataModel): UserModel {
    const { email, idToken, localId, expiresIn } = data;
    const user = new UserModel(email, idToken, localId, this.formatTokenExpirationData(expiresIn)); 
    return user;
  }

  formatTokenExpirationData(expirationDate: string): Date {
    return new Date(new Date().getTime() + +expirationDate * 1000);
  }

  formatLoginErrorMessage(message: string): string {
    const errorMessage = (message === ErrorEnum.EMAIL_NOT_FOUND) ? ErrorMessageEnum.EMAIL_NOT_FOUND : (message === ErrorEnum.INVALID_PASSWORD) ? ErrorMessageEnum.INVALID_PASSWORD : ErrorMessageEnum.OTHER;
    return errorMessage;
  }

  getTimeInterval(user: UserModel): number {
    return new Date(user.tokenExpDate).getTime() - new Date().getTime();
  }
}
