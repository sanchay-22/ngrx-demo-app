import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/misc/shared.model';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {
  postUrl = 'https://ngrx-testing-app-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';
  postUrlBase = 'https://ngrx-testing-app-default-rtdb.asia-southeast1.firebasedatabase.app/posts/';

  constructor(private http: HttpClient) { }

  getPostList(): Observable<any[]> { 
     return this.http.get<any[]>(this.postUrl).pipe();
  }

  createPost(post: Post): Observable<{ name: string}> {
    return this.http.post< { name: string }>(this.postUrl, { post });
  }

  updatePost(post: Post): Observable<{ name: string }> {
    const id = post.id;
    return this.http.patch<{ name: string }>(`${this.postUrlBase}${id}.json`, { post });
  }

  deletePost(id: string): any {
    return this.http.delete(`${this.postUrlBase}${id}.json`);
  }

  getPostByID(id: string) : Observable<any> {
    return this.http.get<any>(`${this.postUrlBase}${id}.json`);
  }
}
