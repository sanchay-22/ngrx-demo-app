import { createAction, props } from '@ngrx/store';

export const INCREMENT_ACTION_CONST = createAction('inc');
export const DECREMENT_ACTION_CONST = createAction('dec');
export const RESET_ACTION_CONST = createAction('reset');

export const CUSTOM_INCREMENT_ACTION_CONST = createAction('customInc', props<{ value: number }>());
export const CUSTOM_DECREMENT_ACTION_CONST = createAction('customDec', props<{ value: number }>());

export const CHANNEL_NAME_ACTION_CONST = createAction('channelName', props<{channelName: string}>());
