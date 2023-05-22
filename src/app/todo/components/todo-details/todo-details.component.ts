import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoEntityBaseService } from '../../services/todo-entity-base.service';
import { Todo } from '../../misc/todo.model';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})

@UntilDestroy()
export class TodoDetailsComponent implements OnInit {

  constructor(private  activateRoute: ActivatedRoute, private todoEntityBaseService: TodoEntityBaseService, private router: Router) {
  }

  toDo!: Todo | undefined;
  ngOnInit(): void {
    const todoID = this.activateRoute.snapshot.params['id'];
    console.log(todoID)
    this.fetchTodo(todoID);
  }

  fetchTodo(todoID: string): void {
    this.todoEntityBaseService.entities$.pipe(untilDestroyed(this),
      map((todos) => todos.find(todo => todo.id === todoID)),
      tap(todo => (this.toDo = (todo) ? todo : undefined))).subscribe();
  }

  navigateBack(): void {
    this.router.navigate(['todos']);
  }
}
