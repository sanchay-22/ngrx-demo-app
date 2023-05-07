import { createReducer } from '@ngrx/store';
import { AuthIntialState, AuthState } from './auth.state';

const authReducer = createReducer(AuthIntialState);

export function AuthReducer(state: AuthState, action: any) {
    return authReducer(state, action);
}