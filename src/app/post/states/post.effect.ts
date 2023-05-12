import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { PostFacadeService } from '../services/post-facade.service';
import { createEffect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { loadPostAction, loadPostSuccessfulAction } from './post.action';
import { Post } from 'src/app/shared/shared.model';


@Injectable()
export class PostEffects {
    constructor(private actions$: Actions, private postFacadeService: PostFacadeService) {}
    
    loadPost$ = createEffect(() => this.actions$.pipe(
        ofType(loadPostAction),
        switchMap(() => {
            this.postFacadeService.getPostList().subscribe(data => console.log(data));
            return this.postFacadeService.getPostList().pipe(
                map((posts: Post[]) => loadPostSuccessfulAction({ posts }))
                );
        })
        )
    );
}