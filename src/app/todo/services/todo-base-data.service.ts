import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Todo } from '../misc/todo.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoBaseDataService extends DefaultDataService<Todo> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Todo', http, httpUrlGenerator);
  }
}
