import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { Post } from 'src/app/shared/shared.model';

@Injectable({
  providedIn: 'root'
})
export class PostBlService {

  constructor() { }

  mapPostList(data: Observable<Post[]>): Observable<Post[]> {
    return data.pipe(
      map(data => {
        const posts: Post[] = [];
        for (const key in data) {
          posts.push({ ...data[key], id: key })
        }

        return posts;
      })
    );
  }
}
