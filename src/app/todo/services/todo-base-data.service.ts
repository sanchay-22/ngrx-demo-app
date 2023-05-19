import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Todo } from '../misc/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoBaseDataService extends DefaultDataService<Todo> {

  todoUrl = 'https://ngrx-testing-app-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json';

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Todo', http, httpUrlGenerator);
  }

  override getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl).pipe(
      map((data) => {
        const todos: Todo[] = [];
        for(let key in data) {
          todos.push({ ...data[key], id: key });
        }
        return todos;
      })
    );
  }
}
