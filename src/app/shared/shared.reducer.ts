import { createReducer, on } from '@ngrx/store'
import { API_INTIAL_STATE_CONST } from './shared.const'
import { ApiState } from './shared.model'
import { setErrorMessageAction, setLoaderAction } from './shared.actions';

const API_STATE_REDUCER_CONST = createReducer(API_INTIAL_STATE_CONST,
    on(setLoaderAction, (state, action) => ({ ...state, loadingStatus: action.loadingStatus })),
    on(setErrorMessageAction, (state, action) => ({ ...state, errorMessage: action.errorMessage })),
    );

export function loaderReducer(state: ApiState, action: any): any {
    return API_STATE_REDUCER_CONST(state, action)
}
