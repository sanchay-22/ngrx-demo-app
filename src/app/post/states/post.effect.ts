import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { PostFacadeService } from '../services/post-facade.service';
import { createEffect } from '@ngrx/effects';
import { filter, map, switchMap, tap } from 'rxjs';
import { createPostAction, createdPostAction, deletePostAction, deletedPostAction, loadPostsAction, loadedPostsAction, updatePostAction, updatedPostAction } from './post.action';
import { Post } from 'src/app/shared/misc/shared.model';
import { Router } from '@angular/router';
import { ROUTER_NAVIGATION, RouterNavigatedAction } from '@ngrx/router-store';

@Injectable()
export class PostEffects {
    constructor(private actions$: Actions, private postFacadeService: PostFacadeService, private router: Router) {}
    
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
            map(() => updatedPostAction({ post: action.post }))
        ))
    ));

    getPost$ = createEffect(() => this.actions$.pipe(
        ofType(ROUTER_NAVIGATION),
        filter((action: RouterNavigatedAction<any>) => action.payload.routerState.url.startsWith('/posts/details')),
        map((action: RouterNavigatedAction<any>) => action.payload.routerState?.['params']['id']),//here this map--> will return the id from the routerState
        switchMap((id) => this.postFacadeService.getPostByID(id).pipe(
            map((post) => {  
                const posts: Post[] = [post];

                return loadedPostsAction({ posts })
            })
        ))
    ));

    navigateOnAddUpdatePost$  = createEffect(() => this.actions$.pipe(
        ofType(updatedPostAction, createdPostAction),
        tap(() => this.router.navigate(['/posts']))
    ), { dispatch : false });

    deletePost$ = createEffect(() => this.actions$.pipe(
        ofType(deletePostAction),
        switchMap((action) => 
        this.postFacadeService.deletePost(action.id).pipe(
            map(() => deletedPostAction({ id: action.id }))
        ))
    ));

}