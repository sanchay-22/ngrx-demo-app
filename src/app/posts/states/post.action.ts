import { createAction, props } from "@ngrx/store";
import { PostModel } from 'src/app/shared/shared.model';

export const POST_KEY= '[posts]:';

export const addPostAciton = createAction(`${POST_KEY} add post`, props<{ post: PostModel}>());
export const updatePostAction = createAction(`${POST_KEY} update post`, props<{ post: PostModel}>());
export const deletePostAction = createAction(`${POST_KEY} delete post`, props<{ id: string }>());

export const loadPostAction = createAction(`${POST_KEY} load post`);
export const loadPostSuccessfulAction = createAction(`${POST_KEY} load post successful`, props<{ post: PostModel[] }>());