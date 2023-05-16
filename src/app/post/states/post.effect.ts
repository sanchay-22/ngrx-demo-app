import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { PostFacadeService } from '../services/post-facade.service';
import { createEffect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { createPostAction, createdPostAction, deletePostAction, deletedPostAction, loadPostsAction, loadedPostsAction, updatePostAction, updatedPostAction } from './post.action';
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
        ofType(createPostAction),
        switchMap((action) => 
        this.postFacadeService.createPost(action.post).pipe(
            map((response) => {
                const post: Post = { ...action.post, id: response.name };
                return createdPostAction({ post });
            })
        ))
    ));

    updatePost$ = createEffect(() => this.actions$.pipe(
        ofType(updatePostAction),
        switchMap((action) => 
        this.postFacadeService.updatePost(action.post).pipe(
            map((response) => {
                return updatedPostAction({ post: action.post });
            })
        ))
    ));


    deletePost$ = createEffect(() => this.actions$.pipe(
        ofType(deletePostAction),
        switchMap((action) => 
        this.postFacadeService.deletePost(action.id).pipe(
            map((response) => {
                return deletedPostAction({ id: action.id });
            })
        ))
    ));

}