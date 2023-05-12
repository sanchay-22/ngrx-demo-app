import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { PostFacadeService } from '../services/post-facade.service';
import { createEffect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';
import { createPostAciton, createdPostAction, loadPostsAction, loadedPostsAction } from './post.action';
import { Post } from 'src/app/shared/shared.model';


@Injectable()
export class PostEffects {
    constructor(private actions$: Actions, private postFacadeService: PostFacadeService) {}
    
    loadPost$ = createEffect(() => this.actions$.pipe(
        ofType(loadPostsAction),
        switchMap(() => (
            this.postFacadeService.getPostList().pipe(
            map((posts: Post[]) => loadedPostsAction({ posts }))
            )
        ))
    ));

    createPost$ = createEffect(() => this.actions$.pipe(
        ofType(createPostAciton),
        switchMap((action) => 
        this.postFacadeService.createPost(action.post).pipe(
            map((response) => {
                const post: Post = { ...action.post, id: response.name };
                return createdPostAction({ post })
            })
        ))
    ));

}