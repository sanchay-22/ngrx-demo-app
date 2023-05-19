import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { environment } from 'environments/environment';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { EffectsModule } from '@ngrx/effects';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { sharedReducer } from './shared/state/shared.state';
import { AuthEffects } from './auth/state/auth.effects';
import { AuthTokenIntercepter } from './auth/services/auth-token.intercepter';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './shared/state/custom-serializer';
import { TotoListComponent } from './todo/components/toto-list/toto-list.component';
import { CreateTodoComponent } from './todo/components/create-todo/create-todo.component';
import { EditTodoComponent } from './todo/components/edit-todo/edit-todo.component';
import { TodoDetailsComponent } from './todo/components/todo-details/todo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PostListComponent,
    AddPostComponent,
    EditPostComponent,
    LoadingComponent,
    TotoListComponent,
    CreateTodoComponent,
    EditTodoComponent,
    TodoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(sharedReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthTokenIntercepter, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
