import { Post } from '../../shared/misc/shared.model';

export interface PostState {
    post: Post[];
}

export const INITIAL_POST_STATE: PostState = {
    post: []
}