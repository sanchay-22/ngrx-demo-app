import { createReducer, on } from '@ngrx/store';
import { INITIAL_POST_STATE, PostState } from './post.state';
import * as postActions from './post.action'

export const POST_REDUCER_CONST = createReducer<PostState>(INITIAL_POST_STATE, 
    on(postActions.createdPostAction, (state, action) => ({
        ...state,
        posts: state.post.concat({ ...action.post })
      })),

    on(postActions.updatedPostAction, (state, action) => ({
        ...state,
        posts: state.post.map(post => post.id === action.post.id ? action.post : post)
      })),

    on(postActions.deletedPostAction, (state, { id }) => ({
       ...state,
      posts: state.post.filter(post => post.id !== id)
    })),

    on(postActions.loadedPostsAction, (state, action) => ({ ...state, posts: action.posts })),
    );
  
export type PostAction = typeof postActions.createdPostAction | typeof postActions.updatedPostAction | typeof postActions.deletedPostAction | typeof postActions.loadedPostsAction;

export function postReducer(state: PostState, action: PostAction): PostState {
    return POST_REDUCER_CONST(state, action);
}