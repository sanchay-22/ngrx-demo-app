import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { TodosResolver } from './todo.resolver';
import { TodoBaseDataService } from './services/todo-base-data.service';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    resolve: { todos: TodosResolver },
    children: [
      {
        path: 'add',
        component: CreateTodoComponent,
        resolve: { todos: TodosResolver },
      },
      {
        path: 'edit/:id',
        component: EditTodoComponent,
        resolve: { todos: TodosResolver },
      },
      {
        path: 'details/:id',
        component: TodoDetailsComponent,
        resolve: { todos: TodosResolver },
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
