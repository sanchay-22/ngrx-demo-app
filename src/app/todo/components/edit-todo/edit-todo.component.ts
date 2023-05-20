import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoFacadeService } from '../../services/todo-facade.service';
import { Todo, TodoPayloadAttributes } from '../../misc/todo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { TodoEntityBaseService } from '../../services/todo-entity-base.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent {
  editTodoForm!: FormGroup;
  todoID!: string;
  todo!: Todo;
  constructor(private todoFacadeService: TodoFacadeService, private router: Router, private aRoute: ActivatedRoute, private todoEntityBaseService: TodoEntityBaseService) {}

  ngOnInit(): void {
    this.todoID = this.aRoute.snapshot.params['id'];
    this.fetchTodo(this.todoID);
  }

  fetchTodo(todoID: string): void {
    this.todoEntityBaseService.entities$.pipe(
      map((todos) => todos.find(todo => todo.id === todoID)),
      tap(todo => ((todo) ? this.initializeTodoForm(todo) : '' ))
    ).subscribe();
  }

  initializeTodoForm(todo: Todo): void {
    this.editTodoForm = new FormGroup({
      title: new FormControl(todo.title),
      des: new FormControl(todo.des),
      status: new FormControl(todo.status),
    });
  }

  onEditTodo(): void {
    const payload = { ...this.editTodoForm.value, id: this.todoID };
    this.todoFacadeService.updateTodo(payload).subscribe(() =>  this.router.navigate(['/todos']));
  }
}
