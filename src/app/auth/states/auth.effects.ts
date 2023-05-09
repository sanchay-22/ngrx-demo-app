import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSucceed } from './auth.actions';
import { map, switchMap, catchError, of } from 'rxjs';
import { AuthApiService } from '../auth-api.service';
import { AuthBlService } from '../auth-bl.service';
import { AuthResponseDataModel } from '../models/auth.model';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/shared.state';
import { setErrorMessageAction, setLoaderAction } from 'src/app/shared/shared.actions';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authApiService: AuthApiService, private authBlService: AuthBlService, private store: Store<AppStateModel>) {}

    login$ = createEffect(() => {
        return this.actions$.pipe(untilDestroyed(this),
            ofType(login),
            switchMap(( action ) => this.authApiService.login(action.email, action.password)),
            map((response: AuthResponseDataModel) => {
                this.store.dispatch(setLoaderAction({ loadingStatus: false }));
                this.store.dispatch(setErrorMessageAction({ errorMessage: '' }))
                const user = this.authBlService.formatLoginResponseData(response);
                return loginSucceed({ user }); 
            }),
            catchError(error => {
                this.store.dispatch(setLoaderAction({ loadingStatus: false }));
                const errorMessage = this.authBlService.formatLoginErrorMessage(error.error.error.message);
                this.store.dispatch(setErrorMessageAction({ errorMessage }));
                return of(); 
            })
        );
    });
}