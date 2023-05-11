import { createAction, props } from "@ngrx/store";
import { PostModel } from 'src/app/shared/shared.model';

export const POST_KEY= '[posts] :';

export const setAddPost = createAction(`${POST_KEY} add post`, props<{ post: PostModel}>());
export const setUpdatePost = createAction(`${POST_KEY} update post`, props<{ post: PostModel}>());
export const setDeletePost = createAction(`${POST_KEY} delete post`, props<{ id: string }>());
