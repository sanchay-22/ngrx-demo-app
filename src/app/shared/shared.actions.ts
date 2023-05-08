import { createAction, props } from '@ngrx/store';
import { API_STATE_KEY_CONST } from './shared.const';

export const setLoaderAction = createAction(`[${API_STATE_KEY_CONST}]: set loader`, props<{ status: boolean }>());
export const setErrorMessageAction = createAction(`[${API_STATE_KEY_CONST}]: set error message`, props<{ message: string }>)();
