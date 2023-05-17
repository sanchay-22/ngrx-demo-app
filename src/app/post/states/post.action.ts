import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/shared/misc/shared.model';

export const POST_KEY= ': post';

export const createPostAction = createAction(`create ${POST_KEY}`, props<{ post: Post}>());
export const createdPostAction = createAction(`created ${POST_KEY}`, props<{ post: Post}>());

export const updatePostAction = createAction(`update ${POST_KEY}`, props<{ post: Post }>());
export const updatedPostAction = createAction(`updated ${POST_KEY}`, props<{ post: Post }>())

export const deletePostAction = createAction(`delete ${POST_KEY}`, props<{ id: string }>());
export const deletedPostAction = createAction(`deleted ${POST_KEY}`, props<{ id: string }>());

export const loadPostsAction = createAction(`load ${POST_KEY}s`);
export const loadedPostsAction = createAction(`loaded ${POST_KEY}s`, props<{ posts: Post[] }>());