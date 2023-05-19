import { Component, OnInit } from '@angular/core';
import { TodoFacadeService } from '../../services/todo-facade.service';
import { Observable } from 'rxjs';
import { Todo } from '../../misc/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]> = this.todoFacadeService.getAllTodos();
  constructor(private todoFacadeService: TodoFacadeService) {}

  ngOnInit(): void {
    this.todoFacadeService.getAllTodos().subscribe();
  }
}
