import { createAction, props } from "@ngrx/store";
import { PostModel } from "src/app/shared/models/shared.model";

export const POST_KEY_CONST = 'posts:';

export const ADD_POST_ACTION_CONST = createAction(`${[POST_KEY_CONST]} add posts`, props<{ post: PostModel}>());