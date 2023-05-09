import { PostModel } from '../../shared/shared.model';

export interface PostStateModel {
    posts: PostModel[];
}

export const POST_INITIAL_STATE_CONST: PostStateModel = {
    posts: [
        {
            id: '1', title: 'Sample test 1', description: 'Description for post 1'
        },
        {
            id: '2', title: 'Sample test 2', description: 'Description for post 2'
        }
    ]
}