import { createReducer, on } from '@ngrx/store'
import { LOADER_INTIAL_STATE_CONST } from './shared.const'
import { LoaderState } from './shared.model'
import { setLoader } from './shared.actions';

const LOADER_REDUCER_CONST = createReducer(LOADER_INTIAL_STATE_CONST,
    on(setLoader, (state, action) => ({ ...state, showLoader: action.status }))
    );

export function loaderReducer(state: LoaderState, action: any): any {
    return LOADER_REDUCER_CONST(state, action)
}