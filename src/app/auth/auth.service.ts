import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiEndPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`;
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<Object> {
    return this.http.post(this.apiEndPoint, { email, password, returnSecureToken: true } );
  }

}
