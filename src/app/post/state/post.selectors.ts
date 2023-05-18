import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState, postsAdapter } from './post.state';
import { StateEnum } from 'src/app/shared/misc/shared.enum';
import { getCurrentRoute } from 'src/app/shared/store/shared.selectors';
import { RouterStateUrl } from 'src/app/shared/misc/shared.model';

const getPostState = createFeatureSelector<PostState>(StateEnum.POST_STATE);

export const postsSelectors = postsAdapter.getSelectors();

export const getAllPosts  = createSelector(getPostState, postsSelectors.selectAll);
export const getPostById = createSelector(postsSelectors.selectEntities, getCurrentRoute, (posts, route: RouterStateUrl) => posts ? posts[route.params['id']] : null)
