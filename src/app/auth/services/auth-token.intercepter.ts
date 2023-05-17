import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, switchMap, take } from 'rxjs';
import { SharedState } from 'src/app/shared/store/shared.state';
import { getToken } from '../states/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenIntercepter implements HttpInterceptor {

  constructor(private store: Store<SharedState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getToken).pipe(
      take(1),
      switchMap((token) => {
        if(!token) return next.handle(req);

        const newRequest  = req.clone({ params: req.params.append('auth', token) });
        return next.handle(newRequest)
      })
    );
  }

}
