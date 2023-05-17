import { createReducer, on } from '@ngrx/store'
import { API_INTIAL_STATE_CONST } from './misc/shared.const'
import { ApiState } from './misc/shared.model'
import * as sharedActions from './shared.actions';

const API_STATE_REDUCER_CONST = createReducer(API_INTIAL_STATE_CONST,
    on(sharedActions.loaderAction, (state, action) => ({ ...state, loadingStatus: action.loadingStatus })),
    on(sharedActions.errorMessageAction, (state, action) => ({ ...state, errorMessage: action.errorMessage })),
    );

export function apiReducer(state: ApiState | undefined, action: any): ApiState {
    return API_STATE_REDUCER_CONST(state, action)
}
