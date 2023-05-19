import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/services/auth-guard';
import { PostDetailsComponent } from './post/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'counter',
    loadChildren: ():any => import('./counter/counter.module').then(m => m.CounterModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    loadChildren: (): any => import('./post/posts.module').then(m => m.PostsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'todos',
    loadChildren: (): any => import('./todo/todo.module').then(m => m.TodoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'posts/details/:id',
    component: PostDetailsComponent
  },
  {
    path: 'auth',
    loadChildren: (): any => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
