import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.state';
import { StateEnum } from 'src/app/shared/shared.enum';

const getPostState = createFeatureSelector<PostState>(StateEnum.POST_STATE);

export const selectAllPosts  = createSelector(getPostState, (state) => state.posts);
export const selectPostById = (id: any) => createSelector(getPostState, (state: PostState) => {
    return state.posts.find((post) => post.id === id);
});