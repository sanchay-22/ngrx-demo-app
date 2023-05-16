import { createReducer, on } from '@ngrx/store';
import { AuthState, INITAL_AUTH_STATE } from './auth.state';
import * as authActions from './auth.actions';

const AUTH_REDUCER = createReducer(INITAL_AUTH_STATE,
    on(authActions.loginSucceedAction, (state, action) => ({ ...state, user: action.user })),
    on(authActions.signUpSucceedAction, (state, action) => ({...state, user: action.user })),
    on(authActions.autoLogoutAction, (state) => ({ ...state, user: null })),
    );

export function authReducer(state: AuthState, action: any) {
    return AUTH_REDUCER(state, action);
}