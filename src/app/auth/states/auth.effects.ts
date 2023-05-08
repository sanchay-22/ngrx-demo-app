import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess } from './auth.actions';
import { map, switchMap } from 'rxjs';
import { AuthApiService } from '../auth-api.service';
import { AuthBlService } from '../auth-bl.service';
import { AuthResponseDataModel } from '../models/auth.model';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authApiService: AuthApiService, private authBlService: AuthBlService) {}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(login),
            switchMap(( action ) => this.authApiService.login(action.email, action.password)),
            map((response: AuthResponseDataModel) => {
                const user = this.authBlService.formatLoginResponseData(response);
                console.log(user);
                return loginSuccess();

            })
         )
    });
}