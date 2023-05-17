import { Post } from '../../shared/misc/shared.model';

export interface PostState {
    posts: Post[];
}

export const INITIAL_POST_STATE: PostState = {
    posts: []
}