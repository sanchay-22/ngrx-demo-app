import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.state';
import { StateEnum } from 'src/app/shared/misc/shared.enum';
import { getCurrentRoute } from 'src/app/shared/store/shared.selectors';
import { RouterStateUrl } from 'src/app/shared/misc/shared.model';

const getPostState = createFeatureSelector<PostState>(StateEnum.POST_STATE);

export const getAllPosts  = createSelector(getPostState, (state) => state.post);
export const getPostById = createSelector(getPostState, getCurrentRoute,
     (posts: PostState, route: RouterStateUrl) => posts ? posts.post.find((post) => post.id === route.params['id']) : null);