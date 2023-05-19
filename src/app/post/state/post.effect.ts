import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { PostFacadeService } from '../services/post-facade.service';
import { createEffect } from '@ngrx/effects';
import { filter, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { createPostAction, createdPostAction, deletePostAction, deletedPostAction, loadPostsAction, loadedPostsAction, updatePostAction, updatedPostAction } from './post.action';
import { Post } from 'src/app/shared/misc/shared.model';
import { Router } from '@angular/router';
import { ROUTER_NAVIGATION, RouterNavigatedAction } from '@ngrx/router-store';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { SharedState } from 'src/app/shared/state/shared.state';
import { getAllPosts } from './post.selectors';
import { dummyAction } from 'src/app/shared/state/shared.actions';


@Injectable()
export class PostEffects {
    constructor(private actions$: Actions, private postFacadeService: PostFacadeService, private router: Router, private store: Store<SharedState>) {}

    loadPost$ = createEffect(() => this.actions$.pipe(
        ofType(loadPostsAction),
        withLatestFrom(this.store.select(getAllPosts)),
        switchMap(([action, posts]) => (
            (!posts.length) ? 
            this.postFacadeService.getPostList().pipe(
            map((posts: Post[]) => loadedPostsAction({ posts }))
            ) : of(dummyAction())
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
            map(() => {
                const updatedPost: Update<Post> = { id: action.post.id, changes: { ...action.post } };
                return updatedPostAction({ post: updatedPost })
            })
        ))
    ));

    getPostByID$ = createEffect(() => this.actions$.pipe(
        ofType(ROUTER_NAVIGATION),
        filter((action: RouterNavigatedAction<any>) => action.payload.routerState.url.startsWith('/posts/details')),
        map((action: RouterNavigatedAction<any>) => action.payload.routerState?.['params']['id']),//here this map--> will return the id from the routerState
        withLatestFrom(this.store.select(getAllPosts)),
        switchMap(([id, posts]) => (!posts.length) ? this.postFacadeService.getPostByID(id).pipe(
                map((post) => {
                    const { title, description } = post;
                    const posts: Post[] = [{ id, title, description }];

                    return loadedPostsAction({ posts })
                })) : of(dummyAction())
        )
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
