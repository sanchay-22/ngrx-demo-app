import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Post } from '../../shared/misc/shared.model';

export interface PostState extends EntityState<Post> {} //no need to implement as we have extended

export const postsAdapter = createEntityAdapter<Post>(); //creating the instance of entity adapter to simplify the crud operations on entity collection

export const INITIAL_POST_STATE: PostState = postsAdapter.getInitialState(); //we dont have post intial state as we are going to get form api
/*
if you have post initial state then you can as below
export const INITIAL_POST_STATE: PostState = postsAdapter.getInitialState(
    {
        posts: .....
    }
);
*/