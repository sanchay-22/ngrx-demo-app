import { createAction, props } from '@ngrx/store';

export const setLoader = createAction('[set]: loader', props<{ status: boolean }>());