import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from 'src/app/shared/misc/shared.model';

@Injectable({
  providedIn: 'root'
})
export class PostBlService {

  constructor() { }

  mapPostList(data: Observable<any[]>): Observable<Post[]> {
    return data.pipe(
      map(data => {
        const posts: Post[] = [];
       if(!!data){
        for (const key in data) {
          
          posts.push({ id: key, title: data[key]?.post?.title, description: data[key]?.post?.description })
        }
       }
       
        return posts;
      })
    );
  }

  formatUpdatePostPayload(post: any): any {
    const updatePostPayload = {
      [post.id]: { title: post.title, description: post.description }
    }

    return updatePostPayload;
  }
}
