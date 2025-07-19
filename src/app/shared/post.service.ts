import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './post-model';
import { Observable } from 'rxjs';
import { CreatePostPayload } from '../post/create-post/create-post.payload';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  private apiUrl = environment.BASE_API_URI;
  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>(`${this.apiUrl}/posts/`);
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts/`, postPayload);
  }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.apiUrl}/posts/${id}`);
  }

  getAllPostsByUser(name: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.apiUrl}/posts/by-user/${name}`);
  }
}
