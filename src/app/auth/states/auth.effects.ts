import { Injectable, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, of, tap, Observable } from 'rxjs';
import { AuthApiService } from '../services/auth-api.service';
import { AuthBlService } from '../services/auth-bl.service';
import { AuthResponseDataModel } from '../models/auth.model';
import { Store } from '@ngrx/store';
import { SharedState } from 'src/app/shared/shared.state';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { getErrorMessageState } from 'src/app/shared/shared.selectors';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as sharedActions from 'src/app/shared/shared.actions';
import * as authActions from './auth.actions';


@UntilDestroy()
@Injectable()
export class AuthEffects implements OnInit {
    errorMessage!: string;

    constructor(private actions$: Actions, private authApiService: AuthApiService, private authBlService: AuthBlService, private authService: AuthService, private store: Store<SharedState>, private router: Router) {}

    ngOnInit(): void {
        this.store.select(getErrorMessageState).pipe(untilDestroyed(this)).subscribe(data => this.errorMessage = data);
    }

   auth$ = createEffect(()=> this.actions$.pipe(
    ofType(authActions.loginAction, authActions.signUpAction),
    switchMap((action) => (action.type === authActions.loginAction.type) ? this.authApiService.login(action.email, action.password) : this.authApiService.signup(action.email, action.password)),
    tap(() => {
        this.store.dispatch(sharedActions.loaderAction({ loadingStatus: false }));
        if(this.errorMessage !== undefined) this.store.dispatch(sharedActions.errorMessageAction({ errorMessage: '' }))
   }),
   map((response: AuthResponseDataModel) => {
        const user = this.authBlService.formatResponseData(response);
        this.authService.setUserInLocalStorage(user);
        return authActions.loginSucceedAction({ user, redirectToHome: true });
    }),
    catchError(error => this.catchError(error))
   ));
    
    catchError(error: any): Observable<any>{
        this.store.dispatch(sharedActions.loaderAction({ loadingStatus: false }));
            const errorMessage = this.authBlService.formatLoginErrorMessage(error.error.error.message);
            this.store.dispatch(sharedActions.errorMessageAction({ errorMessage }));

        return of();
    }

    navigateOnSucceessfulLoginSignup$ = createEffect(()=> this.actions$.pipe(
        ofType(authActions.loginSucceedAction, authActions.signUpSucceedAction),
        tap((action) => {if(action.redirectToHome) this.router.navigate(['/'])})),{ dispatch: false }
    );

    autoLogin$ = createEffect(() => (this.actions$.pipe(
            ofType(authActions.autoLoginAction),
            switchMap(() => {
                const user = this.authService.getUserFromLocalStorage();
                return of(authActions.loginSucceedAction({ user, redirectToHome: false }))
            })) 
        )
    )

    logout$ = createEffect(() => (this.actions$.pipe(
            ofType(authActions.autoLogoutAction),
            map(() => {
                this.authService.clearLocalStorage();
                this.router.navigate(['auth']);
            })
        )
    ), { dispatch: false });
}