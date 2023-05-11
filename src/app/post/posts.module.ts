import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './states/post.reducer';
import { StateEnum } from '../shared/shared.enum';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(StateEnum.POST_STATE, postReducer)

  ]
})
export class PostsModule { }
