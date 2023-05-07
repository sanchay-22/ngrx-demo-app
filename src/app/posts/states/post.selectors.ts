import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostStateModel } from './post.state';

const getPostState = createFeatureSelector<PostStateModel>('posts');

export const selectAllPosts  = createSelector(getPostState, (state) => state.posts);
export const selectPostById = (id: any) => createSelector(getPostState, (state: PostStateModel) => {
    return state.posts.find((post) => post.id === id);
});