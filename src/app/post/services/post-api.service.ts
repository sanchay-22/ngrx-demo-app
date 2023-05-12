import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Post } from 'src/app/shared/shared.model';
import { PostBlService } from './post-bl.service';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {
  postUrl = 'https://ngrx-testing-app-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
  constructor(private http: HttpClient, private postBlService: PostBlService) { }

  getPostList(): Observable<Post[]> { 
     return this.http.get<Post[]>(this.postUrl).pipe();
    }
}
