import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostStateModel } from './post.state';

const GET_POST_STATE_CONST = createFeatureSelector<PostStateModel>('posts');

export const GET_POST_SELECTOR_CONST  = createSelector(GET_POST_STATE_CONST, (state) => state.posts);