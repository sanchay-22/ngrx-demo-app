import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Todo, TodoPayloadAttributes } from '../misc/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoBlService } from './todo-bl.service';
import { Update } from '@ngrx/entity';


@Injectable({
  providedIn: 'root'
})
export class TodoBaseDataService extends DefaultDataService<Todo> {

  todoUrl = 'https://ngrx-testing-app-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json';
  todoBaseUrl = 'https://ngrx-testing-app-default-rtdb.asia-southeast1.firebasedatabase.app/todos/';


  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, private todoBlService: TodoBlService) {
    super('Todo', http, httpUrlGenerator);
  }

  override getAll(): Observable<Todo[]> {
    return this.todoBlService.formatTodosResponse(this.http.get(this.todoUrl));
  }

  override add(payload: TodoPayloadAttributes): Observable<Todo> {
    return this.todoBlService.formatAddTodoResponse(this.http.post<{ name: string }>(this.todoUrl, payload), payload);
  }

  override update(payload: Update<Todo>): Observable<Todo> {
    return this.http.put<Todo>(`${this.todoBaseUrl}${payload.id}.json`, { ...payload.changes });
  }

  override delete(id: string ): Observable<string> {
    return this.http.delete<string>(`${this.todoBaseUrl}${id}.json`);
  }
}
