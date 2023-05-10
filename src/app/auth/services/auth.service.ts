import { Injectable } from '@angular/core';
import { UserModel } from '../models/auth.model';
import { AuthBlService } from './auth-bl.service';

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
