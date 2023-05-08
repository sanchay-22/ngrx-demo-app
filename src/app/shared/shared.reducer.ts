import { createReducer, on } from '@ngrx/store'
import { LOADER_INTIAL_STATE_CONST } from './shared.const'
import { LoaderState } from './shared.model'
import { setLoaderAction } from './shared.actions';

const LOADER_REDUCER_CONST = createReducer(LOADER_INTIAL_STATE_CONST,
    on(setLoaderAction, (state, action) => ({ ...state, loadingStatus: action.status }))
    );

export function loaderReducer(state: LoaderState, action: any): any {
    return LOADER_REDUCER_CONST(state, action)
}
