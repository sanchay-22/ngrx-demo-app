import { createAction, props } from "@ngrx/store";
import { PostModel } from 'src/app/shared/shared.model';

export const POST_KEY_CONST = 'posts:';

export const addPost = createAction(`${[POST_KEY_CONST]} add post`, props<{ post: PostModel}>());
export const updatePost = createAction(`${[POST_KEY_CONST]} update post`, props<{ post: PostModel}>());
export const deletePost = createAction(`${[POST_KEY_CONST]} delete post`, props<{ id: string }>());
