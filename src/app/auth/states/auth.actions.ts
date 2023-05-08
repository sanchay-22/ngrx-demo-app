import { createAction, props } from '@ngrx/store';
import { UserModel } from '../models/auth.model';

export const AUTH_KEY_CONST: string = '[auth login]:';

export const login = createAction(AUTH_KEY_CONST, props<{ email: string, password: string }>());
export const loginSuccess = createAction(`${AUTH_KEY_CONST} succeeded`, props<{ user: UserModel }>());
export const loginFailed = createAction(`${AUTH_KEY_CONST} failed`, props<{ email: string, password: string }>());