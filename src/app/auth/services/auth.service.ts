import { Injectable } from '@angular/core';
import { AuthBlService } from '../auth-bl.service';
import { UserModel } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authBlService: AuthBlService) { }

  setUserInLocalStorage(user: UserModel): void {
    const tokenExpiresIn = this.authBlService.getTokenExpirationTime(user);
    localStorage.setItem('userData', JSON.stringify(user));

    setTimeout(() => {' '}, tokenExpiresIn);
  }
}
