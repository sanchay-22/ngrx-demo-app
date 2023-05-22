import { Component, OnInit } from '@angular/core';
import { TodoFacadeService } from '../../services/todo-facade.service';
import { Observable, tap } from 'rxjs';
import { Todo } from '../../misc/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos$: Observable<Todo[]> = this.todoFacadeService.getAllTodos();

  constructor(private todoFacadeService: TodoFacadeService) {}

  deleteTodo(event: Event, todoID: string): void {
    event.preventDefault();
    if(confirm('Are you sure, you want to delete?')){
      this.todoFacadeService.deletePost(todoID).pipe(tap((data) => console.log(data))).subscribe();
    }
  }
}
