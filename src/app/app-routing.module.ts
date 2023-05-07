import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'counter',
    loadChildren: ():any => import('./counter/counter.module').then(m => m.CounterModule)
  },
  {
    path: 'posts',
    loadChildren: (): any => import('./posts/posts.module').then(m => m.PostsModule)
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
