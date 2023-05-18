import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState, postsAdapter } from './post.state';
import { StateEnum } from 'src/app/shared/misc/shared.enum';
import { getCurrentRoute } from 'src/app/shared/store/shared.selectors';
import { RouterStateUrl } from 'src/app/shared/misc/shared.model';

export const postsSelectors = postsAdapter.getSelectors();

const getPostState = createFeatureSelector<PostState>(StateEnum.POST_STATE);
const getPostEntities = createSelector(getPostState, postsSelectors.selectEntities);


export const getAllPosts  = createSelector(getPostState, postsSelectors.selectAll);
export const getPostById = createSelector(getPostEntities, getCurrentRoute, (posts, route: RouterStateUrl) => posts ? posts[route.params['id']] : null)
