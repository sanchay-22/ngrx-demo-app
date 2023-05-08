import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StateEnum } from '../shared/shared.enum';
import { authReducer } from './states/auth.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './states/auth.effects';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),//registerig the authEffects in the authMoudle
    StoreModule.forFeature(StateEnum.AUTH, authReducer)//registerign the auth store in the authModule
  ]
})
export class AuthModule { }
