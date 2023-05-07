import { createAction, props } from "@ngrx/store";
import { PostModel } from "src/app/shared/models/shared.model";

export const POST_KEY_CONST = 'posts:';

export const addPost = createAction(`${[POST_KEY_CONST]} add posts`, props<{ post: PostModel}>());
