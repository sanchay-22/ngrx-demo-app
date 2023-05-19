import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Todo, TodoPayloadAttributes } from '../misc/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoBlService {
 
  constructor() { }

 formatAddTodoResponse(response: Observable<{ name: string }>, payload: TodoPayloadAttributes): Observable<Todo> {
    return response.pipe(map((data: any) => ({ ...payload, id: data.name })));
  }

  formatTodosResponse(response: Observable<any>): Observable<Todo[]> {
    return response.pipe(map((data: any) => Object.keys(data).map(id => ({ id, ...data[id] }))));
  }
}
