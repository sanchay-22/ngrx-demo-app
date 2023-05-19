import { Injectable } from '@angular/core';
import { TodoBaseApiService } from './todo-base-api.service';
import { Observable } from 'rxjs';
import { Todo } from '../misc/todo.model';

@Injectable({
  providedIn: 'root'
})
export class PostFacadeService {

  constructor(private todoBaseApiService: TodoBaseApiService) {}

  getAllTodos(): Observable<Todo[]> {
    return this.todoBaseApiService.getAll();
  }
}
