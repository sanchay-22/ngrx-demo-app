import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess } from './auth.actions';
import { map, switchMap } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService) {}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(login),
            switchMap(( action ) => this.authService.login(action.email, action.password)),
            map(data => loginSuccess())
         )
    });
}

//test@test.com