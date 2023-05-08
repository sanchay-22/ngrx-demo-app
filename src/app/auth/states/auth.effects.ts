import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess } from './auth.actions';
import { map, switchMap } from 'rxjs';
import { AuthApiService } from '../auth-api.service';
import { AuthBlService } from '../auth-bl.service';
import { AuthResponseDataModel } from '../models/auth.model';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/shared.state';
import { setLoaderAction } from 'src/app/shared/shared.actions';
import { getLoaderState } from 'src/app/shared/shared.selectors';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authApiService: AuthApiService, private authBlService: AuthBlService, private store: Store<AppStateModel>) {}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(login),
            switchMap(( action ) => this.authApiService.login(action.email, action.password)),
            map((response: AuthResponseDataModel) => {
                this.store.dispatch(setLoaderAction({ loadingStatus: false }));
                const user = this.authBlService.formatLoginResponseData(response);
                return loginSuccess({ user });
            })
         )
    });
}