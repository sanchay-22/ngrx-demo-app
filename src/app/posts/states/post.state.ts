import { Post } from '../../shared/shared.model';

export interface PostState {
    posts: Post[];
}

export const INITIAL_POST_STATE: PostState = {
    posts: []
}