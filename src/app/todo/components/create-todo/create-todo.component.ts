import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoFacadeService } from '../../services/todo-facade.service';
import { Todo, TodoPayloadAttributes } from '../../misc/todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  addTodoForm!: FormGroup;

  constructor(private todoFacadeService: TodoFacadeService, private router: Router) {}

  ngOnInit(): void {
    this.addTodoForm = new FormGroup({
      title: new FormControl(null),
      des: new FormControl(null),
      status: new FormControl(null),
    });
  }

  onAddTodo(): void {
    const payload: TodoPayloadAttributes = this.addTodoForm.value;
    this.todoFacadeService.addTodo(payload).subscribe(() => this.router.navigate(['/todos']));
  }
}
