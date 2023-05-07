import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostStateModel } from './post.state';
import { StateEnum } from 'src/app/shared/shared.enum';

const getPostState = createFeatureSelector<PostStateModel>(StateEnum.POST);

export const selectAllPosts  = createSelector(getPostState, (state) => state.posts);
export const selectPostById = (id: any) => createSelector(getPostState, (state: PostStateModel) => {
    return state.posts.find((post) => post.id === id);
});