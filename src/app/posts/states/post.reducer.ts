import { createReducer, on } from '@ngrx/store';
import { POST_INITIAL_STATE_CONST } from './post.state';
import * as postActions from './post.action'
import { state } from '@angular/animations';

export const POST_REDUCER_CONST = createReducer(POST_INITIAL_STATE_CONST, 
    on(postActions.addPost, (state, action) => {
        let post = { ...action.post };
        post.id = (state.posts.length + 1).toString();

        return {
            ...state, posts: [...state.posts, post]
        }
    }),
    on(postActions.updatePost, (state, action) => ({
        ...state,
        posts: state.posts.map(post => post.id === action.post.id ? action.post : post)
      }))
    
    );

export function postReducer(state: any, action: any): any {
    return POST_REDUCER_CONST(state, action);
}