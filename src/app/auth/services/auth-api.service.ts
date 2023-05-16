import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { AuthResponseDataModel } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  loginEndPointUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`;
  signEndPointUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`;


  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponseDataModel> {
    return this.http.post<AuthResponseDataModel>(this.loginEndPointUrl, { email, password, returnSecureToken: true });
  }

  signup(email: string, password: string): Observable<AuthResponseDataModel> {
    return this.http.post<AuthResponseDataModel>(this.signEndPointUrl, { email, password, returnSecureToken: true });
  }

}
