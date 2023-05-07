import { createAction, props } from '@ngrx/store';

export const AUTH_KEY_CONST: string = 'auth login';

export const login = createAction(AUTH_KEY_CONST, props<{ email: string, password: string }>());
export const loginSuccess = createAction(`${[AUTH_KEY_CONST]} success`, props<{ email: string, password: string }>());
export const loginFailed = createAction(`${[AUTH_KEY_CONST]} failed`, props<{ email: string, password: string }>());