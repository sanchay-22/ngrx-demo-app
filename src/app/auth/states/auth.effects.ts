import { Injectable, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, of, tap, Observable } from 'rxjs';
import { AuthApiService } from '../services/auth-api.service';
import { AuthBlService } from '../services/auth-bl.service';
import { AuthResponseDataModel } from '../models/auth.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/shared.state';
import { setErrorMessageAction, setLoaderAction } from 'src/app/shared/shared.actions';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { getErrorMessageState } from 'src/app/shared/shared.selectors';
import { Router } from '@angular/router';
import { setAutoLoginAction, setLoginAction, setLoginSucceedAction, setSignUpAction, setSignUpSucceedAction } from './auth.actions';
import { AuthService } from '../services/auth.service';

@UntilDestroy()
@Injectable()
export class AuthEffects implements OnInit {
    errorMessage!: string;

    constructor(private actions$: Actions, private authApiService: AuthApiService, private authBlService: AuthBlService, private authService: AuthService, private store: Store<AppState>, private router: Router) {}

    ngOnInit(): void {
        this.store.select(getErrorMessageState).pipe(untilDestroyed(this)).subscribe(data => this.errorMessage = data);
    }

   auth$ = createEffect(()=> this.actions$.pipe(
    ofType(setLoginAction, setSignUpAction),
    switchMap((action) => (action.type === setLoginAction.type) ? this.authApiService.login(action.email, action.password) : this.authApiService.signup(action.email, action.password)),
    tap(() => {
        this.store.dispatch(setLoaderAction({ loadingStatus: false }));
        if(this.errorMessage !== undefined) this.store.dispatch(setErrorMessageAction({ errorMessage: '' }))
   }),
   map((response: AuthResponseDataModel) => {
        const user = this.authBlService.formatResponseData(response);
        this.authService.setUserInLocalStorage(user);
        return setLoginSucceedAction({ user });
    }),
    catchError(error => this.catchError(error))
   ));
    
    catchError(error: any): Observable<any>{
        this.store.dispatch(setLoaderAction({ loadingStatus: false }));
            const errorMessage = this.authBlService.formatLoginErrorMessage(error.error.error.message);
            this.store.dispatch(setErrorMessageAction({ errorMessage }));

        return of();
    }

    navigateOnSucceessfulLoginSignup$ = createEffect(()=> this.actions$.pipe(
        ofType(setSignUpSucceedAction, setLoginSucceedAction),
        tap(() => this.router.navigate(['/']))),{ dispatch: false }
    );

    autoLogin$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(setAutoLoginAction),
            tap((action) => console.log(this.authService.getUserFromLocalStorage()))
        );
    }, { dispatch: false });
}