import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostStateModel } from './post.state';

const GET_POST_STATE_CONST = createFeatureSelector<PostStateModel>('posts');

export const POST_SELECTOR = createSelector(GET_POST_STATE_CONST, (state) => state.posts);