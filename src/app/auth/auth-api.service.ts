import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { AuthResponseDataModel } from './models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  apiEndPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`;
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponseDataModel> {
    return this.http.post<AuthResponseDataModel>(this.apiEndPoint, { email, password, returnSecureToken: true });
  }

  signup(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiEndPoint, { email, password });
  }

}
