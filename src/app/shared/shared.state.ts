import { AuthState, ApiState } from './shared.model';
import { StateEnum } from './shared.enum';
import { apiReducer } from './shared.reducer';
import { authReducer } from '../auth/states/auth.reducers';

export interface AppState {
    [StateEnum.LOADER_STATE]: ApiState;
    [StateEnum.AUTH_STATE]: AuthState;
}

export const appReducer = {
    loaderState: apiReducer,
    authState: authReducer
};