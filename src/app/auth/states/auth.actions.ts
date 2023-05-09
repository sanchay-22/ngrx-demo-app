import { createAction, props } from '@ngrx/store';
import { UserModel } from '../models/auth.model';

export const AUTH_KEY_CONST: string = '[auth]:';

export const login = createAction(`${AUTH_KEY_CONST} login`, props<{ email: string, password: string }>());
export const loginSucceed = createAction(`${AUTH_KEY_CONST}login succeed`, props<{ user: UserModel }>());
export const loginFailed = createAction(`${AUTH_KEY_CONST} login failed`, props<{ email: string, password: string }>());