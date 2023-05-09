import { createReducer, on } from '@ngrx/store';
import { AUTH_INITAL_STATE_CONST , AuthState } from './auth.state';
import { loginSucceed } from './auth.actions';

const AUTH_REDUCER_CONST = createReducer(AUTH_INITAL_STATE_CONST,
    on(loginSucceed, (state, action) => ({ ...state, user: action.user }))
    );

export function authReducer(state: AuthState, action: any) {
    return AUTH_REDUCER_CONST(state, action);
}