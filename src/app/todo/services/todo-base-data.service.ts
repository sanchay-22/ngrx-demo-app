import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Todo } from '../misc/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoBlService } from './todo-bl.service';


@Injectable({
  providedIn: 'root'
})
export class TodoBaseDataService extends DefaultDataService<Todo> {

  todoUrl = 'https://ngrx-testing-app-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json';

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, private todoBlService: TodoBlService) {
    super('Todo', http, httpUrlGenerator);
  }

  override getAll(): Observable<Todo[]> {
    return this.todoBlService.formatTodosResponse(this.http.get(this.todoUrl));
  }
}
