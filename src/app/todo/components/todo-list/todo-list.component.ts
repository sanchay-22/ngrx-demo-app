import { Component, OnInit } from '@angular/core';
import { TodoFacadeService } from '../../services/todo-facade.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoFacadeService: TodoFacadeService) {}

  ngOnInit(): void {
    this.todoFacadeService.getAllTodos().subscribe();
  }
}
