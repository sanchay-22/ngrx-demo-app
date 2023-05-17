import { AuthState, ApiState } from './misc/shared.model';
import { StateEnum } from './misc/shared.enum';
import { apiReducer } from './shared.reducer';
import { authReducer } from '../auth/states/auth.reducers';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

export interface SharedState {
    [StateEnum.LOADER_STATE]: ApiState;
    [StateEnum.AUTH_STATE]: AuthState;
    router: RouterReducerState
}

export const sharedReducer = {
    loaderState: apiReducer,
    authState: authReducer,
    router: routerReducer
};