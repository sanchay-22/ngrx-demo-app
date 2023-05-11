import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/shared.model';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {
  postUrl = 'https://ngrx-testing-app-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
  constructor(private http: HttpClient) { }

  getPostList(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }
}
