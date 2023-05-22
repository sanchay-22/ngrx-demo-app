import { Injectable } from '@angular/core';
import { TodoEntityBaseService } from './todo-entity-base.service';
import { Observable, map, of } from 'rxjs';
import { Todo } from '../misc/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoFacadeService {

  constructor(private todoEntityBaseService: TodoEntityBaseService) {}

  addTodo(payload: any): Observable<Todo> {
    return this.todoEntityBaseService.add(payload);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.todoEntityBaseService.entities$;//this code will not directly hit api, rather it will emit the collection maintained by the todoEntityBaseService 
  }

  updateTodo(payload: Todo): Observable<Todo> {
    return this.todoEntityBaseService.update(payload);
  }

  deletePost(id: string): Observable<boolean> {
    return this.todoEntityBaseService.delete(id).pipe(map(() => true));
  }
}
