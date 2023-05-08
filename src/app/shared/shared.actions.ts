import { createAction, props } from '@ngrx/store';

export const setLoaderAction = createAction('[set]: loader', props<{ status: boolean }>());