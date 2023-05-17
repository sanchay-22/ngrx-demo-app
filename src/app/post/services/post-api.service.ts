import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/misc/shared.model';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {
  postBaseUrl = 'https://ngrx-testing-app-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
  constructor(private http: HttpClient) { }

  getPostList(): Observable<any[]> { 
     return this.http.get<any[]>(this.postBaseUrl).pipe();
  }

  createPost(post: Post): Observable<{ name: string}> {
    return this.http.post< { name: string }>(this.postBaseUrl, { post });
  }

  updatePost(post: Post): Observable<{ name: string }> {
    const id = post.id;
    return this.http.patch<{ name: string }>(`https://ngrx-testing-app-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`, { post });
  }

  deletePost(id: string): any {
    return this.http.delete(`https://ngrx-testing-app-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`);
  }
}
