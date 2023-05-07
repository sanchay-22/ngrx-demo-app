import { createReducer } from '@ngrx/store';
import { AUTH_INITAL_STATE_CONST , AuthState } from './auth.state';

const AUTH_REDUCER_CONST = createReducer(AUTH_INITAL_STATE_CONST);

export function authReducer(state: AuthState, action: any) {
    return AUTH_REDUCER_CONST(state, action);
}