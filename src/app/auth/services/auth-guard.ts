import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';
import { SharedState } from 'src/app/shared/state/shared.state';
import { isAuthenticated } from '../state/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<SharedState>, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(isAuthenticated).pipe(
      switchMap((authenticated) => {
        if (!authenticated) {
          return of(this.router.createUrlTree(['auth']));
        }
        return of(true);
      })
    );
  }
}
