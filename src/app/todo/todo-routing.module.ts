import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { PostDetailsComponent } from '../post/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    children: [
      {
        path: 'create',
        component: CreateTodoComponent
      },
      {
        path: 'edit/:id',
        component: EditTodoComponent
      },
      {
        path: 'detail/:id',
        component: PostDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
