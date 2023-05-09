import { createAction, props } from '@ngrx/store';
import { SHARED_API_STATE_KEY_CONST } from './shared.const';

export const setLoaderAction = createAction(`[${SHARED_API_STATE_KEY_CONST}]: set loader`, props<{ loadingStatus: boolean }>());
export const setErrorMessageAction = createAction(`[${SHARED_API_STATE_KEY_CONST}]: set error message`, props<{ errorMessage: string }>());
