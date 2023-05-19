import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  addTodoForm!: FormGroup;

  ngOnInit(): void {
    this.addTodoForm = new FormGroup({
      title: new FormControl(null),
      des: new FormControl(null),
      status: new FormControl(null),
    });
  }

  onAddTodo(): void {
    console.log(this.addTodoForm.value);
  }
}
