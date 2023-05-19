import { Injectable } from '@angular/core';
import { TodoEntityBaseService } from './todo-entity-base.service';
import { Observable } from 'rxjs';
import { Todo } from '../misc/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoFacadeService {

  constructor(private todoEntityBaseService: TodoEntityBaseService) {}

  getAllTodos(): Observable<Todo[]> {
    return this.todoEntityBaseService.getAll();
  }
}
