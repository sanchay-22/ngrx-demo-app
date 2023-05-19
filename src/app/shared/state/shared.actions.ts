import { createAction, props } from '@ngrx/store';
import { API_STATE_KEY_CONST } from '../misc/shared.const';

export const dummyAction = createAction(`[dummy]`);

export const loaderAction = createAction(`[${API_STATE_KEY_CONST}]: set loader`, props<{ loadingStatus: boolean }>());
export const errorMessageAction = createAction(`[${API_STATE_KEY_CONST}]: set error message`, props<{ errorMessage: string }>());