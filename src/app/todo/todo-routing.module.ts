import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { PostDetailsComponent } from '../post/post-details/post-details.component';
import { TodosResolver } from './todo.resolver';
import { TodoBaseDataService } from './services/todo-base-data.service';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    resolve: { todos: TodosResolver },
    children: [
      {
        path: 'add',
        component: CreateTodoComponent
      },
      {
        path: 'edit/:id',
        component: EditTodoComponent
      },
      {
        path: 'details/:id',
        component: PostDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TodosResolver, TodoBaseDataService]
})
export class TodoRoutingModule { }
