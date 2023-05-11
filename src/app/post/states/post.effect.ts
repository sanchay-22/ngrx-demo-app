import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { PostFacadeService } from '../services/post-facade.service';
import { createEffect } from '@ngrx/effects';
import { switchMap, tap } from 'rxjs';
import { loadPostAction } from './post.action';


@Injectable()
export class PostEffects {
    constructor(private actions$: Actions, private postFacadeService: PostFacadeService) {}
    
    loadPost$ = createEffect(() => this.actions$.pipe(
        ofType(loadPostAction),
        switchMap((action) => {
            this.postFacadeService.getPostList().subscribe(data => console.log(data));
            return this.postFacadeService.getPostList();
        })
        )
    , 
    {dispatch: false });
}