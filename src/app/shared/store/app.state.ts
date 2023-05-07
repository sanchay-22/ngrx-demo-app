import { counterReducer } from 'src/app/counter/state/counter.reducer';
import { CounterStateModel } from 'src/app/counter/state/counter.state';
import { postReducer } from 'src/app/posts/states/post.reducer';
import { PostStateModel } from 'src/app/posts/states/post.state';

export interface AppStateModel {
    counter: CounterStateModel;
    posts: PostStateModel;
}

export const appReducer = {
    counter: counterReducer,
    posts: postReducer
}
