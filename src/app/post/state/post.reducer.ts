import { createReducer, on } from '@ngrx/store';
import { INITIAL_POST_STATE, PostState, postsAdapter } from './post.state';
import * as postActions from './post.action'

export const POST_REDUCER_CONST = createReducer<PostState>(INITIAL_POST_STATE,
    on(postActions.createdPostAction, (state, action) => postsAdapter.addOne(action.post, state)),

    on(postActions.updatedPostAction, (state, action) => postsAdapter.updateOne(action.post, state)),

    on(postActions.deletedPostAction, (state, { id }) => postsAdapter.removeOne(id, state)),

    on(postActions.loadedPostsAction, (state, action) => postsAdapter.setAll(action.posts, state)),
    );
  
export type PostAction = typeof postActions.createdPostAction | typeof postActions.updatedPostAction | typeof postActions.deletedPostAction | typeof postActions.loadedPostsAction;

export function postReducer(state: PostState, action: PostAction): PostState {
    return POST_REDUCER_CONST(state, action);
}