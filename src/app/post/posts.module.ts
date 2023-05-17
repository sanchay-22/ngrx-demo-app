import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PostsRoutingModule } from './posts-routing.module';
import { postReducer } from './states/post.reducer';
import { StateEnum } from '../shared/misc/shared.enum';
import { PostEffects } from './states/post.effect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(StateEnum.POST_STATE, postReducer),
    EffectsModule.forFeature([PostEffects])
  ]
})
export class PostsModule { }
