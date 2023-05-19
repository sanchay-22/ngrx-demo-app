import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/shared/misc/shared.model';

export const AUTH_KEY: string = '[auth]:';

export const loginAction = createAction(`${AUTH_KEY} login`, props<{ email: string, password: string }>());
export const loginSucceedAction = createAction(`${AUTH_KEY}login succeed`, props<{ user: UserModel, redirectToHome: boolean }>());
export const loginFailedAction = createAction(`${AUTH_KEY} login failed`, props<{ email: string, password: string }>());

export const signUpAction = createAction(`${AUTH_KEY} signup`, props<{ email: string, password: string }>());
export const signUpSucceedAction = createAction(`${AUTH_KEY} signup succeed`, props<{ user: UserModel ,redirectToHome: boolean }>());

export const autoLoginAction = createAction(`${AUTH_KEY} auto login`)
export const autoLogoutAction = createAction(`${AUTH_KEY} logout`); 