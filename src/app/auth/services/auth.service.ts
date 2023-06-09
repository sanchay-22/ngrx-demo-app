import { Injectable } from '@angular/core';
import { AuthBlService } from './auth-bl.service';
import { UserModel } from '../models/auth.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/shared.state';
import { autoLogoutAction } from '../states/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  timeoutInterval!: any;

  constructor(private authBlService: AuthBlService, private store: Store<AppState>) { }

  setUserInLocalStorage(user: UserModel): void {
    localStorage.setItem('userData', JSON.stringify(user));
    this.startTimeoutInterval(user);
  }

  getUserFromLocalStorage(): any {
    const userRawData = localStorage.getItem('userData');
    if(userRawData) {
      const userParseData = JSON.parse(userRawData);
      const { email, localId, token, tokenExp } = userParseData;
      const user = new UserModel(email, token, localId, tokenExp)
      this.startTimeoutInterval(user);
      return user;
    }
    return null;
  }

  startTimeoutInterval(user: UserModel): void {
    const timeInterval = this.authBlService.getTimeInterval(user);
    this.timeoutInterval = setTimeout(() => { this.store.dispatch(autoLogoutAction()) }, timeInterval);
  }

  clearLocalStorage(): void {
    localStorage.clear();
    if(this.timeoutInterval) {
      clearInterval(this.timeoutInterval);
      this.timeoutInterval = null;
    }
  }
}
