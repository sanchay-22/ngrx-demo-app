import { AuthState, SharedApiState } from './shared.model';
import { StateEnum } from './shared.enum';
import {sharedApiReducer } from './shared.reducer';
import { authReducer } from '../auth/states/auth.reducers';

export interface AppState {
    [StateEnum.LOADER_STATE]: SharedApiState;
    [StateEnum.AUTH_STATE]: AuthState;
}

export const appReducer = {
    loaderState: sharedApiReducer,
    authState: authReducer
};