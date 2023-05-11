import { Post } from '../../shared/shared.model';

export interface PostState {
    posts: Post[];
}

export const POST_INITIAL_STATE_CONST: PostState = {
    posts: [
        {
            id: '1', title: 'Sample test 1', description: 'Description for post 1'
        },
        {
            id: '2', title: 'Sample test 2', description: 'Description for post 2'
        }
    ]
}