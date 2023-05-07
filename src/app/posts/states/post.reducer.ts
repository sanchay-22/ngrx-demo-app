import { createReducer, on } from '@ngrx/store';
import { POST_INITIAL_STATE_CONST } from './post.state';
import * as postActions from './post.action'

export const POST_REDUCER_CONST = createReducer(POST_INITIAL_STATE_CONST, 
    on(postActions.addPost, (state, action) => {
        let post = { ...action.post };
        post.id = (state.posts.length + 1).toString();

        return {
            ...state, posts: [...state.posts, post]
        }
    }));

export function postReducer(state: any, action: any): any {
    return POST_REDUCER_CONST(state, action);
}