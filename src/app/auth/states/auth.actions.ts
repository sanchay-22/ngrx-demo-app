import { createAction, props } from '@ngrx/store';
import { UserModel } from '../models/auth.model';

export const AUTH_KEY_CONST: string = '[auth]:';

export const setLoginAction = createAction(`${AUTH_KEY_CONST} login`, props<{ email: string, password: string }>());
export const setLoginSucceedAction = createAction(`${AUTH_KEY_CONST}login succeed`, props<{ user: UserModel }>());
export const setLoginFailedAction = createAction(`${AUTH_KEY_CONST} login failed`, props<{ email: string, password: string }>());

export const setSignUpAction = createAction(`${AUTH_KEY_CONST} signup`, props<{ email: string, password: string }>());
export const setSignUpSucceedAction = createAction(`${AUTH_KEY_CONST} signup succeed`, props<{ user: UserModel }>());

export const setAutoLoginAction = createAction(`${AUTH_KEY_CONST} auto login`)
export const setAutoLogoutAction = createAction(`${AUTH_KEY_CONST} logout`); 