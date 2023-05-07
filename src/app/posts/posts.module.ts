import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './states/post.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature('post', postReducer)

  ]
})
export class PostsModule { }
