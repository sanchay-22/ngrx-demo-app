import { createReducer, on } from '@ngrx/store';
import { INITIAL_POST_STATE } from './post.state';
import * as postActions from './post.action'

export const POST_REDUCER_CONST = createReducer(INITIAL_POST_STATE, 
    on(postActions.addPostAciton, (state, action) => ({
        ...state,
        posts: state.posts.concat({ ...action.post, id: (state.posts.length + 1).toString() })
      })),
    on(postActions.updatePostAction, (state, action) => ({
        ...state,
        posts: state.posts.map(post => post.id === action.post.id ? action.post : post)
      })),
    on(postActions.deletePostAction, (state, { id }) => ({
       ...state,
      posts: state.posts.filter(post => post.id !== id)
    })),
    on(postActions.loadPostSuccessfulAction, (state, action) => ({ ...state, posts: action.posts })),
    );

export function postReducer(state: any, action: any): any {
    return POST_REDUCER_CONST(state, action);
}