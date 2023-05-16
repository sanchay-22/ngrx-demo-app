import { createAction, props } from '@ngrx/store';
import { API_STATE_KEY_CONST } from './shared.const';

export const loaderAction = createAction(`[${API_STATE_KEY_CONST}]: set loader`, props<{ loadingStatus: boolean }>());
export const errorMessageAction = createAction(`[${API_STATE_KEY_CONST}]: set error message`, props<{ errorMessage: string }>());
