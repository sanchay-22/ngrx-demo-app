import { Injectable, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSucceed } from './auth.actions';
import { map, switchMap, catchError, of, tap } from 'rxjs';
import { AuthApiService } from '../services/auth-api.service';
import { AuthBlService } from '../services/auth-bl.service';
import { AuthResponseDataModel } from '../models/auth.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/shared.state';
import { setErrorMessageAction, setLoaderAction } from 'src/app/shared/shared.actions';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { getErrorMessageState } from 'src/app/shared/shared.selectors';
import { Router } from '@angular/router';

@UntilDestroy()
@Injectable()
export class AuthEffects implements OnInit {
    errorMessage!: string;

    constructor(private actions$: Actions, private authApiService: AuthApiService, private authBlService: AuthBlService, private store: Store<AppState>, private router: Router) {}

    ngOnInit(): void {
        this.store.select(getErrorMessageState).pipe(untilDestroyed(this)).subscribe(data => this.errorMessage = data);
    }

    login$ = createEffect(() => this.actions$.pipe(untilDestroyed(this),
       ofType(login),
       switchMap(( action ) => this.authApiService.login(action.email, action.password)),
       tap(() => {
            this.store.dispatch(setLoaderAction({ loadingStatus: false }));
            if(this.errorMessage !== undefined) this.store.dispatch(setErrorMessageAction({ errorMessage: '' }))
       }),
       map((response: AuthResponseDataModel) => {
            const user = this.authBlService.formatLoginResponseData(response);

            return loginSucceed({ user });
        }),
        catchError(error => {
            this.store.dispatch(setLoaderAction({ loadingStatus: false }));
            const errorMessage = this.authBlService.formatLoginErrorMessage(error.error.error.message);
            this.store.dispatch(setErrorMessageAction({ errorMessage }));

            return of();
        })
    ));

    navigateOnLoginSucceed$ = createEffect(()=> this.actions$.pipe(
        ofType(loginSucceed),
        tap(() => this.router.navigate(['/']))
    ), { dispatch: false }
    );
}