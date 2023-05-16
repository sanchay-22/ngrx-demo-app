import { AuthState, ApiState } from './shared.model';
import { StateEnum } from './shared.enum';
import { apiReducer } from './shared.reducer';
import { authReducer } from '../auth/states/auth.reducers';

export interface SharedState {
    [StateEnum.LOADER_STATE]: ApiState;
    [StateEnum.AUTH_STATE]: AuthState;
}

export const sharedReducer = {
    loaderState: apiReducer,
    authState: authReducer
};