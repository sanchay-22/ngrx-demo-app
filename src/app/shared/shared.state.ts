import { SharedApiState } from './shared.model';
import { StateEnum } from './shared.enum';
import {sharedApiReducer } from './shared.reducer';
import { AuthState } from '../auth/states/auth.state';
import { authReducer } from '../auth/states/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';



export interface AppState {
    [StateEnum.LOADER_STATE]: SharedApiState;
    [StateEnum.AUTH_STATE]: AuthState
}

export const appReducer: ActionReducerMap<any> = {
    loaderState: sharedApiReducer,
    authState: authReducer
};