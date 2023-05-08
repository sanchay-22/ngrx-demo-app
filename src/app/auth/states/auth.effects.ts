import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess } from './auth.actions';
import { map, switchMap } from 'rxjs';
import { AuthApiService } from '../auth-api.service';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authApiService: AuthApiService) {}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(login),
            switchMap(( action ) => this.authApiService.login(action.email, action.password)),
            map(data => loginSuccess())
         )
    });
}

//test@test.com