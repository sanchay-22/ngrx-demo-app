import { createReducer } from '@ngrx/store';
import { POST_INITIAL_STATE_CONST } from './post.state';

export const POST_REDUCER_CONST = createReducer(POST_INITIAL_STATE_CONST);

export function postReducer(state: any, action: any): any {
    return POST_REDUCER_CONST(state, action);
}