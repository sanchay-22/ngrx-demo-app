import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Todo } from '../misc/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoBlService {

  constructor() { }

  formatTodosResponse(response: any) : Observable<Todo[]> {
    return response.pipe(
       map((data: any) => {
         const todos: Todo[] = [];
         for(let key in data) {
           todos.push({ ...data[key], id: key });
         }
         return todos;
       })
     );
   }
}
