import { createAction, props } from '@ngrx/store';
import { SHARED_API_STATE_KEY_CONST } from './shared.const';

export const loaderAction = createAction(`[${SHARED_API_STATE_KEY_CONST}]: set loader`, props<{ loadingStatus: boolean }>());
export const errorMessageAction = createAction(`[${SHARED_API_STATE_KEY_CONST}]: set error message`, props<{ errorMessage: string }>());
