import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  addPost(): void {
    console.log(this.postForm?.value);
  }

}
